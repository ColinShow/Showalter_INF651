// Challenge 2
let pin = "0451";
let pinAttempt;

pinAttempt = prompt("Please enter your PIN:")

if (pinAttempt !== pin){
    do {
    pinAttempt = prompt("INCORRECT! Please enter your PIN:");
    } while (pinAttempt !== pin);
}

alert("You have entered the correct PIN!");