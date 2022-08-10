function getComputerChoice() {
const random = Math.ceil(Math.random()*10)




if (random >=6) {

    return "Rock"
}
else if (random <= 6 && random > 3 ) {
  
    return "Paper"
}
else if (random <= 3) {

    return "Scissors"
}


}


const computerSelection = getComputerChoice()
const playerSelection = "Rock"



function playRound (playerSelection, computerSelection)
{ 
playerSelection = playerSelection.toLowerCase()
computerSelection = computerSelection.toLowerCase()
console.log(playerSelection, computerSelection)

if (playerSelection === computerSelection)
 {
console.log(`Draw! ${playerSelection} ties with ${computerSelection}`)
return `Draw! ${playerSelection} ties with ${computerSelection}`
 }

else if (playerSelection == playerSelection.match(/rock/ig)
     && computerSelection == computerSelection.match(/paper/ig)) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
}  

else if (playerSelection == playerSelection.match(/paper/ig)
     && computerSelection == computerSelection.match(/scissors/ig)) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
} 

else if (playerSelection == playerSelection.match(/scissors/ig)
     && computerSelection == computerSelection.match(/rock/ig)) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
} 

else {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
}

}

playRound(playerSelection, computerSelection)
