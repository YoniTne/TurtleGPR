# TurtleGPR — acquisition backend (G3)

FastAPI service that runs the acquisition and serves the supervision interface.

Requires [uv](https://docs.astral.sh/uv/). From this folder:

```bash
uv sync                                # install dependencies (Python 3.11)
uv run uvicorn app.main:app --reload   # start the dev server on http://localhost:8000
uv run pytest                          # run the tests
uv run ruff check .                    # lint
```
