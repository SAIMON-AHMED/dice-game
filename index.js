// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const magic1Btn = document.getElementById("magic1Btn")
const magic2Btn = document.getElementById("magic2Btn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
let roll1DiceNumber = 0;
let roll2DiceNumber = 0;
/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        roll1DiceNumber++
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        roll2DiceNumber++
    }
    
    if (player1Score >= 20 && roll1DiceNumber === roll2DiceNumber) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20 && roll1DiceNumber === roll2DiceNumber) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})


function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}

 magic1Btn.addEventListener("click", function() {
     magic()
    if (player1Score >= 20 && roll1DiceNumber === roll2DiceNumber) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    } else if (player2Score >= 20 && roll1DiceNumber === roll2DiceNumber) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
 })
 
 magic2Btn.addEventListener("click", function() {
     magic2()
     if (player1Score >= 20 && roll1DiceNumber === roll2DiceNumber) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    } else if (player2Score >= 20 && roll1DiceNumber === roll2DiceNumber) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
 })
 
 let usedMagic = 0
 function magic() {
     const randomNumber = Math.floor(Math.random() * 6) + 1
    
     if (player1Turn) {
         const magicNumber = Math.floor(Math.random() * 2)
         if (magicNumber === 1) {
             player1Score += randomNumber * 2
             player1Scoreboard.textContent = player1Score
         } else if (magicNumber === 0) {
             player1Score += randomNumber * 0
             player1Scoreboard.textContent = player1Score
         }

        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        roll1DiceNumber++
     }
     player1Turn = !player1Turn
 

     usedMagic++
     if (usedMagic === 1) {
         magic1Btn.style.display = "none"
     }
    
 }



 
 function magic2() {
     const randomNumber = Math.floor(Math.random() * 6) + 1
    
     if (player1Turn === false) {
         const magicNumber2 = Math.floor(Math.random() * 2)
         if (magicNumber2 === 1) {
             player2Score += randomNumber * 2
             player2Scoreboard.textContent = player2Score
         } else if (magicNumber2 === 0) {
             player2Score += randomNumber * 0
             player2Scoreboard.textContent = player2Score
         }

        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        roll2DiceNumber++

     }
     player1Turn = !player1Turn
 

     usedMagic++
     if (usedMagic === 2) {
         magic2Btn.style.display = "none"
     }
    
 }
