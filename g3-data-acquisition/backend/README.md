# G3 — Acquisition backend

FastAPI service that will drive the sweeps, record raw data and stream it live to the interface. In production it also serves the built [frontend](../frontend/). See the [G3 README](../README.md) for the full setup.

## Commands

From this folder (requires [uv](https://docs.astral.sh/uv/)):

```bash
uv sync                                # install dependencies (Python 3.11)
uv run uvicorn app.main:app --reload   # dev server on http://localhost:8000 (API docs: /docs)
uv run pytest                          # tests
uv run ruff check .                    # lint
uv run ruff format .                   # format
```

Add a dependency with `uv add <package>` (or `uv add --dev <package>` for tooling), never by editing `uv.lock` by hand.

## Layout

```
app/
  main.py      FastAPI app: API routes under /api, then the built frontend on /
tests/         pytest tests (files named test_*.py)
```

All API routes start with `/api` so they never collide with the frontend pages and the Vite dev proxy can forward them.

## API

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Returns `{"status": "ok"}` when the backend is running |
