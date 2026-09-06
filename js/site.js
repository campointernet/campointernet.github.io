"use strict";

document.querySelectorAll("[data-current-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const filterStatus = document.querySelector("#filter-status");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visible = 0;
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    projectCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category.split(" ").includes(filter);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (filterStatus) filterStatus.textContent = `${visible} ${visible === 1 ? "project" : "projecten"} zichtbaar`;
  });
});

const flexStage = document.querySelector("#flex-stage");
const flexStatus = document.querySelector("#flex-status");
document.querySelectorAll("[data-justify]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-justify]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    flexStage.style.justifyContent = button.dataset.justify;
    flexStatus.textContent = `justify-content: ${button.dataset.justify}`;
  });
});

const contentBox = document.querySelector(".content-box-demo");
const borderBox = document.querySelector(".border-box-demo");
if (contentBox && borderBox) {
  document.querySelector("#content-measure").textContent = `werkelijk: ${Math.round(contentBox.getBoundingClientRect().width)} px`;
  document.querySelector("#border-measure").textContent = `werkelijk: ${Math.round(borderBox.getBoundingClientRect().width)} px`;
}

let count = 0;
const counter = document.querySelector("#counter");
document.querySelector("#counter-button")?.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
});
document.querySelector("#reset-button")?.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
