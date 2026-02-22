import { dishes } from "./dishes.js";

const container = document.querySelector(".dish-gallery");

dishes.forEach((dish) => {
  const dishCard = document.createElement("div");
  dishCard.classList.add("dish-card");
  dishCard.innerHTML = `
    <img
      src="${dish.image}"
      alt="${dish.name}"
      class="dish-image"
    />
    <h3>${dish.name}</h3>
    <p>${dish.country} | ${dish.ingredients}</p>
    `;

  container.appendChild(dishCard);
});
