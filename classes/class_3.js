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
            Login: login
        }
        this.Oceny = {
            html: [5,4,2,2,5],
            css: [2,3,5,5],
            javascript: [4,4,4,3],
            jquery: [2,3,2]
        }
    }
    // 1b. Dodającą nową ocenę do wybranego przedmiotu
    DodajOcene(przedmiot, ocena) {
        if (((ocena >= 2) && (ocena <= 5)) && (this.Oceny.hasOwnProperty(przedmiot.toLowerCase()))) return this.Oceny[przedmiot.toLowerCase()].push(ocena);
    }
    // 1c. Zwracającą średnią ocen z wybranego przedmiotu...
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
        // ... lub ogólnie
        else if (this.Oceny.hasOwnProperty(przedmiot.toLowerCase())) {
            for (let index in this.Oceny[przedmiot.toLowerCase()]) {
                sredniaOcen += this.Oceny[przedmiot.toLowerCase()][index];
            }
            return (sredniaOcen / this.Oceny[przedmiot.toLowerCase()].length);
        }
    }
}

let TomaszScieszka = new Student("Tomasz", "Ścieszka", "M", "1986-02-26", 2, "tomsci860226");