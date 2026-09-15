// ============================================================
// OPDRACHT 1 — DOM-MANIPULATIE
// Selecteren, aanpassen, maken, toevoegen en verwijderen.
// ============================================================
const title = document.querySelector("#demo-title");
const description = document.getElementById("demo-description");
const output = document.querySelector("#output");
const runDomButton = document.querySelector("#run-dom");
const removeDomButton = document.querySelector("#remove-dom");
const resetDomButton = document.querySelector("#reset-dom");
let createdParagraph = null;

runDomButton.addEventListener("click", () => {
  title.textContent = "Hello World!";
  description.innerHTML = "De DOM is <strong>dynamisch</strong>: JavaScript heeft deze inhoud aangepast.";
  title.style.color = "#076d69";
  if (!createdParagraph) {
    createdParagraph = document.createElement("p");
    createdParagraph.textContent = "Dit element is met createElement() gemaakt en met appendChild() toegevoegd.";
    output.appendChild(createdParagraph);
  }
});

removeDomButton.addEventListener("click", () => {
  if (createdParagraph) { createdParagraph.remove(); createdParagraph = null; }
});

resetDomButton.addEventListener("click", () => {
  title.textContent = "Original heading";
  title.style.color = "";
  description.textContent = "Some text.";
  if (createdParagraph) createdParagraph.remove();
  createdParagraph = null;
});

// ============================================================
// OPDRACHT 2 — PRODUCTENPAGINA
// Data renderen met forEach/createElement en sorteren via events.
// ============================================================
const products = [
  { naam: "Koffie", prijs: 3.20, populariteit: 92 },
  { naam: "Thee", prijs: 2.80, populariteit: 71 },
  { naam: "Croissant", prijs: 3.75, populariteit: 88 },
  { naam: "Brownie", prijs: 4.25, populariteit: 84 },
  { naam: "Sandwich", prijs: 6.50, populariteit: 79 },
  { naam: "Sap", prijs: 3.95, populariteit: 67 }
];
const productList = document.querySelector("#product-list");
const sortPrice = document.querySelector("#sort-price");
const sortPopularity = document.querySelector("#sort-popularity");

function renderProducts(items) {
  productList.innerHTML = "";
  items.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    const heading = document.createElement("h3"); heading.textContent = product.naam;
    const price = document.createElement("p"); price.textContent = `€ ${product.prijs.toFixed(2).replace(".", ",")}`;
    const popularity = document.createElement("p"); popularity.textContent = `Populariteit: ${product.populariteit}`;
    card.appendChild(heading); card.appendChild(price); card.appendChild(popularity);
    productList.appendChild(card);
  });
}

sortPrice.addEventListener("click", () => {
  products.sort((a, b) => a.prijs - b.prijs);
  renderProducts(products);
});
sortPopularity.addEventListener("click", () => {
  products.sort((a, b) => b.populariteit - a.populariteit);
  renderProducts(products);
});
renderProducts(products);