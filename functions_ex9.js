// ex.1
const operations = ["Dodawanie", "Odejmowanie", "Mnożenie", "Dzielenie"];
(function installOperations() {
    let select = document.getElementById("rodzajDzialania");
    for (let i = 0; i < operations.length; i++) {
        select[i] = document.createElement("option");
        select[i].innerHTML = operations[i];
    };
    select.append(this);
}());

// ex.2
function obliczRezultat() {
    let liczba1 = Number(document.getElementById("liczba1").value);
    let liczba2 = Number(document.getElementById("liczba2").value);
    let operator = document.getElementById("rodzajDzialania").value;
    switch (operator) {
        case "Dodawanie": {
            operator = liczba1 + liczba2; 
            break;
        };
        case "Odejmowanie": {
            operator = liczba1 - liczba2; 
            break;
        };
        case "Mnożenie": {
            operator = liczba1 * liczba2; 
            break;
        };
        case "Dzielenie": {
            if (liczba2 == 0) {
                alert("Nie dziel przez 0");
                return;
            }
            else {
                operator = liczba1 / liczba2; 
                break;
            };
        };
    };
    return document.getElementById("rezultat").value = operator;
};