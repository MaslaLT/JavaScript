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

function isTeistumasChecked() {
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