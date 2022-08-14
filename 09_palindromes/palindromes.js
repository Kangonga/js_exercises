const palindromes = function (word) {
    word = word.replace(/\W|_/g, '').toLowerCase()
    words = [...word]
    let reversed = words.reverse().join('')
    // console.log(reversed)
    // console.log(word)
    if(word == reversed){
        return true
    }
    else {
        return false
    }
    
};
console.log(palindromes('bar rab!'));
// Do not edit below this line
module.exports = palindromes;
