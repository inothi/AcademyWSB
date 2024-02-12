const symbolsList = ["Papier", "Kamień", "Nożyce"];
let selectList = document.getElementById("listaWyboru");
let optionList = document.getElementById("listaWyboru").children;
let userWins = 0;
let computerWins = 0;
let counter = 0;

// ex.1
(function completeList() {
    for (let i = 0; i < symbolsList.length; i++) {
        selectList[i + 1] = document.createElement("option");
        optionList[i + 1].innerHTML = symbolsList[i];
    };
}());

// ex.2
function graj() {
    let userSelection = document.getElementById("listaWyboru").value;

    let computerSelection = symbolsList[Math.floor(Math.random() * symbolsList.length)];
    
    if (userSelection == computerSelection) {
        counter++;
        alert(`
            Twój wybór: ${userSelection}
            Wybór komputera: ${computerSelection}
            
            Wynik: Remis
        `);
    }

    else if ((userSelection == "Papier") && (computerSelection == "Kamień")) {
        counter++;
        userWins++;
        alert(`
            Twój wybór: ${userSelection}
            Wybór komputera: ${computerSelection}
            
            Wynik: Wygrałeś  :-)
        `);
    }

    else if ((userSelection == "Papier") && (computerSelection == "Nożyce")) {
        counter++;
        computerWins++;
        alert(`
            Twój wybór: ${userSelection}
            Wybór komputera: ${computerSelection}
            
            Wynik: Przegrałeś  :-(
        `);
    }

    else if ((userSelection == "Kamień") && (computerSelection == "Papier")) {
        counter++;
        computerWins++;
        alert(`
            Twój wybór: ${userSelection}
            Wybór komputera: ${computerSelection}
            
            Wynik: Przegrałeś  :-(
        `);
    }

    else if ((userSelection == "Kamień") && (computerSelection == "Nożyce")) {
        counter++;
        userWins++;
        alert(`
            Twój wybór: ${userSelection}
            Wybór komputera: ${computerSelection}
            
            Wynik: Wygrałeś  :-)
        `);
    }

    else if ((userSelection == "Nożyce") && (computerSelection == "Papier")) {
        counter++;
        userWins++;
        alert(`
            Twój wybór: ${userSelection}
            Wybór komputera: ${computerSelection}
            
            Wynik: Wygrałeś  :-)
        `);
    }

    else if ((userSelection == "Nożyce") && (computerSelection == "Kamień")) {
        counter++;
        computerWins++;
        alert(`
            Twój wybór: ${userSelection}
            Wybór komputera: ${computerSelection}
            
            Wynik: Przegrałeś  :-(
        `);
    }

// ex.3
    else {
        alert("Nie dokonałeś wyboru");
    }

// ex.4
    function update() {
        document.getElementById("rozegranePartie").value = counter;
        document.getElementById("wygraneUzytkownika").value = userWins;
        document.getElementById("przegraneUzytkownika").value = computerWins;
    }
    update();
};