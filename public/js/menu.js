import { dishes } from "./dishes.js";

const container = document.querySelector(".menu-grid");

dishes.forEach((dish) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.innerHTML = `
    <img
      src="${dish.image}"
      alt="${dish.name}"
      class="menu-item-image"
    />
    <div class="menu-item-details">
      <h3>${dish.name}<span class="flag">🇮🇹</span></h3>
      <p class="description">
        ${dish.description}
      </p>
      <p class="price">${dish.price.toFixed(2)} €</p>
    </div>
    `;
  container.appendChild(menuItem);
});
