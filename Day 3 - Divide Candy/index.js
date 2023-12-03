const candiesInput = document.getElementById("candies-input");
const childrenInput = document.getElementById("children-input");
const submit = document.getElementById("submit");

const childrenNum = document.getElementById("children-num");
const candyNum = document.getElementById("candy-num");
const result = document.getElementById("result");

const validationAlert = document.getElementById("validation-alert");

submit.addEventListener("click", () => {
  const children = childrenInput?.value;
  const candies = candiesInput?.value;
  candyNum.textContent = "-";
  childrenNum.textContent = "-";
  result.textContent = "-";

  if (!parseInt(children)) {
    childrenInput.style.color = "red";
    childrenInput.style.border = "2px solid red";
    childrenInput.classList.add("animation-shake");
    setTimeout(() => {
      childrenInput.style.color = "black";
      childrenInput.style.border = "none";
      childrenInput.classList.remove("animation-shake");
    }, 1500);
  }
  if (!parseInt(candies)) {
    candiesInput.style.color = "red";
    candiesInput.style.border = "2px solid red";
    candiesInput.classList.add("animation-shake");
    setTimeout(() => {
      candiesInput.style.color = "black";
      candiesInput.style.border = "none";
      candiesInput.classList.remove("animation-shake");
    }, 1500);
  }
  if (parseInt(children)) {
    childrenInput.style.color = "black";
    childrenInput.style.border = "none";
    childrenInput.classList.remove("animation-shake");
  }
  if (parseInt(candies)) {
    candiesInput.style.color = "black";
    candiesInput.style.border = "none";
    candiesInput.classList.remove("animation-shake");
  }

  if (parseInt(children) && parseInt(candies)) {
    validationAlert.style.display = "none";
    calcTotalCandies(children, candies);
  } else {
    validationAlert.style.display = "block";
    setTimeout(() => {
      validationAlert.style.display = "none";
    }, 3000);
  }
});

function calcTotalCandies(children, candy) {
  const candiesOnPerChild = Math.floor(candy / children).toFixed(0);
  const totalCandiesEaten = children * candiesOnPerChild;
  console.log(totalCandiesEaten);
  candyNum.textContent = candy;
  childrenNum.textContent = children;
  result.textContent = totalCandiesEaten;
}

// calcTotalCandies(3, 10); // expected output: 9
// calcTotalCandies(4, 20); // expected output: 20
// calcTotalCandies(6, 25); // expected output: 24

/** Challenge:
 * Some children have got some pieces of candy. They
 * want to eat as much candy as they can but each
 * child must eat exactly the same amount. Determine
 * how many pieces of candy can be eaten altogether.
 * A piece of candy can not be split.
 *
 * Example:
 * Children: 3, Candies: 10
 * Each of the 3 children can eat 3 candies.
 * So the total number of candies that can be eaten
 * is 3*3 = 9. So the function calcTotalCandies should
 * log out 9.
 **/
