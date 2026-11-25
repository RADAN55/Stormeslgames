# Play It Forward · EL Games for Content Teachers

A free EL Publishing resource: 100 English-learner-friendly classroom games for math, science, social studies, ELA and elective/CTE teachers.

Each game is tagged by:

- **Category:** Vocabulary, Academic talk, Reading & listening, Writing, By subject, Digital platforms
- **ELPA21 level:** E = Emerging (Levels 1–2), P = Progressing (Levels 3–4), A = All levels
- **Prep:** None, Low or Med

The page includes:

- A game finder with search and filters
- A "Pick one for me" button
- A copyable sentence frame on each card
- A quick-picks table by situation and level
- A print stylesheet
- A sources list

## Files

- `index.html` — the complete site (single file, no build step needed to view)
- `games.js` — the game data (source of truth)
- `template.html` — page layout; `index.html` = template with `games.js` inlined

To add or change a game, edit `games.js`, then rebuild:

```bash
python3 -c "t=open('template.html').read();d=open('games.js').read();open('index.html','w').write(t.replace('/*__DATA__*/',d))"
```

## Publish

Settings → Pages → Deploy from a branch → `main` / root.

Part of the [EL Publishing hub](https://radan55.github.io/everyteacher/). Every teacher is a language teacher.
