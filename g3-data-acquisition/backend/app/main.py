from fastapi import FastAPI

app = FastAPI(title="TurtleGPR acquisition")


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
