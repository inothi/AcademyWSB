function dodajNowyWpis() {
    let tableRows = document.getElementById("wierszetabeli");
    let howManyRows = tableRows.children.length;
    let date = new Date().toISOString().slice(0, 10);
    let userDescription = prompt("Na co zostały wydane pieniądze?");
    let moneySpent = Number(prompt(`Jaką kwotę wydano na ${userDescription}`)).toFixed(2);

    let newRow = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.setAttribute("scope","col");
    col1.innerHTML = howManyRows + 1;
    newRow.appendChild(col1);

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
};