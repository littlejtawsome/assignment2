var coinFlip;
// coinFlip = 2;
//1.Begin your application by creating a variable called coinFlip and set it equal to a random number. 
//You will have to use a Math method to get this number:


let randomNum = Math.round(Math.random());

//2. 
var choice = prompt("Heads or Tails? Choose one");

//3 ~ 4
if (randomNum < 1) {
    if (choice === "Head") {
        alert("The flip was heads and you chose heads...you win!");
    }
    else if (choice !== "Head") {
        alert("The flip was heads but you chose tails...you lose!");
    }
}

//5 ~ 6
else if (randomNum >= 0) {
    if (choice === "Head") {
        alert("The flip was tails but you chose heads...you lose!");
    }
    else if (choice !== "Head") {
        alert("The flip was tails and you chose tails...you win!");
    }
}