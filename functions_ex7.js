let data = new Date();
let actualDate = data.toISOString().slice(0, 10);

// ex.1
function getCurrentDate() {
    document.getElementById("aktualnaData").value = actualDate;
};
getCurrentDate();

// ex.2
roznicaDat = () => {
    let currentDate = new Date(document.getElementById("aktualnaData").value);
    let selectedDate = new Date(document.getElementById("wybranaData").value);
    let differenceBetweenDates = selectedDate - currentDate;
    differenceBetweenDates = (differenceBetweenDates / (1000 * 60 * 60 * 24));
    if ((selectedDate) == "Invalid Date") {
        return document.getElementById("roznicaDat").value = "";
    };
    document.getElementById("roznicaDat").value = differenceBetweenDates;
};