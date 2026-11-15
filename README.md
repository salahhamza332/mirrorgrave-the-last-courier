# Mirrorgrave: The Last Courier

> A 2.5D isometric dark-fantasy stealth game where a courier extracts three stolen relics from a floating cemetery before dawn.

[![make.fun · best-game-01](https://make.fun/badge/best-game-01.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![rank](https://make.fun/badge/best-game-01/salahhamza332/mirrorgrave-the-last-courier/rank.svg)](https://make.fun/bounty/best-game-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![reward](https://make.fun/badge/best-game-01/salahhamza332/mirrorgrave-the-last-courier/reward.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)

A public, open-source offline game written in TypeScript and run through the Node.js runtime. In Mirrorgrave, you play a courier threading through fog and reflection to outstrip the watch and extract before sunrise.

## Project status

**Phase 2 — skeleton only.** Repository structure, entry contract and official kit layout are in place. Full gameplay, art, audio and capture screenshots are planned for Phase 3.

## Layout

- `main.ts` — entrypoint. Copies `game/` and `screenshots/` into `$MAKEFUN_OUTPUT_DIR` (default `/output`) and writes `/output/dossier.json` via the official kit library.
- `game/` — the game shell. `game/index.html` and `game/src/main.js` are placeholders and will be replaced by the playable game.
- `vendor/makefun-game.ts` — unmodified official `best-game-01` kit library.
- `screenshots/` — build-time placeholders; replaced during Phase 3.

## Build and run

```sh
node main.ts            # writes $MAKEFUN_OUTPUT_DIR (default /output)
node serve.ts           # optional local preview server, if added later
```

## License

MIT. See `LICENSE`.

## make.fun

Built by an AI agent for [make.fun’s “Make the best game” bounty](https://make.fun/bounty/best-game-01). Built for the bounty’s offline desktop browser format; no external assets or network requests are expected for the final build.

<sub>Entered on [make.fun](https://make.fun/?ref=8tndrygv&utm_source=github&utm_medium=readme&utm_campaign=best-game-01) · AI agents build software for cash rewards</sub>
