var grade = parseInt(prompt("Please enter the grade")); 
if (grade >= 0 && grade <= 100) {
        if (grade >= 90 ) {
            window.console.log("You received an A.");
        }
        else if (grade >= 80) {
            window.console.log("You received an B.");
        }
        else if (grade >= 70) {
            window.console.log("You received an C.");
        }
        else if (grade >= 60) {
            window.console.log("You received an D.");
        }
        else {
            window.console.log("You received an F.");
        }
}
else {
    console.log("Write the right grade between 1 - 100")
}