const fibonacci = function(num) {
    //generate fibonacci sequence
    //a number num is the sum of the two numbers preceding it.
    //three variables 011235
    if(num<0){
        return('OOPS')
    }
    let fib = []
    let i=0
    let start=0, next=1, third=0
    while(i<num){
        start=next
        next=third
        third = start+next
        fib.push(third)
        i++
    }
    return fib[fib.length-1]
};

console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
