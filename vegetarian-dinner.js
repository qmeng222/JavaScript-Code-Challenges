function vegetarianMenu(menu) {
  const menuNode = document.querySelector("#menu"); // id="menu" in index.html

  // find all vegetarian options:
  const vegetarianOptions = menu.filter(
    (option) => option.isVegetarian === true
  );

  // for each vege option, create a li element, fill the element with dish name, then append it to menuNode:
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

/*
textContent vs. innerText:

- textContent:
  • returns the text content of an element and all its descendants, including hidden elements, comments, and spaces
  • returns the raw text content, with no regard for style or layout
- innerText:
  • returns the visible text content of an element, ignoring hidden elements, comments, and spaces
  • takes into account the style and layout of the element and its ancestors and returns only the text that would be visible to the user

Property	     Includes descendants    Style and layout
textContent		 Yes	                   No
innerText		   No	                     Yes
Note: both properties return a string, and both properties are read-only.
 */
