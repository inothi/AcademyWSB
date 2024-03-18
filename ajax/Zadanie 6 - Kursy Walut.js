// Rozwiązanie Zuzanny

// Funkcja do pobierania danych o kursach walut i aktualizacji tabeli
function odswiezDaneWTabeli() {
    axios.get('http://api.nbp.pl/api/exchangerates/tables/A/')
        .then(function (response) {
            // Pobranie daty aktualizacji
            const dataAktualizacji = response.data[0].effectiveDate;
            document.getElementById('dataaktualizacji').innerText = dataAktualizacji;
 
            // Pobranie danych dotyczących kursów walut
            const kursy = response.data[0].rates;
 
            // Aktualizacja wierszy tabeli
            const tabela = document.getElementById('wierszetabeli');
            tabela.innerHTML = '';
 
            kursy.forEach(function (kurs, index) {
                addNewRateRow(kurs, index + 1);
                /* to rozwiązanie zastępuje funkcja addNewRateRow
                const wiersz = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${kurs.currency}</td>
                        <td>${kurs.code}</td>
                        <td>${kurs.mid}</td>
                    </tr>
                `;
                tabela.innerHTML += wiersz; // Dodanie wiersza do tabeli
                */
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}
// Wywołanie funkcji pobierającej kursy walut przy otwarciu strony
odswiezDaneWTabeli();


function addNewRateRow(rateData, index) {
    let tbody = document.getElementById("wierszetabeli");
    let newRow = document.createElement("tr");
    for (let i = 0; i < 4; i++) {
        let newCell = document.createElement("td");
        newRow.appendChild(newCell);
    }

    newRow.children[0].innerHTML = index;
    newRow.children[1].innerHTML = rateData.currency;
    newRow.children[2].innerHTML = rateData.code;
    newRow.children[3].innerHTML = rateData.mid;

    tbody.appendChild(newRow);
}


// !!! Wyrzucać elementy na osobne funkcje !!! 