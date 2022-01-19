let cards = [];
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let messageEl = document.getElementById("message-el");
let player = {
    name: "John",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11;
    } else if (randomCard >= 11) {
        return 10
    }
    else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
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


function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let a = getRandomCard();
        sum += a;
        cards.push(a)
        renderGame()
    }
}
