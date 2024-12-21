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

function playGame(){

    var humanPoints = 0
    var computerPoints = 0

    function playRound(humanChoice, computerChoice){
        console.log(`You played: ${humanChoice}, Computer Played: ${computerChoice}`)
    
        if (humanChoice == "Rock"){
            if(computerChoice == "Rock"){
                console.log(`You both played ${humanChoice}`)
                humanPoints = humanPoints + 1
                computerPoints = computerPoints + 1
            }
            else if(computerChoice == "Paper"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerPoints = computerPoints + 1
            }
            else if(computerChoice == "Scissors"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanPoints = humanPoints + 1
            }
        }
    
        else if (humanChoice == "Paper"){
            if(computerChoice == "Rock"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanPoints = humanPoints + 1
            }
            else if(computerChoice == "Paper"){
                console.log(`You both played ${humanChoice}`)
                humanPoints = humanPoints + 1
                computerPoints = computerPoints + 1
            }
            else if(computerChoice == "Scissors"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerPoints = computerPoints + 1
            }
        }
    
        else if (humanChoice == "Scissors"){
            if(computerChoice == "Rock"){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerPoints = computerPoints + 1
            }
            else if(computerChoice == "Paper"){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanPoints = humanPoints + 1
            }
            else if(computerChoice == "Scissors"){
                console.log(`You both played ${humanChoice}`)
                humanPoints = humanPoints + 1
                computerPoints = computerPoints + 1
            }
        }
    }
    

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Human: ${humanPoints}, Computer: ${computerPoints}`)
    }

    if(humanPoints > computerPoints){
        console.log(`YOU WON, You have ${humanPoints}pts`)
    }
    else if(humanPoints < computerPoints){
        console.log(`YOU LOSE, The Computer has ${computerPoints}pts`)
    }
    else{
        console.log(`IT's A DRAW, you both have ${humanPoints}pts`)
    }
}

// playGame() //Uncomment to play game


