// =========================
// FOOD SEARCH
// =========================

const searchInput = document.getElementById("foodSearch");
const foodCards = document.querySelectorAll(".food-card");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    foodCards.forEach(function (card) {

        const foodName = card.dataset.name.toLowerCase();

        if (foodName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// =========================
// ORDER BUTTONS
// =========================

const orderButtons = document.querySelectorAll(".order-button");
const foodSelect = document.getElementById("food");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedFood = button.dataset.food;

        foodSelect.value = selectedFood;

        document.getElementById("order").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// ORDER FORM
// =========================

const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const food = foodSelect.value;

    orderMessage.textContent =
        "Thanks " + name + "! Your " + food + " order has been received.";

    orderForm.reset();

});