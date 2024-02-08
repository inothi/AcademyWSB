function aktualizujDane(writtenText) {
    document.getElementById("liczbaZnakow").value = howManyChar(writtenText);
    document.getElementById("liczbaSpacji").value = howManySpaces(writtenText);
    document.getElementById("liczbaSamoglosek").value = howManyVowels(writtenText);
    document.getElementById("czyJavaScript").value = findJavaScript(writtenText);
};

function howManyChar(writtenText) {
    return writtenText.length;
};

function howManySpaces(writtenText) {
    return writtenText.split(" ").length - 1;
};

function howManyVowels(writtenText) {
    const vowels = ["a", "ą", "e", "ę", "i", "o", "ó", "u", "y"];
    let vowelsCounter = 0;
    for (let i = 0; i < writtenText.length; i++) {
        let char = writtenText[i];
        if (vowels.includes(char)) {
            vowelsCounter++;
        };
    };
    return vowelsCounter;
};

function findJavaScript(writtenText) {
    return /JavaScript/i.test(writtenText);
};