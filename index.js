let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let min = 1

let max = 13

let hasBlackJack = false
let isAlive = false

let message = ""

let sum = 0

let cards = []

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
  if (isAlive == true && hasBlackJack == false) {
    let drawnCard = randomCard()
    sum += drawnCard
    cards.push(drawnCard)
    renderGame()
  }
}

function startGame() {
  isAlive = true
  sum = 0
  cards = []
  let firstCard = randomCard()
  let secondCard = randomCard()
  cards.push(firstCard)
  cards.push(secondCard)

  sum = (firstCard + secondCard)
  renderGame()
}

function randomCard() {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  if (randomNumber == 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  } else {
    return randomNumber
  }

}
