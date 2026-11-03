# G3 — Data acquisition & supervision interface

Software that runs on the radar's Raspberry Pi: it records each frequency sweep from the VNA to raw data files ([#8](../../../issues/8)) and provides the operator interface to start/stop a scan and watch the data live ([#7](../../../issues/7)).

> 🚧 Early stage: only the project base is in place, acquisition features come next.

## Structure

| Folder | Content | Stack |
|---|---|---|
| [`backend/`](backend/) | Acquisition service and API, serves the interface in production | Python 3.11, FastAPI, uv |
| [`frontend/`](frontend/) | Operator interface | Svelte 5, TypeScript, Vite |

The browser only talks to the backend through `/api/...` routes (HTTP, and WebSockets for live data).

## Prerequisites

- [uv](https://docs.astral.sh/uv/getting-started/installation/) — installs Python 3.11 by itself if needed
- [Node.js](https://nodejs.org/) 20.19+ or 22.12+ — only needed to develop or build the frontend, not to run it on the Pi

First install, from this folder:

```bash
cd backend && uv sync && cd ..
cd frontend && npm install && cd ..
```

## Development

Run both servers, each in its own terminal:

```bash
# terminal 1 — backend on http://localhost:8000
cd backend
uv run uvicorn app.main:app --reload

# terminal 2 — frontend on http://localhost:5173
cd frontend
npm run dev
```

Open **http://localhost:5173**. Vite reloads the page on every change and forwards `/api` calls to the backend. The FastAPI API docs are at http://localhost:8000/docs.

## Production (Raspberry Pi)

Build the frontend once, then only the backend runs: it serves both the API and the interface.

```bash
cd frontend && npm run build    # creates frontend/dist/
cd ../backend
uv run uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Open **http://localhost:8000** on the Pi, or `http://<pi-address>:8000` from a phone on the same network (`--host 0.0.0.0` allows that).

## Before committing

| | Check | Auto-fix |
|---|---|---|
| Backend (`backend/`) | `uv run pytest`<br>`uv run ruff check .`<br>`uv run ruff format --check .` | `uv run ruff check --fix .`<br>`uv run ruff format .` |
| Frontend (`frontend/`) | `npm run lint`<br>`npm run check`<br>`npm run build` | `npm run lint:fix` |

## Why FastAPI + Svelte

- **Acquisition is independent from the interface**: if the UI crashes or the browser is closed, sweeps keep being recorded.
- **Viewable from any device**: the Pi screen is hard to read in direct sunlight; operators can follow the scan from a phone or tablet over Wi-Fi.
- **Light on the Pi**: the frontend compiles to static files served by FastAPI, so the Pi only needs Python, not Node.js.
