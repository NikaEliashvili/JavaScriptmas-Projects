import { meals } from "./data.js";
const vegetarianInput = document.getElementById("vegetarian-input");
const guests = document.getElementById("guests");
const btn = document.getElementById("btn");
const food = document.getElementById("food");
const recipe = document.getElementById("recipe");

btn.addEventListener("click", calculate);

function calculate() {
  if (parseInt(guests.value)) {
    let isVegetarian = Boolean(vegetarianInput.checked);
    let numGuests = parseInt(guests.value);

    const mealType = isVegetarian
      ? "Vegetarian"
      : numGuests <= 4
      ? "4 people or less"
      : "5+ people";
    const chosenType = meals.filter(
      (meal) => meal.type === mealType
    )[0];
    const mealSuggestion = chosenType.suggestions;

    const randNum = () =>
      Math.floor(Math.random() * mealSuggestion.length);
    let randIndex = randNum();

    if (mealSuggestion[randIndex] === food.textContent) {
      randIndex = randNum();
    }

    const mealRecipe = chosenType.recipes.filter(
      (meal) => meal.name === mealSuggestion[randIndex]
    )[0];

    food.innerHTML = "<span class='loading'></span>";
    recipe.classList.remove("popup");

    setTimeout(() => {
      food.textContent = mealSuggestion[randIndex];
      recipe.classList.add("popup");
      recipe.style.display = "flex";
      recipe.innerHTML = ` 
      <h1>${mealRecipe.name}</h1>
    <div class="recipe-container">
      <div class="img-container" >
        <img loading="lazy" src=${mealRecipe.imagePath} />
      </div>
      <div class="list-container" >
        <ul>
        ${mealRecipe.ingredients
          .map((ingredient) => `<li><span>${ingredient}</span></li>`)
          .join("")}
              </ul>
              </div>
              </div>`;
    }, 500);
  } else {
    btn.textContent = "Allowed only numbers more than 0";
    btn.style.color = "red";
    btn.style.border = "2px solid red";
    setTimeout(() => {
      btn.textContent = "Calculate";
      btn.style.color = "#56924d";
      btn.style.border = "none";
    }, 1500);
  }
}

/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey
 
Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */
