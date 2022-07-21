const reverseString = function(str) {
    str = str.split('').reverse().join('');
    return str;
};
console.log(reverseString('hey'))

// Do not edit below this line
module.exports = reverseString;
