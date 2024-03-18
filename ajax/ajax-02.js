/* ----------------------------------- //
// Zadanie 1 - Dane krajów - Fetch API //
// ----------------------------------- //

Korzystając z serwisu "https://restcountries.com/" rozbuduj poniższą stronę o następujące funkcje:

1. Podczas uruchamiania strony uzupełnij listę rozwijalną o wszystkie kraje świata. Skorzystaj z url "https://restcountries.com/v2/all"

2. Utwórz funkcję, która po wybraniu kraju z listy rozwijalnej, uzupełni tabelę z danymi danego kraju. 
Funkcję podepnij pod zdarzenie "change" kontrolki "select" Skorzystaj z url "https://restcountries.com/v2/name/nazwaKraju", 
gdzie nazwaKraju zastępujesz nazwą wybranego kraju. 

Zadanie wykonaj z wykorzystaniem metody Fetch API.

Nie modyfikuj pliku HTML.


// --------- //
// SOLUTIONS //
// --------- */


// 1. Podczas uruchamiania strony uzupełnij listę rozwijalną o wszystkie kraje świata. Skorzystaj z url "https://restcountries.com/v2/all"
// ---------------------------------------------------------------------------------------------------------------------------------------
// pobranie danych metodą fetch api
fetch("https://restcountries.com/v2/all").then(response => {
    response.json().then(response => {
        response.forEach(country => {
            countriesList(country.name);
        });
    });
});

// funkcja uzupełnieniająca listę krajów w html
let select = document.getElementById("lista");
function countriesList(countryName) {
    let option = document.createElement("option");
    option.innerHTML = countryName;
    select.appendChild(option);
}


// 2. Utwórz funkcję, która po wybraniu kraju z listy rozwijalnej, uzupełni tabelę z danymi danego kraju. 
// Funkcję podepnij pod zdarzenie "change" kontrolki "select". Skorzystaj z url "https://restcountries.com/v2/name/nazwaKraju", 
// gdzie nazwaKraju zastępujesz nazwą wybranego kraju.
// ---------------------------------------------------------------------------------------------------------------------------
// podpięcie zdarzenia nasłuchującego zmiany na liście select
select.addEventListener("change", function() {
    // funkcja pobierająca nazwę kraju z selecta
    let selectedCountryName = select.value;
    // pobranie danych kraju z selecta metodą xmlHttpRequest
    fetch("https://restcountries.com/v2/name/" + selectedCountryName).then(response => {
        response.json().then(response => {
            response.forEach(countryData => {
                selectedCountryData(countryData);
            });
        });
    });
});
//funkcja uzupełniająca dane wybranego kraju do html
function selectedCountryData(data) {
    document.getElementById("nazwa").innerHTML = data.name;
    document.getElementById("flaga").src = data.flag;
    document.getElementById("rodzimanazwa").innerHTML = data.nativeName;
    document.getElementById("stolica").innerHTML = data.capital;
    document.getElementById("powierzchnia").innerHTML = data.area;
    document.getElementById("liczbaludnosci").innerHTML = data.population;
}; 