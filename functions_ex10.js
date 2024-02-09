// ex.1
function dodajNowyWpis() {
    let tableRows = document.getElementById("wierszetabeli");
    let howManyRows = tableRows.children.length;
    let date = new Date().toISOString().substring(0, 10);
    let userDescription = prompt("Na co zostały wydane pieniądze?");

    // ex.3
    let userDescriptionTest = /[A-z,0-9]/i.test(userDescription);
    if ((userDescription.length == 0) || (userDescriptionTest == false)) {
        console.log(typeof(userDescriptionTest));
        alert("Wpis jest pusty, operację anulowano");
        return;
    };
    let moneySpent = Number(prompt(`Jaką kwotę wydano na ${userDescription}`).replace(",", ".")).toFixed(2);
    if (isNaN(moneySpent)) {
        alert("Nie podano właściwej wartości liczbowej, operację anulowano");
        return;
    };
    // end ex.3

    let newRow = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.setAttribute("scope","col");
    col1.innerHTML = howManyRows + 1;
    newRow.append(col1);

    let col2 = document.createElement("td");
    col2.setAttribute("scope","col");
    col2.innerHTML = date;
    newRow.appendChild(col2);

    let col3 = document.createElement("td");
    col3.setAttribute("scope","col");
    col3.innerHTML = userDescription;
    newRow.appendChild(col3);

    let col4 = document.createElement("td");
    col4.setAttribute("scope","col");
    col4.innerHTML = moneySpent;
    newRow.appendChild(col4);

    tableRows.appendChild(newRow);
    
    sumAllCost();
    sumCostOfCurrentMonth();
};
// end ex.1

// ex.2
function sumAllCost() {
    let tableRows = document.getElementById("wierszetabeli").children;
    let tableValue = 0;
    for (let i = 0; i < tableRows.length; i++) {
        tableValue += Number(tableRows[i].children[3].innerHTML);
    };
    document.getElementById("sumaWydatkow").value = tableValue.toFixed(2);
};

function sumCostOfCurrentMonth() {
    let tableRows = document.getElementById("wierszetabeli").children;
    let currentMonth = new Date().toISOString().substring(4, 8);
    let currentMonthValue = 0;
    for (let i = 0; i < tableRows.length; i++) {
        if (tableRows[i].children[1].innerHTML.includes(currentMonth)) {
            currentMonthValue += Number(tableRows[i].children[3].innerHTML);
        };
    };
    document.getElementById("wydatkiBiezacegoMiesiaca").value = currentMonthValue.toFixed(2);
};
sumAllCost();
sumCostOfCurrentMonth();
// end ex.2