from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

FRONTEND_DIST = Path(__file__).resolve().parents[2] / "frontend" / "dist"

app = FastAPI(title="TurtleGPR acquisition")


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


# Serves the built Svelte app in production; mounted last so /api routes take priority.
# Skipped when the frontend has not been built (dev mode uses the Vite server instead).
if FRONTEND_DIST.is_dir():
    app.mount("/", StaticFiles(directory=FRONTEND_DIST, html=True), name="frontend")
