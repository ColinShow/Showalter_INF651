// Challenge 3
let userNumber = prompt("Please enter a number for the multiplication table:");

for (let i = 1; i <= 10; i++){
    if (userNumber * i % 5 === 0)
        continue;
    else
        console.log(userNumber * i);
}

alert("Multiplication table output to console");