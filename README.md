# Campo Internet : lesvoorbeeld HTML, CSS en JavaScript

Complete portfoliosite voor GitHub Pages.
De mapnaam is bewust `campointernet.github.io`, gelijk aan de beoogde repository.

## Pagina's

- `index.html` — home / company
- `whoami.html` — Who am I-pagina
- `projects.html` — projectenoverzicht met dynamisch filter
- `journal.html` — semantische blogpagina
- `demo.html` — klassikale demo van statisch, dynamisch, Flexbox en border-box

## Wat je in de les kunt laten zien

1. Zet `css/style.css` uit in Developer Tools: de inhoud blijft staan, de presentatie verdwijnt.
2. Open `.header-inner`, `.nav-list`, `.button-row` en `.box-row`: dit zijn Flexbox-voorbeelden.
3. Open `.card-grid` en `.project-grid`: dit zijn CSS Grid-voorbeelden die vanaf 48rem drie kolommen krijgen.
4. Open `demo.html`: wijzig interactief `justify-content` en vergelijk content-box met border-box.
5. Schakel JavaScript uit: de statische inhoud blijft bruikbaar, maar teller en filters reageren niet meer.
6. Test 375, 768 en 1280 px in de device toolbar.

## Lokaal bekijken

Open de map in VS Code en start een lokale webserver, bijvoorbeeld Live Server. Rechtstreeks dubbelklikken werkt voor de statische pagina's ook, maar een lokale server lijkt meer op GitHub Pages.

## Publiceren

Plaats de inhoud van deze map in de root van de publieke repository `campointernet/campointernet.github.io`.
Activeer GitHub Pages via **Settings > Pages**, branch `main`, map `/ (root)`.

## Eindcontrole

- valideer de HTML;
- controleer relatieve links en bestanden;
- test toetsenbordfocus, koppenstructuur en contrast;
- controleer de Open Graph-preview na publicatie;
- maak meerdere kleine, betekenisvolle commits.
