const sumAll = function(num1,num2) {
    let sum=0
    let init = 0
    if (typeof(num1)!="number" || typeof(num2)!="number" || num1<0 || num2 <0)
         {
            return("ERROR")
         }
    else if(num1 > num2){
        init = num2
        final = num1
    }
    else if(num2 > num1){
        init=num1
        final=num2
    }
    for (let i=init;i<=final;i++){
        sum+=i
        // console.log("i",i,sum,"total")
    }
    return(sum)
    
};
console.log (sumAll(123,"1"))
// Do not edit below this line
module.exports = sumAll;
