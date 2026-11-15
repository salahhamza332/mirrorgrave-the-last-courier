// Mirrorgrave — the Watch: patrol, detection, investigation.
import { lineBlocked, inFog } from './world.js';

const dist = (ax, ay, bx, by) => Math.hypot(ax - bx, ay - by);

export function updateGuards(world, player, dt, events) {
  for (const g of world.guards) {
    if (g.pauseT > 0) g.pauseT -= dt;

    let target = null, speed = g.speed;
    if (g.state === 'investigate') {
      target = { x: g.investigateX, y: g.investigateY };
      speed = g.speed * 1.35;
      if (dist(g.x, g.y, target.x, target.y) < 0.6) {
        g.investigateTimer = (g.investigateTimer ?? 2.4) - dt;
        if (g.investigateTimer <= 0) { g.state = 'patrol'; g.investigateTimer = undefined; }
      }
    } else {
      target = g.waypoints[g.wpIndex];
      if (dist(g.x, g.y, target.x, target.y) < 0.35) {
        g.wpIndex = (g.wpIndex + 1) % g.waypoints.length;
        g.pauseT = 0.7 + Math.random() * 0.9;
        target = g.waypoints[g.wpIndex];
      }
    }

    if (g.pauseT <= 0 && target) {
      const dx = target.x - g.x, dy = target.y - g.y;
      const d = Math.hypot(dx, dy);
      if (d > 0.01) {
        const desired = Math.atan2(dy, dx);
        g.angle = lerpAngle(g.angle, desired, Math.min(1, dt * 6));
        g.x += Math.cos(g.angle) * speed * dt;
        g.y += Math.sin(g.angle) * speed * dt;
      }
    }
  }
}

// How visible is the player to this guard right now? Returns 0..1 contribution rate.
export function guardSees(world, g, player, lanternOn, hidden, sprinting) {
  const dx = player.x - g.x, dy = player.y - g.y;
  const d = Math.hypot(dx, dy);
  let range = 7.2;
  if (lanternOn) range += 2.6;         // your light betrays you
  if (sprinting) range += 0.8;
  if (hidden) range -= 3.6;
  if (inFog(world, player.x, player.y)) range -= 2.2;
  range = Math.max(1.6, range);
  if (d > range) return 0;

  const ang = Math.atan2(dy, dx);
  let diff = Math.abs(normAngle(ang - g.angle));
  const fov = (hidden ? 0.42 : 0.62) * Math.PI; // half-angle; hidden shrinks effective cone
  if (diff > fov) return 0;
  if (lineBlocked(world, g.x, g.y, player.x, player.y)) return 0;

  const closeness = 1 - d / range;
  const centre = 1 - diff / fov;
  let rate = 0.28 + closeness * 0.85 + centre * 0.35;
  if (lanternOn) rate *= 1.35;
  if (sprinting) rate *= 1.3;
  if (hidden) rate *= 0.35;
  if (inFog(world, player.x, player.y)) rate *= 0.45;
  return rate;
}

export function nearestGuardDistance(world, player) {
  let m = Infinity;
  for (const g of world.guards) m = Math.min(m, dist(g.x, g.y, player.x, player.y));
  return m;
}

export function alertGuardsTo(world, x, y, radius) {
  for (const g of world.guards) {
    if (dist(g.x, g.y, x, y) <= radius) {
      g.state = 'investigate';
      g.investigateX = x + (Math.random() - 0.5) * 1.5;
      g.investigateY = y + (Math.random() - 0.5) * 1.5;
      g.investigateTimer = 3.2;
    }
  }
}

function normAngle(a) { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; }
function lerpAngle(a, b, t) { return a + normAngle(b - a) * t; }
