# HTML & CSS demonstratie

Algemeen lesmateriaal met vijf pagina's: home, fictief profiel, projecten, journal en live demo. Open de map met een lokale webserver, bijvoorbeeld VS Code Live Server.

## Lesvoorbeelden

- Flexbox: horizontaal justify-content en verticaal align-items (flex-direction: row).
- Kader 04, Grid: vier blokken in twee kolommen en twee rijen; justify-content en align-content verplaatsen het hele raster onafhankelijk.
- Box-model: content-box meet 376 px, border-box 280 px. Op mobiel kan dit kader horizontaal scrollen.
- JavaScript: projectfilters, teller en knopstatus met aria-pressed en aria-live.
- De HTML-, CSS- en JavaScript-bestanden bevatten uitleg bij de nieuwe onderdelen.

## Afbeeldingen en metadata

Het externe [HTML5-logo van W3C](https://www.w3.org/html/logo/) valt onder [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/); bronvermelding staat in elke footer. De projectfoto's zijn decoratieve [Lorem Picsum](https://picsum.photos/)-afbeeldingen met vaste ID's. Daarom gebruiken ze alt=""; de projecttekst geeft de inhoud. Informatieve afbeeldingen vereisen een betekenisvolle alt-tekst. Width en height reserveren ruimte; lazy loading stelt laden van projectfoto's uit. Externe afbeeldingen vereisen internet.

Open Graph-meta-properties sturen de linkpreview op sociale platforms aan. Pas bij hergebruik titels, beschrijvingen en og:image aan en voeg eventueel og:url met je eigen publicatieadres toe. Het logo is geen validatiekeurmerk.

## Toegankelijkheid in de les

1. Installeer [WAVE voor je browser](https://wave.webaim.org/extension/), open de site en activeer de extensie. Bekijk Errors, Contrast, Alerts en Structure.
2. Verwijder in Developer Tools tijdelijk alt van een foto, scan opnieuw en herstel alt="". Bespreek het verschil tussen decoratieve en informatieve afbeeldingen.
3. Open Chrome Developer Tools > Lighthouse. Kies Mobile of Desktop en de categorieën Accessibility, Performance, Best Practices en SEO. [Officiële uitleg](https://developer.chrome.com/docs/lighthouse/overview).
4. Valideer alle vijf HTML-bestanden met de [W3C Nu HTML Checker](https://validator.w3.org/nu/). Controleer CSS met de [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
5. Test toetsenbord, zichtbare focus, 200% zoom, mobiel en uitgeschakeld JavaScript. Automatische controles bewijzen geen volledige WCAG-conformiteit.

## Publiceren

Gebruik de bestaande Git-remote en controleer Settings > Pages voor de ingestelde branch en map. Interne links zijn relatief zodat studenten de site onder hun eigen repositorypad kunnen gebruiken.
