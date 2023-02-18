let playerScore = 0
let computerScore = 0
let round = 1
const buttons = document.querySelectorAll(".play")
const reset = document.querySelector("#reset")

game()

function getComputerSelection() {

    let rnd = Math.floor((Math.random() * 3)) + 1
    let computerSelection = ""

    if (rnd == 1) {
        computerSelection = "Rock"
    } else if (rnd == 2) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    }
    return computerSelection
}

function playRound(playerSelection, computerSelection) {

    document.querySelector("#playerChoice").textContent = `You choose ${playerSelection}`
    document.querySelector("#computerChoice").textContent = `Computer choose ${computerSelection}`

    let result = document.querySelector("#result")
    let pScoreText = document.querySelector("#playerScore")
    let cScoreText = document.querySelector("#computerScore")


    if (playerSelection == computerSelection) {
        return result.textContent = `The match is a Tie, you both selected ${playerSelection}.`
    }

    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            playerScore++
            pScoreText.textContent = `You= ${playerScore}`
            return result.textContent = `You beat ${computerSelection} with ${playerSelection}!`
        } else {
            computerScore++
            cScoreText.textContent = `Computer= ${computerScore}`
            return result.textContent = `You lost to ${computerSelection} with ${playerSelection}!`
        }
    }

    if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            playerScore++
            pScoreText.textContent = `You= ${playerScore}`
            return result.textContent = `You beat ${computerSelection} with ${playerSelection}!`
        } else {
            computerScore++
            cScoreText.textContent = `Computer= ${computerScore}`
            return result.textContent = `You lost to ${computerSelection} with ${playerSelection}!`
        }
    }

    if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            playerScore++
            pScoreText.textContent = `You= ${playerScore}`
            return result.textContent = `You beat ${computerSelection} with ${playerSelection}!`
        } else {
            computerScore++
            cScoreText.textContent = `Computer= ${computerScore}`
            return result.textContent = `You lost to ${computerSelection} with ${playerSelection}!`
        }
    }

}

function game() {
    buttons.forEach(button => button.addEventListener("click", finishGame))
    reset.addEventListener("click", resetGame)
}

function finishGame() {

    document.querySelector("#round").textContent = `Round ${round}`
    playRound(this.textContent, getComputerSelection())
    if (playerScore >= 5 || computerScore >= 5) {

        if (playerScore == computerScore) {
            document.querySelector("#final").textContent = `You were both tied with ${playerScore}pts.`
        } else if (playerScore > computerScore) {
            document.querySelector("#final").textContent = `You WON with ${playerScore}pts - ${computerScore}pts. GZ!`
        } else {
            document.querySelector("#final").textContent = `You LOST with ${playerScore}pts - ${computerScore}pts. You SUCK LOL`
        }

        buttons.forEach(button => button.removeEventListener("click", finishGame))
        buttons.forEach(button => button.classList.add("disabled"))
        reset.classList.remove("hidden")
        return

    } else {
        console.log(`RESULT: You=${playerScore} Computer=${computerScore}`)
        round++
    }
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    round = 1

    buttons.forEach(button => button.classList.remove("disabled"))
    reset.classList.add("hidden")
    document.querySelector("#round").textContent = `Round ${round}`
    document.querySelectorAll(".dynamic").forEach(box => box.textContent = "")
    game()
}