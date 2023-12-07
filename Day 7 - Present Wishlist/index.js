const wishlistDOM = document.querySelector(".wishlist");
const newWishBefore = document.querySelector(".new-wish-before");
const addBtn = document.querySelector(".add-icon");
const closeBtn = document.getElementById("close-btn");
const newWishInput = document.getElementById("new-wish-input");
const addWishBtn = document.getElementById("add-wish-btn");
// Washlist Array
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [
  "Macbook Air M2",
  "Scrimba Subcription",
  "Data Tutashkhia",
];

let isAdded = false; // it is for wish animations
let isDeleted = false;

//Delete Wish
document.addEventListener("click", (e) => {
  if (e.target.dataset.deletewish) {
    deleteWish(parseInt(e.target.dataset.deletewish));
  }
});

closeBtn.addEventListener("click", () => {
  newWishBefore.style.display = "none";
});
addBtn.addEventListener("click", () => {
  newWishBefore.style.display = "flex";
});
addWishBtn.addEventListener("click", addNewWish);

newWishInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addNewWish();
});

function addNewWish() {
  const newItem = newWishInput.value;
  if (newItem.length > 0) {
    wishlist.push(newItem);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    isDeleted = false;
    isAdded = true;
    newWishInput.value = "";
    newWishBefore.style.display = "none";
    renderWishes();
  } else {
    addWishBtn.textContent = "No Wish To Add...";
    addWishBtn.classList.add("btn-error");

    setTimeout(() => {
      addWishBtn.textContent = "Add";
      addWishBtn.classList.remove("btn-error");
    }, 2000);
  }
}

function deleteWish(deleteWishID) {
  isAdded = false;
  isDeleted = true;
  wishlist = wishlist.filter((_, index) => {
    return index !== deleteWishID;
  });
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishes();
}

function renderWishes() {
  const allWishesEl = wishlist
    .map(
      (a, index) => `
        <div class="wish ${
          isAdded
            ? index === wishlist.length - 1 && "wish-anim"
            : isDeleted
            ? null
            : "wish-anim"
        }">
             <i class="fa-solid fa-cart-shopping"></i>
             <span> ${a} </span>
             <i data-deletewish=${index} id="delete-btn" class="fa-solid fa-circle-minus delete-icon"></i>
        </div>
        
        `
    )
    .join("");
  wishlistDOM.innerHTML = allWishesEl;
}

renderWishes();

function randomID(text) {
  const newText = text.split(" ")[0];
  const randNum = Math.floor(Math.random() * 1000);
  return `${newText}-${randNum}`;
}

/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/
