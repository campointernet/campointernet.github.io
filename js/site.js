"use strict";

// Zoek alle elementen in de HTML met het attribuut:
// data-current-year
//
// Bijvoorbeeld:
// <span data-current-year></span>
//
// querySelectorAll geeft een lijst met alle gevonden elementen terug.
// Met forEach lopen we door elk gevonden element heen.
document.querySelectorAll("[data-current-year]").forEach((item) => {
  // new Date() maakt een datumobject aan met de huidige datum en tijd.
  // getFullYear() haalt alleen het huidige jaartal eruit.
  //
  // textContent zet vervolgens dat jaartal in het HTML-element.
  //
  // Bijvoorbeeld:
  // <span data-current-year></span>
  //
  // wordt in 2026:
  // <span data-current-year>2026</span>
  item.textContent = new Date().getFullYear();
});

// ------------------------------------------------------------
// PROJECTFILTER
// ------------------------------------------------------------

// Zoek alle knoppen met een data-filter attribuut.
//
// Bijvoorbeeld:
// <button data-filter="all">Alles</button>
// <button data-filter="web">Web</button>
const filterButtons = document.querySelectorAll("[data-filter]");

// Zoek alle projectkaarten met een data-category attribuut.
//
// Bijvoorbeeld:
// <article data-category="web html css">
const projectCards = document.querySelectorAll("[data-category]");

// Zoek het element waarin we straks tonen
// hoeveel projecten zichtbaar zijn.
//
// Bijvoorbeeld:
// <p id="filter-status"></p>
const filterStatus = document.querySelector("#filter-status");

// Loop door alle filterknoppen heen.
filterButtons.forEach((button) => {
  // Voeg aan iedere knop een click-event toe.
  //
  // De functie hieronder wordt dus uitgevoerd
  // wanneer iemand op deze knop klikt.
  button.addEventListener("click", () => {
    // Haal de waarde op van data-filter van de geklikte knop.
    //
    // Bijvoorbeeld:
    // data-filter="web"
    //
    // wordt:
    // filter = "web"
    const filter = button.dataset.filter;

    // Teller voor het aantal kaarten dat zichtbaar blijft.
    // We beginnen bij 0.
    let visible = 0;

    // Loop opnieuw door alle filterknoppen.
    filterButtons.forEach((item) =>
      // aria-pressed vertelt aan bijvoorbeeld screenreaders
      // welke filterknop actief is.
      //
      // item === button controleert:
      // is deze knop dezelfde knop als waarop geklikt is?
      //
      // true  -> aria-pressed="true"
      // false -> aria-pressed="false"
      item.setAttribute("aria-pressed", String(item === button)),
    );

    // Loop door alle projectkaarten.
    projectCards.forEach((card) => {
      // Bepaal of deze kaart zichtbaar moet zijn.
      //
      // Eerste mogelijkheid:
      // filter === "all"
      //
      // Dan mogen alle kaarten zichtbaar zijn.
      //
      // Tweede mogelijkheid:
      // card.dataset.category
      //
      // Bijvoorbeeld:
      // "web html css"
      //
      // split(" ") maakt hiervan:
      // ["web", "html", "css"]
      //
      // includes(filter) kijkt of bijvoorbeeld "web"
      // in deze lijst voorkomt.
      const show =
        filter === "all" || card.dataset.category.split(" ").includes(filter);

      // hidden is een standaard HTML-property.
      //
      // show = true
      // dan wordt hidden = false
      // en dus blijft de kaart zichtbaar.
      //
      // show = false
      // dan wordt hidden = true
      // en wordt de kaart verborgen.
      card.hidden = !show;

      // Als de kaart zichtbaar is,
      // verhogen we de teller met 1.
      if (show) visible += 1;
    });

    // Alleen uitvoeren als #filter-status echt bestaat.
    if (filterStatus)
      // Toon hoeveel projecten zichtbaar zijn.
      //
      // De ternary operator:
      //
      // visible === 1 ? "project" : "projecten"
      //
      // betekent:
      //
      // als visible gelijk is aan 1:
      // gebruik "project"
      //
      // anders:
      // gebruik "projecten"
      //
      // Resultaat bijvoorbeeld:
      // "1 project zichtbaar"
      // "4 projecten zichtbaar"
      filterStatus.textContent = `${visible} ${visible === 1 ? "project" : "projecten"} zichtbaar`;
  });
});

// ------------------------------------------------------------
// FLEXBOX-DEMO
// ------------------------------------------------------------

// Elke knop beschrijft doel, CSS-eigenschap en waarde via data-attributen.
// De twee assen bewaren onafhankelijk hun geselecteerde knop.
document.querySelectorAll("[data-layout]").forEach((button) => {
  button.addEventListener("click", () => {
    const { layout, property, value } = button.dataset;
    const stage = document.querySelector("#" + layout + "-stage");
    const status = document.querySelector("#" + layout + "-status");
    if (!stage || !status) return;
    stage.style.setProperty(property, value);
    document.querySelectorAll("[data-layout]").forEach((item) => {
      if (
        item.dataset.layout === layout &&
        item.dataset.property === property
      ) {
        item.setAttribute("aria-pressed", String(item === button));
      }
    });
    // Toon beide actuele eigenschappen; aria-live leest de wijziging voor.
    const css = getComputedStyle(stage);
    const vertical = layout === "grid" ? "align-content" : "align-items";
    status.textContent =
      "justify-content: " +
      css.justifyContent +
      "; " +
      vertical +
      ": " +
      css.getPropertyValue(vertical) +
      ";";
  });
});

// ------------------------------------------------------------
// BOX-SIZING DEMO
// ------------------------------------------------------------

// Zoek het element met de class content-box-demo.
const contentBox = document.querySelector(".content-box-demo");

// Zoek het element met de class border-box-demo.
const borderBox = document.querySelector(".border-box-demo");

// Alleen doorgaan als beide elementen bestaan.
//
// Dit voorkomt een fout wanneer één van de twee
// niet op de pagina aanwezig is.
if (contentBox && borderBox) {
  // Zoek het element waarin de gemeten breedte
  // van de content-box wordt weergegeven.
  //
  // getBoundingClientRect()
  // geeft informatie terug over de werkelijke
  // grootte en positie van het element in de browser.
  //
  // .width pakt de echte weergegeven breedte.
  //
  // Math.round rondt de waarde af op een heel getal.
  //
  // Bijvoorbeeld:
  // werkelijk: 410 px
  document.querySelector("#content-measure").textContent =
    `werkelijk: ${Math.round(contentBox.getBoundingClientRect().width)} px`;

  // Hetzelfde doen we voor de border-box.
  //
  // Hiermee kun je dus mooi laten zien dat:
  //
  // content-box:
  // width + padding + border
  // samen groter kunnen worden dan de opgegeven width.
  //
  // border-box:
  // padding en border worden binnen de opgegeven width meegerekend.
  document.querySelector("#border-measure").textContent =
    `werkelijk: ${Math.round(borderBox.getBoundingClientRect().width)} px`;
}

// ------------------------------------------------------------
// COUNTER
// ------------------------------------------------------------

// Variabele waarin we de teller bewaren.
//
// let gebruiken we omdat de waarde later verandert.
let count = 0;

// Zoek het HTML-element waarin de teller zichtbaar is.
//
// Bijvoorbeeld:
// <span id="counter">0</span>
const counter = document.querySelector("#counter");

// Zoek de knop met id="counter-button".
//
// De ? voor .addEventListener is optional chaining.
//
// Dat betekent:
// als de knop bestaat, voeg dan de event listener toe.
//
// Bestaat de knop niet,
// dan geeft JavaScript geen fout.
document.querySelector("#counter-button")?.addEventListener("click", () => {
  // Verhoog count met 1.
  //
  // Hetzelfde als:
  // count = count + 1;
  count += 1;

  // Zet de nieuwe waarde in het HTML-element.
  counter.textContent = count;
});

// Zoek de resetknop.
//
// Ook hier voorkomt ?. een fout
// wanneer het element niet bestaat.
document.querySelector("#reset-button")?.addEventListener("click", () => {
  // Zet de variabele terug naar 0.
  count = 0;

  // Toon opnieuw 0 op de pagina.
  counter.textContent = count;
});
