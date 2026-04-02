# KM Tracker

A single-file Dutch kilometer registration web app.

## Project structure

- `km-tracker.html` — the entire application (HTML/CSS/JS, no build step)

## Git workflow

- Default branch: `main`
- Always develop and push to `main`
- Remote: `https://github.com/Runtyhealer/KM-Tracker.git`
- If `git push` fails with 403, the git proxy is blocking — use the PAT via credential helper or embed it in the remote URL

## Running locally

```bash
python3 -m http.server 8080
# open http://localhost:8080/km-tracker.html
```
