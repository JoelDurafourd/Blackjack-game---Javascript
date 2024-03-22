//document.getElementById("count-el").innerText = 5

let peopleCount = 0

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el") 

let welcomeEl = document.getElementById("welcome-el")

let userName = "Jo Durafourd"

welcomeEl.innerText = "Welcome to the People Counter, " + userName + "!"



function increment() {
    peopleCount += 1
    countEl.innerText = peopleCount
}

function resetToNothing() {
    countEl.innerText = 0
    peopleCount = 0
}


function saveCurrentNumber() {
    let savedNumber1 = " " + peopleCount + " - "
    saveEl.innerText += savedNumber1
    peopleCount = 0 
    countEl.innerText = peopleCount
}

