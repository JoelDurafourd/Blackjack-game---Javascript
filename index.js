let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let min = 2 

let max = 11

let hasBlackJack = false
let isAlive = true

let message = ""


function startGame() {
    let firstCard = Math.floor(Math.random() * (max - min + 1)) + min
    let secondCard = Math.floor(Math.random() * (max - min + 1)) + min
    let sum = firstCard + secondCard
        if (sum < 21) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of luck, you lose!"
            isAlive = false
        }
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

