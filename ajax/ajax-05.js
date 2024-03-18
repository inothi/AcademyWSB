/*-------------------------------//
//  Zadanie 5 - Prognoza pogody  //
//-------------------------------//

Wykorzystując jedną z poznanych technologii AJAX, przy wykorzystaniu API serwisu „https://openweathermap.org/” wykonaj poniższe polecenia:

1. Uzupełnij pole „select” o wybrane polskie miasta: Warszawa, Gdańsk, Poznań, Kraków oraz Wrocław.
2. Utwórz połączenie AJAX wykorzystując adres URL:
https://api.openweathermap.org/data/2.5/weather?q=nazwaMiasta&units=metric&appid=cf608d877811f21a9017c72939080a39
gdzie fragment nazwaMiasta zastąpi nazwa wybranego w polu „select” miasta. 
Przeanalizuj dokładnie odpowiedź z serwera. Dodatkowo możesz wspomóc się dokumentacją ze strony https://openweathermap.org/current. 
Połączenie ma się wykonywać każdorazowo po zmianie wartości w polu „select”.

3. Wykorzystując dane z połączenia AJAX, uzupełnij dane w poniżej tabeli tj. nazwę miasta, opis bieżącej pogody, temperaturę, 
wilgotność, wiatr oraz ciśnienie. Uzupełnij także ikonę symbolizującą bieżącą pogodę wykorzystując  link https://openweathermap.org/img/wn/kod@2x.png 
gdzie słowo „kod” zastąpi kod bieżącej pogody znajdujący się w odpowiedzi z serwera.

Nie modyfikuj pliku HTML

//-------------//
//  SOLUTIONS  //
//-------------*/


// 1. Uzupełnij pole „select” o wybrane polskie miasta: Warszawa, Gdańsk, Poznań, Kraków oraz Wrocław.
let select = document.getElementById("lista");
arrayOfCities = ["Warszawa", "Gdańsk", "Poznań", "Kraków", "Wrocław"];
function citiesList() {
    for (index in arrayOfCities) {
        let option = document.createElement("option");
        option.innerHTML = arrayOfCities[index];
        select.appendChild(option);
    }
}
citiesList();

// 2. Utwórz połączenie AJAX wykorzystując adres URL:
// https://api.openweathermap.org/data/2.5/weather?q=nazwaMiasta&units=metric&appid=cf608d877811f21a9017c72939080a39
// gdzie fragment nazwaMiasta zastąpi nazwa wybranego w polu „select” miasta. 
select.addEventListener("change", function() {
    let selectedCity = document.getElementById("lista").value;
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&units=metric&appid=cf608d877811f21a9017c72939080a39",
        dataType: "json"
    }).done(response => {
        // 3. Wykorzystując dane z połączenia AJAX, uzupełnij dane w poniżej tabeli tj. 
        // nazwę miasta, opis bieżącej pogody, temperaturę, wilgotność, wiatr oraz ciśnienie. 
        document.getElementById("nazwaMiasta").innerHTML = response.name;
        document.getElementById("opisPogody").innerHTML = response.weather[0].description;
        document.getElementById("temperatura").innerHTML = response.main.temp + " &deg;C";
        document.getElementById("wilgotnosc").innerHTML = response.main.humidity + "%";
        document.getElementById("wiatr").innerHTML = response.wind.speed + " m/s";
        document.getElementById("cisnienie").innerHTML = response.main.pressure + " hPa";
        // Uzupełnij także ikonę symbolizującą bieżącą pogodę wykorzystując link https://openweathermap.org/img/wn/kod@2x.png 
        // gdzie słowo „kod” zastąpi kod bieżącej pogody znajdujący się w odpowiedzi z serwera.
        document.getElementById("ikonaPogody").src = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
    });
});