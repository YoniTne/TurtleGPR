<script lang="ts">
    let status = $state('…')

    fetch('/api/health')
        .then((r) => r.json() as Promise<{ status: string }>)
        .then((data) => (status = data.status))
        .catch(() => (status = 'unreachable'))
</script>

<main>
    <h1>TurtleGPR</h1>
    <p>Backend: {status}</p>
</main>
