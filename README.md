# Mirrorgrave: The Last Courier

> A 2.5D isometric dark-fantasy stealth game where a courier extracts three stolen relics from a floating cemetery before dawn.

[![make.fun · best-game-01](https://make.fun/badge/best-game-01.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![rank](https://make.fun/badge/best-game-01/salahhamza332/mirrorgrave-the-last-courier/rank.svg)](https://make.fun/bounty/best-game-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![reward](https://make.fun/badge/best-game-01/salahhamza332/mirrorgrave-the-last-courier/reward.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)

A public, open-source offline game in vanilla JavaScript (ES modules) rendered on canvas. In Mirrorgrave, you play a courier threading through fog and reflection to outstrip the Watch and extract before sunrise.

## Story

Three relics were stolen from the graves of kings and scattered through the Mirrorgrave — a cemetery that drifts between worlds. You are the last courier who walks between them. Recover the three relics, slip past the Watch, and board the extraction barge before dawn breaks the mist.

## Controls

| Key | Action |
| --- | --- |
| `WASD` / arrow keys | Move |
| `Shift` | Sprint (faster, louder, easier to spot) |
| `Space` | Hide / unhide (deepens near graves, mausoleums and dead trees) |
| `E` | Lantern / use — ring grave bells, take relics, board the barge |
| `R` | Restart the run |
| `Esc` | Pause / resume |

## Mechanics

- **Lantern** — always available (`E`). Reveals the hidden relics and a faint rune-trail toward the nearest one, and widens the pool of light around you. It also nearly doubles the range at which the Watch can make you out. Dark paths hide you; lit paths guide you.
- **The Watch** — five wardens patrol fixed routes with sweeping vision cones. Spotting fills the shared detection meter; sustain it and the run ends. Losing sight of you lets it drain. Suspicion (half-filled eye) draws wardens toward your last known position.
- **Hiding & concealment** — `Space` melts your silhouette into the mist; hiding beside stone (gravestones, mausoleums, dead trees) deepens it further. Fog banks smother sightlines on their own.
- **Grave bells** — three brass bells in the mist. Ring one (`E` beside it) and every warden within earshot breaks off to investigate — a distraction, on a cooldown.
- **Puddles** — rain-fed mirrors that slow your stride and shimmer under moonlight.
- **Dawn** — six minutes to sunrise. When the timer empties, the mist burns off and the Mirrorgrave keeps what it catches.
- **Scoring** — 400 per relic, plus up to +2,160 time bonus (6 per second remaining), up to +600 ghost bonus (lower peak detection, better) and +250 for a true ghost run (peak below 35%). Best delivery persists in `localStorage`.

## Project status

**Playable.** Foundation, stealth system, full game loop, synthesized Web Audio soundscape and headless-Chromium-verified screenshots are in place. No build step; no dependencies; no network requests at runtime.

## Layout

- `main.ts` — entrypoint. Copies `game/` and `screenshots/` into `$MAKEFUN_OUTPUT_DIR` (default `/output`) and writes `/output/dossier.json` via the official kit library.
- `game/` — the game. `game/index.html` loads `game/src/styles.css` and ES modules (`main.js`, `world.js`, `render.js`, `guards.js`, `audio.js`). All art is drawn procedurally on canvas; all audio is synthesized with Web Audio.
- `vendor/makefun-game.ts` — unmodified official `best-game-01` kit library.
- `screenshots/` — real renders captured from the game in headless Chromium.

## Build and run

```sh
node main.ts            # writes $MAKEFUN_OUTPUT_DIR (default /output)
python3 -m http.server --directory game 8080   # then open http://127.0.0.1:8080/
```

## License

MIT. See `LICENSE`.

## make.fun

Built by an AI agent for [make.fun’s “Make the best game” bounty](https://make.fun/bounty/best-game-01). Built for the bounty’s offline desktop browser format; no external assets or network requests are used at runtime.

<sub>Entered on [make.fun](https://make.fun/?ref=8tndrygv&utm_source=github&utm_medium=readme&utm_campaign=best-game-01) · AI agents build software for cash rewards</sub>
