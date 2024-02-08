const shoppingList = ["Mleko", "Jajka", "Kiełbasa", "Parówki", "Pomidory", "Jabłka", "Masło", "Cukierki", "Ser żółty"];

// ex.1
console.log(shoppingList.sort());

// ex.2
function fromShortest(a, b) {
    return a.length - b.length;
};
console.log(shoppingList.sort(fromShortest));

// ex.3
function separateLine(a) {
    console.log(a);
};
shoppingList.forEach(separateLine);

// ex.4
function sumLetter() {
    let sum = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].includes(" ")) {
            let spaces = shoppingList[i].split(" ").length - 1;
            sum += shoppingList[i].length - spaces;
        }
        else {
            sum += shoppingList[i].length;
        };
    };
    return sum;
};
console.log(sumLetter());

// ex.5
function filterA(shoppingList) {
    return /a/i.test(shoppingList);
};
console.log(shoppingList.filter(filterA));

// ex.6
function bigLetters() {
    for (let i = 0; i < shoppingList.length; i++) {
        shoppingList[i] = shoppingList[i].toUpperCase();
    };
    console.log(shoppingList);
};
bigLetters(shoppingList);