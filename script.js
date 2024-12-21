// console.log("Hello World")

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3); // either 0, 1, 2

    if (choice === 0){
        return "Rock";
    }
    else if (choice === 1){
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice(){
    let choice = parseInt(prompt("Make your choice \n 0:Rock 1:Paper 2:Scissors"))

    if (choice === 0){
        return "Rock";
    }
    else if (choice === 1){
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

function playRound(humanChoice, computerChoice){
    console.log(`You played: ${humanChoice}, Computer Played: ${computerChoice}`)

    if (humanChoice == "Rock"){
        if(computerChoice == "Rock"){
            console.log(`You both played ${humanChoice}`)
        }
        else if(computerChoice == "Paper"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
        else if(computerChoice == "Scissors"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
    }

    else if (humanChoice == "Paper"){
        if(computerChoice == "Rock"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        else if(computerChoice == "Paper"){
            console.log(`You both played ${humanChoice}`)
        }
        else if(computerChoice == "Scissors"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
    }

    else if (humanChoice == "Scissors"){
        if(computerChoice == "Rock"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
        else if(computerChoice == "Paper"){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        }
        else if(computerChoice == "Scissors"){
            console.log(`You both played ${humanChoice}`)
        }
    }
}


function playGame(){
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
}


