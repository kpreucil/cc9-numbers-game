//START MATH GUESS
var rand = Math.floor(Math.random() * 100) + 1;

var block = document.getElementById("output");

var button = document.getElementById("button");

var guess = document.getElementById("text");

var attempts = 3;
//var rand = 0;


function restartGame() {
    //rand = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    block.innerHTML = "";
}

function handleGuess() {
    if (guess.value < rand) {
        console.log("Guess is too low Bro");
        block.innerHTML = "Guess is too low Bro"; 
    } else if (guess.value > rand) {
        console.log("Guess is way too high McFly");
        block.innerHTML = "Guess is way too high McFly";
    } else {
        console.log("You Win Finn!");
        block.innerHTML = "You Win Finn!";
        setTimeout(restartGame, 2000);
    }
}

function guessLimit () {
    if (handleGuess < attempts) {
        block.innerHTML = "Try Again";
    } else {
        attempts --; //Decrementing by 1
        block.innerHTML = "Oops, You Lose";
    }
}

//Couldn't figure it out in time. here are a few starts that I tried to copy down for you guys....


//function guessLimit(){
//    if (handleGuess > guessLimit){
//    block.innerHTML = "Woops you lose"
//}
//    document.write("Number" + Number)

    
//function handleButtonPress() {
//    if (attempts < 5) 
//}

console.log(rand);

button.onclick = handleGuess;
button2.onclick = restartGame;

//END MATH GUESS

