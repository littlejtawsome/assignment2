//step1.
var gSet = prompt("Are you ready for game?")
if (gSet === "yes") {
//step2.
   alert("Let's start\nYou are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
//step3 ~ 4
   var choiceStep3 = prompt("Which direction would you like to head (please enter forward, left, or right)."); 

   switch (choiceStep3) {
       case "left" :
           alert(" Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
           break;
       case "forward" :
           alert("You walk 100 yards and safely make your way out of the cave");
           break;
       case "right" : 
           alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
           break;
       default :
           alert(prompt("You have to choose one of them, left, right , forward."))
   }  
 //step 6  
   var gOver = alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
   var surVey =parseInt(prompt("Please rate the game between 1 and 10"));
     if (surVey >= 6 && surVey <= 10) {
         alert("Thank you for playing game and please visit agian to play again");
     } else if (surVey >= 1 && surVey <= 5) {
        alert("Thank you for playing game, and  you are working hard to improve the game");
    } else {
        alert("Thank you for playing game, and end the game");
    }
//end of first if.
    }
//step1-2
else {
    alert("Thank you and Play agian Sometimes.");
}