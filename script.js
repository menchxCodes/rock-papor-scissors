let playerScore = 0
let computerScore = 0

function getComputerSelection() {

    let rnd = Math.floor((Math.random()*3))+1
    let computerSelection = ""

    if (rnd==1) {
        computerSelection = "Rock"
    } else if(rnd == 2) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    }
    return computerSelection
}

function playRound(playerSelection,computerSelection) {
    console.log(`Computer choose ${computerSelection}`)
    console.log(`You choose ${playerSelection}`)
    if (playerSelection==computerSelection) {
        return console.log(`The match is a Tie, you both selected ${playerSelection}.`)
    }

    if (playerSelection=="Rock") {
        if (computerSelection=="Scissors") {
            playerScore=+1
            return console.log(`You beat ${computerSelection} with ${playerSelection}!`)
        } else {
            computerScore=+1
            return console.log(`You lost to ${computerSelection} with ${playerSelection}!`)
        }
    }

    if (playerSelection=="Paper") {
        if (computerSelection=="Rock") {
            playerScore=+1
            return console.log(`You beat ${computerSelection} with ${playerSelection}!`)
        } else {
            computerScore=+1
            return console.log(`You lost to ${computerSelection} with ${playerSelection}!`)
        }
    }

    if (playerSelection=="Scissors") {
        if (computerSelection=="Paper") {
            playerScore=+1
            return console.log(`You beat ${computerSelection} with ${playerSelection}!`)
        } else {
            computerScore=+1
            return console.log(`You lost to ${computerSelection} with ${playerSelection}!`)
        }
    }

}

function getplayerSelection() {
    let playerSelection=""
    let isValid=false

    while(!isValid){

        playerSelection = prompt(`Choose between "Rock", "Paper" or "Scissors".`)

        playerSelection = (playerSelection.charAt(0)).toUpperCase() + (playerSelection.slice(1).toLowerCase())//capitalize player selection

        if(playerSelection=="Rock"|| playerSelection=="Paper"|| playerSelection=="Scissors") {
            isValid = true
        }
    }
    
    return playerSelection
}

function game() {
    

    for (let round = 1;round <=5;round++) {
        console.log(`Round ${round}`)
        playRound(getplayerSelection(),getComputerSelection())
        console.log(`RESULT: You=${playerScore} Computer=${computerScore}`)
    }

    if(playerScore==computerScore) {
        console.log(`You were both tied with ${playerScore}pts.`)
    }else if (playerScore>computerScore){
        console.log(`You WON with ${playerScore}pts - ${computerScore}pts. GZ!`)
    }else {
        console.log(`You LOST with ${playerScore}pts - ${computerScore}pts. You SUCK LOL`)
    }
    return 
}

game()