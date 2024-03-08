/* CLASSES - TASK 1 // 

Utwórz klasę „Pracownik” przechowującą podstawowe informacje o danym pracowniku tj.:
Imię, Nazwisko, Data zatrudnienia, Data zwolnienia, Pensja, Data wygaśnięcia umowy.

Utwórz konstruktor klasy wg poniższych instrukcji:
- W konstruktorze należy podać wszystkie informacje z wyjątkiem daty zwolnienia (ma pozostać pusta)
- Data zatrudnienia ma być parametrem opcjonalnym, w przypadku braku podania ma wstawić się data aktualna
- Data wygaśnięcia umowy ma być parametrem opcjonalnym, w przypadku braku podania ma wstawić się wartość pusta

Utwórz metody klasy:
- ZmienPensje --> zmieniającą pensję na podaną jako parametr wejściowy
- Zwolnij --> ustawiający datę zwolnienia na podaną jako parametr wejściowy (opcjonalny), w przypadku braku podania wstawiający aktualną datę
- PrzedluzUmoweDo --> zmieniający datę wygaśnięcia umowy na podaną jako parametr wejściowy

Następnie wykonaj poniższe polecenia:

1. Utwórz 3 instancje klasy wg poniższej tabeli:
-----------------------------------------------------------------------------------------------------------------
| Imię      | Nazwisko	    | Data zatrudnienia	    | Data zwolnienia   | Pensja    | Data wygaśnięcia umowy    |
-----------------------------------------------------------------------------------------------------------------
| Jan	    | Kowalski	    | 2020-01-01		    | --                | 6000	    |                           |
| Anna	    | Lewandowska	| 2019-05-04		    | --                | 8000	    |                           |
| Wincenty	| Pazdan	    | 2020-04-05		    | --                | 4000      | 2021-04-05                |
-----------------------------------------------------------------------------------------------------------------

2. Wypisz do konsoli ile zarabia Pan Wincenty
3. Wypisz do konsoli jak długo pracuje Pan Jan
4. Wypisz do konsoli ile łącznie zarabiają wszyscy pracownicy
5. Przedłuż umowę Panu Wincentemu do końca 2022 roku
6. Daj 2000 zł podwyżki Pani Annie
7. Zwolnij Pana Jana z dniem dzisiejszym

// CLASSES - TASK 1 */

class Pracownik {
    constructor(imie, nazwisko, pensja, dataZatrudnienia, dataWygasnieciaUmowy) {
        this.imie = imie,
        this.nazwisko = nazwisko,
        this.pensja = pensja,
        this.dataZatrudnienia = dataZatrudnienia || new Date().toISOString().slice(0, 10),
        this.dataWygasnieciaUmowy = dataWygasnieciaUmowy || "",
        this.dataZwolnienia = ""
    }
    ZmienPensje(pensja) {
        if (pensja == undefined) alert("Nie podano wysokości wynagrodzenia");
        return this.pensja = pensja;
    }
    Zwolnij(zwolnionoDnia) {
        return this.dataZwolnienia = zwolnionoDnia || new Date().toISOString().slice(0, 10);
    }
    PrzedluzUmoweDo(dataPrzedluzenia) {
        if (dataPrzedluzenia == undefined) alert("Nie podano daty przedłużenia umowy");
        return this.dataWygasnieciaUmowy = dataPrzedluzenia;
    }
    // Utworzenie dodatkowej metody do obliczania stażu pracy (na potrzeby pkt. 3.)
    StazPracy() {
        let dlugoscStazu = ((new Date().getTime() - new Date(this.dataZatrudnienia).getTime()) / (1000 * 60 * 60 * 24 * 365));
        if ((dlugoscStazu - Math.floor(dlugoscStazu)) < .2) return `pracuje ${Math.floor(dlugoscStazu)} lat(a)`;
        if ((dlugoscStazu - Math.floor(dlugoscStazu)) < .4) return `pracuje ponad ${Math.floor(dlugoscStazu)} lat(a)`;
        if ((dlugoscStazu - Math.floor(dlugoscStazu)) < .6) return `pracuje ${Math.floor(dlugoscStazu)} i pół roku`;
        if ((dlugoscStazu - Math.floor(dlugoscStazu)) < .8) return `pracuje ponad ${Math.floor(dlugoscStazu)} i pół roku`;
        else return `pracuje prawie ${Math.floor(dlugoscStazu + 1)} lat(a)`;
    }
}


// 1. Utwórz 3 instancje klasy wg powyższej tabeli.
let janKowalski = new Pracownik("Jan", "Kowalski", 6000, "2020-01-01");
let annaLewandowska = new Pracownik("Anna", "Lewandowska", 8000, "2019-05-04");
let wincentyPazdan = new Pracownik("Wincenty", "Pazdan", 4000, "2020-04-05", "2021-04-05");


// 2. Wypisz do konsoli ile zarabia Pan Wincenty
console.log(`${wincentyPazdan.imie} ${wincentyPazdan.nazwisko} zarabia ${wincentyPazdan.pensja} zł.`);


// 3. Wypisz do konsoli jak długo pracuje Pan Jan
console.log(`${janKowalski.imie} ${janKowalski.nazwisko} ${janKowalski.StazPracy()}`);