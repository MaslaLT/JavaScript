// Pirma uzduotis

/*const basePrice = 6;

function checkPrice() {
    let age = document.getElementById('age').value;

    if(age >= 60) {
        document.write("Bilieto kaina " + basePrice / 3 + " Eu");
    } else if (age >= 16) {
        document.write("Bilieto kaina " + basePrice + " Eu");
    } else {
        document.write("Bilieto kaina " + basePrice / 2 + " Eu");
    }
}
*/

//Antra uzduotis

/*function isTeistumasChecked() {
    if(document.getElementById('teistas').checked == true || document.getElementById('neteistas').checked == true) {
        return true;
    } else {
        alert('Jus nepasirinkote teistumo statuso');
        onpause();
    }
}

function isAgeInRange(age) {
    if(age >= 18 && age <= 30) {
        return true;
    }
}

function canGoToArmy() {
    let age = document.getElementById('age').value;
    let teistas = document.getElementById('teistas').checked

    if(!teistas) {
        if(isTeistumasChecked() == true && isAgeInRange(age) == true) {
            document.write('Sveikinam !! Jus esate tinkamas tarnybai.');
        } else {
            document.write('Jusu amzius netinkamas tarnybai');
        }
   } else {
        document.write('Jus esate teistas!! Tarnybai netinkamas.');
}
}
*/

//Trecia uzduotis

/*
function cristmasBonus() {
 /*
    let age = document.getElementById('age').value;

    document.getElementById('bonusSize').innerHTML = " 0 pounds.";

    if(age < 10 ) {
        document.getElementById('bonusSize').innerHTML = " 50 pounds.";
    } else if(age < 20) {
        document.getElementById('bonusSize').innerHTML = " 100 pounds.";
    } else {
        document.getElementById('bonusSize').innerHTML = " 150 pounds.";
    }
}
*/
//Ketvirta uzduotis
/*
function lottery() {
    let number = Math.floor(Math.random() * 15 + 1);
console.log(number);
    if(number <= 1) {
        document.getElementById('lotteryPrize').innerHTML = " 3 tickets.";
    } else if(number <= 3) {
        document.getElementById('lotteryPrize').innerHTML = " 2 tickets.";
    } else if(number <= 7) {
        document.getElementById('lotteryPrize').innerHTML = " 1 tickets.";
    } else {
        document.getElementById('lotteryPrize').innerHTML = " LOST you are LOSSER!!!";
    }
}
*/
//Penkta uzduotis

/*function lottery() {
    let number = Math.floor(Math.random() * 15 + 1);

    switch(number) {
        case 1:
            document.getElementById('lotteryPrize').innerHTML = " 3 tickets.";
            break;
        case 2:
            document.getElementById('lotteryPrize').innerHTML = " 2 tickets.";
            break;
        case 3:
            document.getElementById('lotteryPrize').innerHTML = " 2 tickets.";
            break;
        case 4:
            document.getElementById('lotteryPrize').innerHTML = " 1 tickets.";
            break;
        case 5:
            document.getElementById('lotteryPrize').innerHTML = " 1 tickets.";
            break;
        case 6:
            document.getElementById('lotteryPrize').innerHTML = " 1 tickets.";
            break;
        case 7:
            document.getElementById('lotteryPrize').innerHTML = " 1 tickets.";
            break;
        default:
            document.getElementById('lotteryPrize').innerHTML = " LOST you are LOSSER!!!";
            break;
    }
}
*/
//Sesta uzduotis

/*function isThisYearLeap()
{
    let enterdYear = document.getElementById("enterdYear").value;

    if(enterdYear % 4 != 0) {
        document.getElementById('yearType').innerHTML = " Year is COMMON";
    } else if(enterdYear % 100 != 0) {
        document.getElementById('yearType').innerHTML = " Year is LEAP";
    } else if(enterdYear % 400 != 0) {
        document.getElementById('yearType').innerHTML = " Year is COMMON";
    } else {
        document.getElementById('yearType').innerHTML = " Year is LEAP";
    }
}
*/

//septinta uduotis
/*
let randomnumber = Math.floor(Math.random() * 5 + 1);

function guesNumber()
{
    enteredNumber = document.getElementById('enteredNumber').value;
console.log(randomnumber);
    if(enteredNumber == randomnumber) {
        document.getElementById('ansver').innerHTML = "Correct - well done!";
    } else {
        document.getElementById('ansver').innerHTML = "Wrong guess again.";
    }
}
*/

//Astunta uzduotis
/*
function celsiusToF()
{
    let enterdCelsiusRange = document.getElementById('enteredNumber').value;
    let seperationIndex = enterdCelsiusRange.indexOf('-');
    let rangeStart = enterdCelsiusRange.substr(0, seperationIndex);
    let rangeEnd = enterdCelsiusRange.substr(seperationIndex + 1 , enterdCelsiusRange.length);
    let parsedRangeStart = parseInt(rangeStart);
    let parsedRangeEnd = parseInt(rangeEnd);

    while(parsedRangeStart <= parsedRangeEnd) {
        document.write(parsedRangeStart + "C = " + (parsedRangeStart * (9/5)+32) + " F" + "<br>");
        parsedRangeStart++;
    }
}
*/
//Devinta uzduotis


function starTriangle()
{
    let enteredNumber = document.getElementById('enteredNumber').value;
    let star = "*";
    let counter = 0;

    do{
        document.write(star);
        document.write("<br>");
        console.log(star);
        star = star + "*";
        counter++;
    }while (counter < enteredNumber);
}