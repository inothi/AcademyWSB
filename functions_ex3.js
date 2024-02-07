function sumujLiczbyZFormularza() {
    let liczba1 = Number(document.getElementById("liczba1").value);
    let liczba2 = Number(document.getElementById("liczba2").value);
    let suma = liczba1 + liczba2;
    console.log(suma);

    let calcBtn = document.getElementById("oblicz");
    calcBtn.addEventListener("click", () => document.getElementById("suma").value = suma);
};