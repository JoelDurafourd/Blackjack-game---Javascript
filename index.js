let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let min = 2

let max = 11

let hasBlackJack = false
let isAlive = true

let message = ""

let firstCard = randomCard()
let secondCard = randomCard()

let sum = (firstCard + secondCard)

let cards = [firstCard, secondCard]

function renderGame() {
        if (sum < 21) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "Blackjack!"
            hasBlackJack = true
        } else {
            message = "You're out of luck, you lose!"
            isAlive = false
        }

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
      cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message
}

function newCard() {
  let drawnCard = randomCard()
  sum += drawnCard
  cards.push(drawnCard)
  renderGame()
}

function startGame() {
  renderGame()
}

function randomCard() {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
