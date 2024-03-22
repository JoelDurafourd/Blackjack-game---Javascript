let min = 2 

let max = 11

let firstCard = Math.floor(Math.random() * (max - min + 1)) + min

let secondCard = Math.floor(Math.random() * (max - min + 1)) + min

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Blackjack!")
} else {
    console.log("You're out of luck, you lose!")
}
