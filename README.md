# VebjornSolli.github.io

<div class="mermaid">
flowchart TD
    A[Start] --> B{Beslutning?}
    B -->|Ja| C[Resultat 1]
    B -->|Nei| D[Resultat 2]
    click C "https://example.com/resultat1" "Tooltip-tekst"
    click D "https://example.com/resultat2" _blank
</div>

<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({ startOnLoad: true });
</script>
