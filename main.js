
// 1
function maxOfTwoNumbers(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
// console.log(maxOfTwoNumbers(4, 7));

// 2
let maxOfThree = function(num1, num2, num3) {
    let max = (num1 > num2) ? num1 : num2;
    max = (max > num3) ? max : num3;
    return max;
}
// console.log(maxOfThree(1, 2, 3));

// 3
function isCharVowel(char) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char) ? true : false;
}
// console.log(isCharVowel('b'))

// 4
let sumArray = function(arr) {
    let total = 0;
    arr.forEach(function(int) {
        total += int
    });
    return total;
}
// console.log(sumArray([1, 2, 5]))

// 5
function multiplyArray(arr) {
    let total = 1;
    arr.forEach(function(int) {
        total *= int
    });
    return total;
}
// console.log(multiplyArray([2, 6, 2]))

// 6
let numArgs = function(args) {
    return arguments.length;
}
// console.log(numArgs(1, 2, 3, 213, 856, 321));

// 7
function reverseString(str) {
    let revStr = []
    for (let i = str.length; i >= 0; i--) {
        revStr.push(str[i]);
    }
    return revStr.join('');
}
// console.log(reverseString('testing'));

// 8
let longestStringInArray = function(strArr) {
    const sorted = strArr.sort((a, b) => b.length - a.length);
    return sorted[0].length;
}
// console.log(longestStringInArray(['test', 'testing', 'tested']))

// 9
function stringsLongerThan(strArr, num) {
    const longer = []
    for (let i of strArr) {
        if (i.length > num) longer.push(i)
    }
    return longer;
}
console.log(stringsLongerThan(['abc', 'bcde', 'cdefgh', 'defghijk'], 5));