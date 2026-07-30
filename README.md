## Valg av geoteknisk modelleringsverktøy og hjelpemiddel

<pre class="mermaid">
flowchart TD
  A([Start]) --> B{Type modell?}
  B --> C[Grunnlagsmodell]
  B --> D[Fagmodell]
  C --> AA{Modellere}
  AA --> E[Bergmodell]
  AA --> F[Grunnforholdsmodell]
    C --> AB[Følgeskriv]
  AB --> AF([Gode eksempler])
  C --> AC[Kontroll]
  AC --> AD([Prosedyre])
  D --> DA{Modellere}
  D --> DB[MMI-beskrivelse]
  D --> DC[Parametersett]
  D --> DD[Kontroll]
  DA --> G[Sikringskonstruksjon, peler]
  DA --> H[Graving, berguttak, tørrmur, fylling]
  E --> I([Civil 3D])
  E --> J([Leapfrog Works])
  F --> K([Leapfrog Works])
  G --> L([Revit])
  H --> M([Civil 3D])
  M --> N[Gravemodell]
  M --> O[Tørrmur]
  M --> P[Fylling]

  click E "javascript:void(0)" "Modellere en teoretisk bergoverflate" _blank
  click F "javascript:void(0)" "GOM, modellere volumer for løsmasser og berg" _blank
  click I "https://multiconsultas.sharepoint.com/sites/KNV-Geoteknikk/_layouts/15/Doc.aspx?sourcedoc={e85bab41-bc5b-4a09-9e75-866069919056}&action=edit&wd=target%281.%20Grunnlagsmodeller.one%7C383eba00-1468-436d-b187-12d85e37c390%2F1.2%20Bergmodell%7C01dc91f5-8d70-4674-82b3-70abfde384d0%2F%29&wdorigin=NavigationUrl" "OneNote om bergmodell" _blank
  click J "https://multiconsultas.sharepoint.com/sites/LeapfrogWorks/_layouts/15/Doc.aspx?sourcedoc={cb109127-d401-4972-af23-03ea4a3acf31}&action=edit&wd=target%28Forside.one%7C348fbb65-faae-4231-87d2-269a986a3bc1%2FNotatblokk%20for%20Leapfrog%20Works%7C86ee2fb9-cfdb-4024-a0f0-0fd3ecec18ea%2F%29&wdorigin=NavigationUrl" "OneNote Leapfrog" _blank
  click K "https://multiconsultas.sharepoint.com/sites/LeapfrogWorks/_layouts/15/Doc.aspx?sourcedoc={cb109127-d401-4972-af23-03ea4a3acf31}&action=edit&wd=target%28Forside.one%7C348fbb65-faae-4231-87d2-269a986a3bc1%2FNotatblokk%20for%20Leapfrog%20Works%7C86ee2fb9-cfdb-4024-a0f0-0fd3ecec18ea%2F%29&wdorigin=NavigationUrl" "OneNote Leapfrog" _blank
  click L "https://multiconsultas.sharepoint.com/sites/KNV-Geoteknikk/_layouts/15/Doc.aspx?sourcedoc={ab651cfb-fa35-471f-bc1b-25b223adcd1e}&action=edit&wd=target%28Forside.one%7C706155ab-f796-44e0-94ad-dd62a41685d9%2FNotatblokk%20for%20Revit%20%E2%80%93%20Tips%20og%20triks%7C77ce184b-a619-4a67-a09a-1e8a5c7d3041%2F%29&wdorigin=NavigationUrl" "OneNote Revit" _blank
</pre>

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@latest/dist/mermaid.esm.min.mjs';
  mermaid.initialize({
    startOnLoad: true,
    securityLevel: 'loose'
  });
</script>
