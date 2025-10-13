// Challenge 4
let userNumber = prompt("Please enter a number to be checked:");

if (parseInt(userNumber) === 0)
    alert("Your number has a value of zero");
else if (parseInt(userNumber) > 0)
    alert("Your number is positive");
else
    alert("Your number is negative");