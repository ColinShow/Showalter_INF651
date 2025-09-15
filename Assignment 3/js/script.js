// Challenge 1
let counter = 1;

while (counter <= 50){
    if (counter % 2 === 0)
        console.log(counter);
    ++counter;
}

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

// Challenge 3
let userNumber = prompt("Please enter a number for the multiplication table:");

for (let i = 1; i <= 10; i++){
    if (userNumber * i % 5 === 0)
        continue;
    else
        console.log(userNumber * i);
}

alert("Multiplication table output to console");

// Challenge 4
userNumber = prompt("Please enter a number to be checked:");

if (parseInt(userNumber) === 0)
    alert("Your number has a value of zero");
else if (parseInt(userNumber) > 0)
    alert("Your number is positive");
else
    alert("Your number is negative");

// Challenge 5
do {
    userNumber = prompt("Please enter a number between 1-12:");
    
    switch (parseInt(userNumber)) {
    case 1:
        alert("1 -> January");
        break;
    case 2:
        alert("2 -> February");
        break;
    case 3:
        alert("3 -> March");
        break;
    case 4:
        alert("4 -> April");
        break;
    case 5:
        alert("5 -> May");
        break;
    case 6:
        alert("6 -> Jun")
        break;
    case 7:
        alert("7 -> July");
        break;
    case 8:
        alert("8 -> August");
        break;
    case 9:
        alert("9 -> September");
        break;
    case 10:
        alert("10 -> October");
        break;
    case 11:
        alert("11 -> November");
        break;
    case 12:
        alert("12 -> December");
        break;
    default:
        alert("INVALID INPUT")
    }
} while (parseInt(userNumber) > 12 || parseInt(userNumber) < 1)
