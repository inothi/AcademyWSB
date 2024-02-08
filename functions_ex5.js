const numArray = [10, 5, -4, 20, -11, 14, 3, 2, -3, 13];

// ex.1
function sortDown(a, b) {
    return b - a;
};
console.log(numArray.sort(sortDown));

// ex.2
function sortUpAbolute(a, b) {
    return Math.abs(a) - Math.abs(b);
};
console.log(numArray.sort(sortUpAbolute));

// ex.3
function greaterThanZero(a) {
    return a > 0;
};
console.log(numArray.filter(greaterThanZero));

// ex.4
function evenNum(a) {
    return (a % 2 == 0);
};
console.log(numArray.filter(evenNum));

// ex.5
function eachNewLine(a) {
    console.log(a);
}
numArray.forEach(eachNewLine);

// ex.6
function greaterThanFive(a) {
    return a > 5;
};
let howManyGreaterThanFive = numArray.filter(greaterThanFive).length;
console.log(howManyGreaterThanFive);

// ex.7
function eachOneMultiply(a, i, arr) {
    arr[i] = a * 2;
};
numArray.forEach(eachOneMultiply);
console.log(numArray);