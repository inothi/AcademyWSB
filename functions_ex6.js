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

};