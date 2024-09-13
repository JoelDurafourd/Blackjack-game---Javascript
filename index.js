let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let min = 2

let max = 11

let hasBlackJack = false
let isAlive = true

let message = ""


let sum = 0


function startGame() {
      let firstCard = Math.floor(Math.random() * (max - min + 1)) + min
      let secondCard = Math.floor(Math.random() * (max - min + 1)) + min
      sum += (firstCard + secondCard)
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

function newCard() {
  let drawnCard = Math.floor(Math.random() * (max - min + 1)) + min
  sum += drawnCard
}
