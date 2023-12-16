const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const nameEl = document.getElementById("name");
const toNiceEl = document.getElementById("toNice");
const toNaughtyEl = document.getElementById("toNaughty");

const btn = document.getElementById("btn");
const addNewBtn = document.getElementById("addNew-btn");

const addNewContainer = document.querySelector(".add-new-container");
const submitNew = document.getElementById("submitNew");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

btn.addEventListener("click", sort);
addNewBtn.addEventListener("click", showUpAddNewName);
submitNew.addEventListener("click", addNewName);

function sort() {
  niceList.innerHTML = "";
  naughtyList.innerHTML = "";
  sorteesArr.forEach((sm) => {
    if (sm.hasBeenGood) {
      niceList.innerHTML += `<li>${sm.name}</li>`;
    } else {
      naughtyList.innerHTML += `<li>${sm.name}</li>`;
    }
  });
}

function showUpAddNewName() {
  addNewContainer.style.display = "flex";
  addNewBtn.disabled = true;
}

function addNewName() {
  const name = nameEl.value.trim();
  const isNiceList = toNiceEl.checked;
  const isNaughtyList = toNaughtyEl.checked;
  if (name.length > 1 && (isNiceList || isNaughtyList)) {
    const newItem = {
      name,
      hasBeenGood: isNiceList,
    };
    sorteesArr.push(newItem);
    sort();
    nameEl.value = "";
    toNiceEl.checked = true;
    addNewBtn.disabled = false;
    addNewContainer.style.display = "none";
    console.log("Okay");
  } else {
    alert("Fill All fields");
  }
}

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
