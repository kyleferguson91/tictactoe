function getComputerChoise() {
const random = Math.ceil(Math.random()*10)
console.log(random)




if (random >=6) {
    console.log("Rock")
    return "Rock"
}
else if (random <= 6 && random > 3 ) {
    console.log("Paper")
    return "Paper"
}
else if (random <= 3) {
    console.log("Scissors")
    return "Scissors"
}


}

getComputerChoise()