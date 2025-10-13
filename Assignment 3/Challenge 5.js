// Challenge 5
do {
    let userNumber = prompt("Please enter a number between 1-12:");

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
