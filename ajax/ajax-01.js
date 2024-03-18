/* ---------------------------------------- //
// Zadanie 1 - Dane krajów - XMLHttpRequest //
// ---------------------------------------- //

Korzystając z serwisu "https://restcountries.com/" rozbuduj poniższą stronę o następujące funkcje:

1. Podczas uruchamiania strony uzupełnij listę rozwijalną o wszystkie kraje świata. Skorzystaj z url "https://restcountries.com/v2/all"

2. Utwórz funkcję, która po wybraniu kraju z listy rozwijalnej, uzupełni tabelę z danymi danego kraju. 
Funkcję podepnij pod zdarzenie "change" kontrolki "select" Skorzystaj z url "https://restcountries.com/v2/name/nazwaKraju", 
gdzie nazwaKraju zastępujesz nazwą wybranego kraju. 

Zadanie wykonaj z wykorzystaniem obiektu XMLHttpRequest.

Nie modyfikuj pliku HTML.


// --------- //
// SOLUTIONS //
// --------- */


// 1. Podczas uruchamiania strony uzupełnij listę rozwijalną o wszystkie kraje świata. Skorzystaj z url "https://restcountries.com/v2/all"
// pobranie danych metodą xmlHttpRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all", true);
xhr.responseType = "json";
xhr.addEventListener("load", function() {
    xhr.response.forEach(country => {
        countriesList(country.name);
    });
});
xhr.addEventListener("error", function() {
    console.log("Error");
});
xhr.send();

// uzupełnienie listy krajów w html
let select = document.getElementById("lista");
function countriesList(countryName) {
    let option = document.createElement("option");
    option.innerHTML = countryName;
    select.add(option);
}