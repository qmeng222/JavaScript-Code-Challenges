function vegetarianMenu(menu) {
  const menuNode = document.querySelector("#menu"); // id="menu" in index.html
  const vegetarianOptions = menu.filter(
    (option) => option.isVegetarian === true
  );

  vegetarianOptions.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  });
}

const menu = [
  {
    name: "Eggplant Parmesan",
    isVegetarian: true,
  },
  {
    name: "Stuffed Shells",
    isVegetarian: true,
  },
  {
    name: "Spaghetti & Meatballs",
    isVegetarian: false,
  },
  {
    name: "Tiramisu",
    isVegetarian: true,
  },
];

vegetarianMenu(menu);
