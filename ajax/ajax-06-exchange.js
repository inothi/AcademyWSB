/*---------------------------//
//  Zadanie 6 - Kursy Walut  //
//---------------------------//

Wykorzystując jedną z poznanych technologii AJAX a także korzystając z API Narodowego Banku Polskiego 
uzupełnij plik „Zadanie 6 - Kursy Walut.js” tak aby uzyskać następujące funkcje:

1. Utwórz połączenie AJAX uruchamiane automatycznie przy otwarciu strony pobierające aktualne kursy walut NBP.
(url: „http://api.nbp.pl/api/exchangerates/tables/A/”).
2. Uzupełnij w nagłówku tabeli datę aktualizacji danych (id pola „dataaktualizacji) na podstawie danych z żądania z pkt 1.
3. Uzupełnij wiersze tabeli o dane dotyczące kursów walut na podstawie danych z żądania z pkt 1.
4. Napisz funkcje „odswiezDaneWTabeli” która zaktualizuje dane w tabeli po przyciśnięciu przycisku „Odśwież”.

Nie modyfikuj pliku HTML

//--------------//
//   SOLUTIONS  //
//--------------*/


// 4. Napisz funkcje „odswiezDaneWTabeli” która zaktualizuje dane w tabeli po przyciśnięciu przycisku „Odśwież”.
function odswiezDaneWTabeli() {
    // czyszczenie tabeli przy odświeżaniu
    let tbody = document.getElementById("wierszetabeli");
    tbody.innerHTML = "";
    // 1. Utwórz połączenie AJAX uruchamiane automatycznie przy otwarciu strony pobierające aktualne kursy walut NBP.
    // (url: „http://api.nbp.pl/api/exchangerates/tables/A/”).
    $.ajax({
        method: "GET",
        url: "http://api.nbp.pl/api/exchangerates/tables/A/",
        dataType: "json"
    }).done(response => {
        // 2. Uzupełnij w nagłówku tabeli datę aktualizacji danych (id pola „dataaktualizacji) na podstawie danych z żądania z pkt 1.
        let actualDate = response[0].effectiveDate;
        document.getElementById("dataaktualizacji").innerHTML = actualDate;
        // 3. Uzupełnij wiersze tabeli o dane dotyczące kursów walut na podstawie danych z żądania z pkt 1.
        let exchangeRatesData = response[0].rates;
        exchangeRatesData.forEach(function(rates, index) {
            createTable(rates, index);
        });
    });
};
odswiezDaneWTabeli();

// Ad. 3.
function createTable(rates, index) {
    let howManyColums = document.querySelector("thead").lastElementChild.children.length;
    let tbody = document.getElementById("wierszetabeli");
    let row = document.createElement("tr");
    for (let i = 0; i < howManyColums; i++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    };
    row.children[0].innerHTML = index + 1;
    row.children[1].innerHTML = rates.currency;
    row.children[2].innerHTML = rates.code;
    row.children[3].innerHTML = rates.mid;
    tbody.appendChild(row);
};