flowchart TD
    A[Start] --> B{Beslutning?}
    B -->|Ja| C[Resultat 1]
    B -->|Nei| D[Resultat 2]
    click C "https://example.com/resultat1" "Tooltip-tekst"
    click D "https://example.com/resultat2" _blank
