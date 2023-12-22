let peopleFromLocalStorage = null;
if (localStorage.getItem("people")?.length > 0) {
  peopleFromLocalStorage = JSON.parse(localStorage.getItem("people"));
}
let people = peopleFromLocalStorage || [];

console.log(localStorage.getItem("people"));
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const peopleListEl = document.getElementById("people-list");
renderList(people);
addButtonEl.addEventListener("click", function () {
  let inputValue =
    inputFieldEl.value.length > 0 ? inputFieldEl.value : null;

  if (inputValue) {
    people.push(inputValue);
    console.log(JSON.stringify(people));
    localStorage.setItem("people", JSON.stringify(people));
    clearInputFieldEl();

    renderList(people);
  }
});

function renderList(array) {
  clearPeopleListEl();

  for (let i = 0; i < array.length; i++) {
    let currentPerson = array[i];

    appendPersonToPeopleListEl(currentPerson);
  }
}

function clearPeopleListEl() {
  peopleListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendPersonToPeopleListEl(person) {
  let newEl = document.createElement("li");

  newEl.textContent = person;

  newEl.addEventListener("dblclick", function () {
    let index = people.indexOf(person);

    people.splice(index, 1);
    console.log({ people });
    if (people.length === 0) {
      localStorage.removeItem("people");
    } else {
      console.log("JSON: ", JSON.stringify(people));
      localStorage.setItem("people", JSON.stringify(people));
    }
    renderList(people);
  });

  peopleListEl.append(newEl);
}
