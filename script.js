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
const playerSelection = prompt("What is your selection?", "Rock, Paper or Scissors?")
let playerwincount = 0
let compwincount = 0


function playRound (playerSelection, computerSelection)
{ 
playerSelection = playerSelection.toLowerCase()
computerSelection = computerSelection.toLowerCase()
console.log(playerSelection, computerSelection)

if (playerSelection === computerSelection)
 {
console.log(`Draw! ${playerSelection} ties with ${computerSelection}`)
playerwincount = playerwincount
compwincount = compwincount
return `Draw! ${playerSelection} ties with ${computerSelection}`

 }

else if (playerSelection == playerSelection.match(/^rock$/ig)
     && computerSelection == computerSelection.match(/^paper$/ig)) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    playerwincount = playerwincount
compwincount++
    return `You Lose! ${computerSelection} beats ${playerSelection}`
}  

else if (playerSelection == playerSelection.match(/^paper$/ig)
     && computerSelection == computerSelection.match(/^scissors$/ig)) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
    playerwincount = playerwincount
    compwincount++
    return `You Lose! ${computerSelection} beats ${playerSelection}`
} 

else if (playerSelection == playerSelection.match(/^scissors$/ig)
     && computerSelection == computerSelection.match(/^rock$/ig)) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
        playerwincount = playerwincount
compwincount++
    return `You Lose! ${computerSelection} beats ${playerSelection}`
} 

else if (playerSelection == playerSelection.match(/^rock$/ig)
&& computerSelection == computerSelection.match(/^scissors$/ig)) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    playerwincount++
    compwincount = compwincount
    return  `You Win! ${playerSelection} beats ${computerSelection}`
}
else if (playerSelection == playerSelection.match(/^paper$/ig)
&& computerSelection == computerSelection.match(/^rock$/ig)) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    playerwincount++
    compwincount = compwincount
    return  `You Win! ${playerSelection} beats ${computerSelection}`
}
else if (playerSelection == playerSelection.match(/^scissors$/ig)
&& computerSelection == computerSelection.match(/^paper$/ig)) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    playerwincount++
    compwincount = compwincount
    return  `You Win! ${playerSelection} beats ${computerSelection}`
}

else {console.log("please enter a valid selection")
return "please enter a valid selection"}



}




function game() {

    playRound(playerSelection, computerSelection)
    console.log(playerwincount, compwincount)
}

game()