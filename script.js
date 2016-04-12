//START MATH GUESS
var rand = Math.floor(Math.random() * 100) + 1;

var block = document.getElementById("output");

var button = document.getElementById("button");

var guess = document.getElementById("text");

var attempts = 0;


function restartGame(rand) {
//    rand = Math.floor(Math.random())
    attempts = 0;
    block.innerHTML = "";
}

function handleGuess() {
    if (attempts < 5) { 
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
}


//Couldn't figure it out in time. here are a few starts that I tried to copy down for you guys....

//function count() {
//    if ()
//    
//}
// for (Number = 0; Number <= 3; Number++

//function guessLimit(){
//    if (handleGuess > guessLimit){
//    block.innerHTML = "Woops you lose"
//}
//    document.write("Number" + Number)



//function restartGame() {
//    rand = Math.floor(Math.random())
//    attempts = 0;
//    block.innerHTML = "";
//}
    
//function handleButtonPress() {
//    if (attempts < 5) 
//}

console.log(rand);

button.onclick = handleGuess;

//END MATH GUESS

