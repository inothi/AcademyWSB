/* CLASSES - TASK 3 //

1. Na podstawie poniższej tabeli utwórz klasę „Student”.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dane osobowe	                                                | Dane uczelni	                            | Oceny                                                                        |
|---------------------------------------------------------------|-------------------------------------------|------------------------------------------------------------------------------|
| Imię            | Nazwisko	    | Płeć	| Data urodzenia	| Kurs	        | Grupa	    | Login	        | HTML	            | CSS	            | JavaScript	    | jQuery           |
| Dowolny tekst   | Dowolny tekst	| M / K	| Data	            | FrontEndDev	| 1 lub 2	| Dowolny tekst	| Liczby od 2 do 5	| Liczby od 2 do 5	| Liczby od 2 do 5	| Liczby od 2 do 5 |
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Klasa powinna zawierać metody:

a. Konstruktor z parametrami wejściowymi zawierającymi dane osobowe i dane uczelni. Oceny mają pozostawać puste.
b. Dodającą nową ocenę do wybranego przedmiotu
c. Zwracającą średnią ocen z wybranego przedmiotu lub ogólnie
d. Zwracającą ile niezaliczonych egzaminów (ocena 2) posiada student z wybranego przedmiotu lub ogólnie

2. Następnie utwórz tablicę z 10 różnymi instancjami klasy Student i wykonaj polecenia:

a. Wypisz do konsoli ile jest studentek
b. Wypisz do konsoli imię i nazwisko najmłodszego ze studentów
c. Dodaj każdemu studentowi po 6 losowych ocen z każdego przedmiotu. Możesz wykorzystać funkcję losowaLiczbaOd2do5 zwracającą losową liczbę od 2 do 5. Znajdziesz ją w sekcji head pliku HTML.
d. Wypisz do konsoli ile studentów nie ma oblanego egzaminu z przedmiotu „HTML”
e. Wypisz do konsoli imię i nazwisko najlepszego studenta z grupy 1
f. Wypisz do konsoli nazwę przedmiotu z którego studenci otrzymali najgorsze oceny
g. Dodaj wiersze do tabeli znajdującej się w sekcji „Rozwiązanie” wg poniższego schematu:
----------------------------------------------------------------------------------------------------------------------------------------------
| Dane osobowe	                                | Dane uczelni	                            | Oceny                                          |
|-----------------------------------------------|-------------------------------------------|------------------------------------------------|
| Imię	| Nazwisko	| Płeć	| Data urodzenia	| Kurs	        | Grupa	    | Login	        | HTML	    | CSS	    | JavaScript	| jQuery |
| Jan	| Kowalski	| M	    | 2000-05-04	    | FrontEndDev	| 1	        | Jan12456	    | 5,5,4,5	| 4,3,2,4	| 4,2,5,4	    | 4,4    |
---------------------------------------------------------------------------------------------------------------------------------------------|

h. Po naciśnięciu przycisku "Dodaj ocene" pojawia się formularz dodawania oceny. Do selecta o id "dodaj-ocene-select" znajdującego się w tym formularzu dodaj warianty zawierające imię i nazwisko każdego studenta. Funkcję możesz podpiąć do obsługi zdarzenia kliknięcia na przycisk o id "dodaj-ocene-pokaz-form"
i. W formularzu dodawania oceny znajduje się przycisk „Dodaj”. Podepnij do niego obsługę zdarzenia kliknięcia, która doda wybraną ocenę do wybranego studenta. Pamiętaj aby zaktualizować również dane w tabeli.
j. Po naciśnięciu przycisku "Dodaj studenta" pojawia się formularz dodawania nowego studenta. Do przycisku "Dodaj" znajdującego się w tym formularzu podepnij obsługę zdarzenia kliknięcia, która doda studenta to tablicy studentów. Pamiętaj również o zaktualizowaniu danych w tabeli.

// CLASSES - TASK 3 */


// 1. Na podstawie poniższej tabeli utwórz klasę „Student”.
class Student {
    // 1a. Konstruktor z parametrami wejściowymi zawierającymi dane osobowe i dane uczelni. Oceny mają pozostawać puste.
    constructor(imie, nazwisko, plec, dataUrodzenia, grupa, login, kurs) {
        this.DaneOsobowe = {
            Imie: imie,
            Nazwisko: nazwisko,
            Plec: plec,
            DataUrodzenia: dataUrodzenia
        }
        this.DaneUczelni = {
            Kurs: kurs || "FrontEndDev",
            Grupa: grupa,
            Login: login || `${imie}`.substring(0, 3).toLowerCase()
                .replace(/ą/g,"a")
                .replace(/ę/g,"e")
                .replace(/ó/g,"o")
                .replace(/ś/g,"s")
                .replace(/ł/g,"l")
                .replace(/ż|ź/g,"z")
                .replace(/ć/g,"c")
                .replace(/ń/g,"n") + `${nazwisko}`.substring(0, 3).toLowerCase()
                .replace(/ą/g,"a")
                .replace(/ę/g,"e")
                .replace(/ó/g,"o")
                .replace(/ś/g,"s")
                .replace(/ł/g,"l")
                .replace(/ż|ź/g,"z")
                .replace(/ć/g,"c")
                .replace(/ń/g,"n") + `${dataUrodzenia}`.substring(2, 4) + `${dataUrodzenia}`.substring(5, 7) + `${dataUrodzenia}`.substring(8, 10)
        }
        this.Oceny = {
            html: [],
            css: [],
            javascript: [],
            jquery: []
        }
    }
    // 1b. Dodającą nową ocenę do wybranego przedmiotu
    DodajOcene(przedmiot, ocena) {
        if (((ocena >= 2) && (ocena <= 5)) && (this.Oceny.hasOwnProperty(przedmiot.toLowerCase()))) return this.Oceny[przedmiot.toLowerCase()].push(ocena);
    }
    // 1c. Zwracającą średnią ocen z wybranego przedmiotu lub ogólnie
    SredniaOcen(przedmiot) {
        let sredniaOcen = 0;
        let iloscOcen = 0;
        if ((przedmiot == undefined) || (!(this.Oceny.hasOwnProperty(przedmiot.toLowerCase())))) {
            for (let przedmioty in this.Oceny) {
                for (let ocena in this.Oceny[przedmioty]) {
                    sredniaOcen += this.Oceny[przedmioty][ocena];
                    iloscOcen++;
                }
            }
            return sredniaOcen / iloscOcen;
        } 
        else if (this.Oceny.hasOwnProperty(przedmiot.toLowerCase())) {
            for (let index in this.Oceny[przedmiot.toLowerCase()]) {
                sredniaOcen += this.Oceny[przedmiot.toLowerCase()][index];
            }
            return (sredniaOcen / this.Oceny[przedmiot.toLowerCase()].length);
        }
    }
    // 1d. Zwracającą ile niezaliczonych egzaminów (ocena 2) posiada student z wybranego przedmiotu lub ogólnie
    IleNiezaliczonych(przedmiot) {
        let iloscNiezaliczonych = 0;
        if ((przedmiot == undefined) || (!(this.Oceny.hasOwnProperty(przedmiot.toLowerCase())))) {
            for (let przedmioty in this.Oceny) {
                for (let ocena in this.Oceny[przedmioty]) {
                    if (this.Oceny[przedmioty][ocena] == 2) {
                        iloscNiezaliczonych++;
                    };
                }
            }
            return iloscNiezaliczonych;
        } 
        else if (this.Oceny.hasOwnProperty(przedmiot.toLowerCase())) {
            for (let index in this.Oceny[przedmiot.toLowerCase()]) {
                if (this.Oceny[przedmiot.toLowerCase()][index] == 2) {
                    iloscNiezaliczonych++;
                }
            }
            return iloscNiezaliczonych;
        }
    }
}


// 2. Następnie utwórz tablicę z 10 różnymi instancjami klasy Student.
const Studenci = [
    zuzannaKowalczyk = new Student("Zuzanna", "Kowalczyk", "K", "2002-09-12", 1),
    franciszekWozniak = new Student("Franciszek", "Woźniak", "M", "2003-02-26", 1),
    mikolajKozlowski = new Student("Mikołaj", "Kozłowski", "M", "2002-01-29", 2),
    lenaZielinska = new Student("Lena", "Zielińska", "K", "2004-07-02", 1),
    bartlomiejMichalak = new Student("Bartłomiej", "Michalak", "M", "2003-11-18", 2),
    kamilaWojcik = new Student("Kamila", "Wójcik", "K", "2002-09-17", 1),
    juliaNowak = new Student("Julia", "Nowak", "K", "2004-03-07", 2),
    gabrielPolak = new Student("Gabriel", "Polak", "M", "2003-04-30", 2),
    apoloniaGlebska = new Student("Apolonia", "Głębska", "K", "2003-08-04", 1),
    bogumilaPrzylebska = new Student("Bogumiła", "Przyłębska", "K", "2004-02-20", 2),
];

// 2a. Wypisz do konsoli ile jest studentek.
let ileKobiet = Studenci.filter(function(kobiety) {
    if (kobiety.DaneOsobowe.Plec == "K") return true;
}).length;
console.log(ileKobiet);

// 2b. Wypisz do konsoli imię i nazwisko najmłodszego ze studentów.
let najmlodszyStudent = Studenci.sort(function(a, b) {
    return (new Date(b.DaneOsobowe.DataUrodzenia).getTime() - new Date(a.DaneOsobowe.DataUrodzenia).getTime());
});
console.log(najmlodszyStudent[0].DaneOsobowe.Imie + " " + najmlodszyStudent[0].DaneOsobowe.Nazwisko);

// 2c. Dodaj każdemu studentowi po 6 losowych ocen z każdego przedmiotu. Możesz wykorzystać funkcję losowaLiczbaOd2do5 zwracającą losową liczbę od 2 do 5. Znajdziesz ją w sekcji head pliku HTML.
function losowaLiczbaOd2Do5() {
    return Math.floor(Math.random() * (5 - 2 + 1)) + 2;
}
for (let studenci in Studenci) {
    for (let przedmioty in Studenci[studenci].Oceny) {
        for (let i = 0; i < 6; i++) {
            Studenci[studenci].Oceny[przedmioty].push(losowaLiczbaOd2Do5());
        }
    }
}

// 2d. Wypisz do konsoli ile studentów nie ma oblanego egzaminu z przedmiotu „HTML”.
let iluOblalo = Studenci.filter(function(niezaliczenia) {
    if (niezaliczenia.Oceny.html.includes(2)) return true;
}).length;
iluZaliczyloHtml = Studenci.length - iluOblalo;
console.log(iluZaliczyloHtml);

// 2e. Wypisz do konsoli imię i nazwisko najlepszego studenta z grupy 1.
let najlepszyStudent = Studenci.filter(function(grupa) {
    if (grupa.DaneUczelni.Grupa == 1) return true;
}).sort(function(a, b) {
    return b.SredniaOcen() - a.SredniaOcen();
});
console.log(najlepszyStudent[0].DaneOsobowe.Imie + " " + najlepszyStudent[0].DaneOsobowe.Nazwisko);

// 2f. Wypisz do konsoli nazwę przedmiotu z którego studenci otrzymali najgorsze oceny.
function najgorszeOceny() {
    let html = 0, css = 0, javascript = 0, jquery = 0;
    for (let index in Studenci) {
        html += Studenci[index].SredniaOcen("html");
        css += Studenci[index].SredniaOcen("css");
        javascript += Studenci[index].SredniaOcen("javascript");
        jquery += Studenci[index].SredniaOcen("jquery");
    }
    let tablicaSrednich = [];
    tablicaSrednich.push(
        {name: "HTML", srednia: html},
        {name: "CSS", srednia: css},
        {name: "JavaScript", srednia: javascript},
        {name: "jQuery", srednia: jquery}
    );
    tablicaSrednich.sort(function(a, b) {
        return a.srednia - b.srednia;
    });
    let iloscTakichSamych = 0;
    for (let i = 0; i < tablicaSrednich.length - 1; i++) {
        if (tablicaSrednich[i].srednia == tablicaSrednich[i + 1].srednia) {
            iloscTakichSamych++;
        }
    }
    for (let i = 0; i <= iloscTakichSamych; i++) {
        return tablicaSrednich[i].name;
    }
};
console.log(najgorszeOceny());

/* 2g. Dodaj wiersze do tabeli znajdującej się w sekcji „Rozwiązanie” wg poniższego schematu:
----------------------------------------------------------------------------------------------------------------------------------------------
| Dane osobowe	                                | Dane uczelni	                            | Oceny                                          |
|-----------------------------------------------|-------------------------------------------|------------------------------------------------|
| Imię	| Nazwisko	| Płeć	| Data urodzenia	| Kurs	        | Grupa	    | Login	        | HTML	    | CSS	    | JavaScript	| jQuery |
| Jan	| Kowalski	| M	    | 2000-05-04	    | FrontEndDev	| 1	        | Jan12456	    | 5,5,4,5	| 4,3,2,4	| 4,2,5,4	    | 4,4    |
----------------------------------------------------------------------------------------------------------------------------------------------
*/
function uzupelnijTabele() {
    // pobranie ciała tabeli z html
    let tabelaStudentow = document.getElementById("wiersze-tabeli-studenci");
    // utworzenie pętli dodającej tyle wierszy ilu jest studentów
    for (let wiersz in Studenci) {
        // utworzenie nowego wiersza tabeli
        let nowyWiersz = document.createElement("tr");
        // utworzenie kolumn tabeli
        let kolumna01 = document.createElement("td");
        kolumna01.innerHTML = Studenci[wiersz].DaneOsobowe.Imie;
        nowyWiersz.appendChild(kolumna01);

        let kolumna02 = document.createElement("td");
        kolumna02.innerHTML = Studenci[wiersz].DaneOsobowe.Nazwisko;
        nowyWiersz.appendChild(kolumna02);

        let kolumna03 = document.createElement("td");
        kolumna03.innerHTML = Studenci[wiersz].DaneOsobowe.Plec;
        nowyWiersz.appendChild(kolumna03);

        let kolumna04 = document.createElement("td");
        kolumna04.innerHTML = Studenci[wiersz].DaneOsobowe.DataUrodzenia;
        nowyWiersz.appendChild(kolumna04);

        let kolumna05 = document.createElement("td");
        kolumna05.innerHTML = Studenci[wiersz].DaneUczelni.Kurs;
        nowyWiersz.appendChild(kolumna05);

        let kolumna06 = document.createElement("td");
        kolumna06.innerHTML = Studenci[wiersz].DaneUczelni.Grupa;
        nowyWiersz.appendChild(kolumna06);

        let kolumna07 = document.createElement("td");
        kolumna07.innerHTML = Studenci[wiersz].DaneUczelni.Login;
        nowyWiersz.appendChild(kolumna07);

        let kolumna08 = document.createElement("td");
        kolumna08.innerHTML = Studenci[wiersz].Oceny.html;
        nowyWiersz.appendChild(kolumna08);

        let kolumna09 = document.createElement("td");
        kolumna09.innerHTML = Studenci[wiersz].Oceny.css;
        nowyWiersz.appendChild(kolumna09);
        
        let kolumna10 = document.createElement("td");
        kolumna10.innerHTML = Studenci[wiersz].Oceny.javascript;
        nowyWiersz.appendChild(kolumna10);
        
        let kolumna11 = document.createElement("td");
        kolumna11.innerHTML = Studenci[wiersz].Oceny.jquery;
        nowyWiersz.appendChild(kolumna11);

        // dodanie wszystkich wierszy do tabeli studentów
        tabelaStudentow.appendChild(nowyWiersz);
    }
};
uzupelnijTabele();

// 2h. Po naciśnięciu przycisku "Dodaj ocene" pojawia się formularz dodawania oceny. 
// Do selecta o id "dodaj-ocene-select" znajdującego się w tym formularzu dodaj warianty zawierające imię i nazwisko każdego studenta. 
// Funkcję możesz podpiąć do obsługi zdarzenia kliknięcia na przycisk o id "dodaj-ocene-pokaz-form".
let dodajOceneLista = document.getElementById("dodaj-ocene-select");
for (let index in Studenci) {
    let option = document.createElement("option");
    option.innerHTML = `${Studenci[index].DaneOsobowe.Imie} ${Studenci[index].DaneOsobowe.Nazwisko}`;
    dodajOceneLista.appendChild(option);
};

// 2i. W formularzu dodawania oceny znajduje się przycisk „Dodaj”. 
// Podepnij do niego obsługę zdarzenia kliknięcia, która doda wybraną ocenę do wybranego studenta. 
// Pamiętaj aby zaktualizować również dane w tabeli.
let przysikDodajOcene = document.getElementById("dodaj-ocene-zapisz");
przysikDodajOcene.addEventListener("click", function() {
    let studentImie = document.getElementById("dodaj-ocene-select").value.split(" ")[0];
    let studentNazwisko = document.getElementById("dodaj-ocene-select").value.split(" ")[1];
    let przedmiot = document.getElementById("przedmiot").value;
    let ocena = Number(document.getElementById("ocena").value);
    for (let i in Studenci) {
        if ((Studenci[i].DaneOsobowe.Imie == studentImie) && (Studenci[i].DaneOsobowe.Nazwisko == studentNazwisko)) {
            Studenci[i].DodajOcene(przedmiot, ocena);
        }
    }
    document.getElementById("wiersze-tabeli-studenci").innerHTML = "";
    uzupelnijTabele();
});

// 2j. Po naciśnięciu przycisku "Dodaj studenta" pojawia się formularz dodawania nowego studenta. 
// Do przycisku "Dodaj" znajdującego się w tym formularzu podepnij obsługę zdarzenia kliknięcia, która doda studenta to tablicy studentów. 
// Pamiętaj również o zaktualizowaniu danych w tabeli.
let przysikDodajStudenta = document.getElementById("dodaj-studenta-zapisz");
przysikDodajStudenta.addEventListener("click", function() {
    let studentImie = document.getElementById("dodaj-studenta-imie").value;
    let studentNazwisko = document.getElementById("dodaj-studenta-nazwisko").value;
    let studentPlec = document.getElementById("dodaj-studenta-plec").value;
    let studentDataUrodzenia = document.getElementById("dodaj-studenta-data-urodzenia").value;
    let studentGrupa = Number(document.getElementById("dodaj-studenta-grupa").value);
    let studentLogin = document.getElementById("dodaj-studenta-login").value;

    let nowyStudent = new Student(studentImie, studentNazwisko, studentPlec, studentDataUrodzenia, studentGrupa, studentLogin);
    Studenci.push(nowyStudent);
    document.getElementById("wiersze-tabeli-studenci").innerHTML = "";
    uzupelnijTabele();
});