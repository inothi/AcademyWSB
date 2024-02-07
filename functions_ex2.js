let selectModule = document.querySelector("select");

function wypiszKomunikat() {    
    for (let i = 0; i < 100; i++) {
        let optionModule = document.createElement("option");
        optionModule.innerHTML = i + 1;
        selectModule.append(optionModule);
    };
};
wypiszKomunikat();

function komunikatZmienionoWartosc() {
    selectModule.addEventListener("change", function() {
        console.log("Zmieniono wartość");
    });
};
komunikatZmienionoWartosc();

function wypiszNowaWartosc() {
    selectModule.addEventListener("change", function() {
        console.log(`Nowa wartość to ${this.value}`);
    });
};
wypiszNowaWartosc();