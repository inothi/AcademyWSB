/* CLASSES - TASK 2 //

1. Wypisz w konsoli tablicę „listaPracownikow” i przeanalizuj strukturę klasy Pracownik. Jej znajomość przyda Ci się w kolejnych zadaniach.

2. W poniższych zdaniach zastąp symbol "..." poprawną odpowiedzią.
- W firmie kobiety stanowią ... pracowników.
- W 2021 roku zatrudniono ... pracowników.
- ... pracowników otrzymało kiedykolwiek premię.
- Najwięcej dni chorobowych wziął/wzięła ... - ... dni.
- Najwięcej dni chorobowych od początku 2020 roku wziął/wzięła ... - ... dni.
- Firma wypłaciła w 2021 roku łącznie ... zł premii.

3. Do poniższych pól input wstaw ilości osób posiadających dane wykształcenie.
- podstawowe
- średnie ogólne
- średnie techniczne
- zawodowe
- wyższe

4. W poniższych zdaniach zastąp symbol "..." poprawną odpowiedzią.
- Obecnie w firmie pracuje ... pracowników.
- Największy staż wśród obecnie pracujących ma ... . Pracuje od ... roku.
- W 2021 roku ... % aktualnie pracujących pracowników nie wzięło dnia chorobowego.
- Najlepiej zarabiającym pracownikiem obecnie w firmie jest ... . Zarabia miesięcznie ... zł brutto.
- Średnia pensja w firmie wynosi aktualnie ... zł brutto.

// CLASSES - TASK 2 */


// 1. Wypisz w konsoli tablicę „listaPracownikow” i przeanalizuj strukturę klasy Pracownik. Jej znajomość przyda Ci się w kolejnych zadaniach.
console.log(listaPracownikow);


// 2. W poniższych zdaniach zastąp symbol "..." poprawną odpowiedzią.
// - W firmie kobiety stanowią ... pracowników.
// sprawdzenie ile jest kobiet
let ileKobiet = listaPracownikow.filter(function(pracownicy) {
    if (pracownicy.DaneOsobowe.Plec == "K") return true;
    else return false;
}).length;
// sprawdzenie jaki procent wszystkich pracowników stanowią kobiety
let procentKobiet = Math.floor((ileKobiet / listaPracownikow.length) * 100);
document.getElementById("kobiety%").innerHTML = procentKobiet;

// - W 2021 roku zatrudniono ... pracowników.
// sprawdzenie ilu pracowników zatrudniono w 2021
let zatrudnieni2021 = listaPracownikow.filter(function(pracownicy) {
    if (pracownicy.DaneZatrudnienia.Umowa.DataZawarcia.startsWith("2021")) return true;
    else return false;
}).length;
document.getElementById("pracownicy-zatrudnieni-2021").innerHTML = zatrudnieni2021;

// - ... pracowników otrzymało kiedykolwiek premię.
// sprawdzenie ilu pracowników kiedykolwiek otrzymało premię
let ileOtrzymaloPremie = listaPracownikow.filter(function(pracownicy) {
    if (pracownicy.DaneZatrudnienia.Premie.length > 0) return true;
    else return false;
}).length;
// sprawdzenie jaki procent wszystkich pracowników otrzymał premię
let ileProcentOtrzymaloPremie = Math.floor((ileOtrzymaloPremie / listaPracownikow.length) * 100);
document.getElementById("pracownicy-z-premia").innerHTML = ileProcentOtrzymaloPremie;

// - Najwięcej dni chorobowych wziął/wzięła ... - ... dni.
// posortowanie pracowników wg największej liczby dni chorobowych
listaPracownikow.sort(function(a, b) {
    return (b.DaneZatrudnienia.Nieobecnosci.Chorobowe.length - a.DaneZatrudnienia.Nieobecnosci.Chorobowe.length);
});
// wypisanie danych pracownika i liczby dni chorobowych
document.getElementById("najbardziej-chorowity-pracownik").innerHTML = listaPracownikow[0].DaneOsobowe.Imie + " " + listaPracownikow[0].DaneOsobowe.Nazwisko;
document.getElementById("najbardziej-chorowity-pracownik").nextElementSibling.innerHTML = listaPracownikow[0].DaneZatrudnienia.Nieobecnosci.Chorobowe.length;
  
// - Najwięcej dni chorobowych od początku 2020 roku wziął/wzięła ... - ... dni.
// posortowanie pracowników wh największej liczby dni chorobowych i wyfiltrowanie od 2020 roku
listaPracownikow.sort(function(a, b) {
    let pracownik1Od2020 = a.DaneZatrudnienia.Nieobecnosci.Chorobowe.filter(function(data) {
        return new Date(data) >= new Date("2020-01-01");
    });
    let pracownik2Od2020 = b.DaneZatrudnienia.Nieobecnosci.Chorobowe.filter(function(data) {
        return new Date(data) >= new Date("2020-01-01");
    });
    return pracownik2Od2020.length - pracownik1Od2020.length;
});
// wypisanie danych pracownika i liczby dni chorobowych od 2020 roku
document.getElementById("najbardziej-chorowity-pracownik-od-2020").innerHTML = listaPracownikow[0].DaneOsobowe.Imie + " " + listaPracownikow[0].DaneOsobowe.Nazwisko;
document.getElementById("najbardziej-chorowity-pracownik-od-2020").nextElementSibling.innerHTML = listaPracownikow[0].DaneZatrudnienia.Nieobecnosci.Chorobowe.length;
// - Firma wypłaciła w 2021 roku łącznie ... zł premii.