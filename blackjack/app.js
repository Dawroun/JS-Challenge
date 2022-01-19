let btn = document.getElementById("start-btn")
let firstCard = 10
let secondCard = 4
const cards = [firstCard, secondCard];
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let messageEl = document.getElementById("message-el");

btn.addEventListener("click", function () {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new game?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message;
}
)

function newCard() {
    let a = 7;
    sum += a;
    cards.push(a)
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new game?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message;
}
