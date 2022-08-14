const palindromes = function (word) {
    word = word.replace(/\W|_/g, '').toLowerCase()
    words = [...word]
    let reversed = words.reverse().join('')
    if(word == reversed){
        return true
    }
    else {
        return false
    }
    
};
// Do not edit below this line
module.exports = palindromes;
