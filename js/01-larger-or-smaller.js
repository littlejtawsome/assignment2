var a = parseInt(prompt ("What is first number"));
var b = parseInt(prompt ("What is second number?"));

if (a > b) {
    document.write(a + " is the bigger number in two numbers.");
} else if (a < b) {
    document.write(b + " is the bigger number in two numbers.");
} else if (a = b) {
    document.write("You choose the same number");
}
else  {
    document.write("Type the right number!");
} 
