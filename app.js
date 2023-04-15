//when clicked dog display changes to flex

let dogContainer = document.getElementById("dogContainer");

// dogBtn.addEventListener("click", () => {
   // dogContainer.style.display = "flex";
// });

let timeAlive = 0;
let healthBar = document.getElementById("healthBar");
let hungerBar = document.getElementById("hungerBar");
let thirstBar = document.getElementById("thirstBar");
let happinessBar = document.getElementById("happinessBar");

let eatBtn = document.getElementById("eatBtn");
let drinkBtn = document.getElementById("drinkBtn");
let petBtn = document.getElementById("petBtn");
let fetchBtn = document.getElementById("fetchBtn");

timeAliveMsg = document.getElementById("timeAliveMsg");
loseMsg = document.getElementById("loseMsg");

function shrinkBar() {

healthBar.value -= 5;

hungerBar.value -= 10;

thirstBar.value -= 8.5;

happinessBar.value -= 2.5;

timeAlive += 0.75;

if (healthBar.value == 0) {
    console.log("Dog died");
    clearInterval(timer);
    eatBtn.disabled = true;
    drinkBtn.disabled = true;
    petBtn.disabled = true;
    fetchBtn.disabled = true;
    loseMsg.style.display = "block";
    timeAliveMsg.textContent = `Dog died after ${timeAlive} seconds` 
} else {
    console.log("alive")
}
}

let timer = setInterval(function(){shrinkBar()}, 750);

eatBtn.addEventListener("click", () => {
    healthBar.value += 5;
    hungerBar.value += 20;
})

drinkBtn.addEventListener("click", () => {
    healthBar.value += 5;
    thirstBar.value += 20;
    happinessBar.value -= 5;
})

petBtn.addEventListener("click", () => {
    happinessBar.value += 20;
})

fetchBtn.addEventListener("click", () => {
    happinessBar.value += 30;
    thirstBar.value -= 10;
})