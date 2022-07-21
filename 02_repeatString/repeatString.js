const repeatString = function(str,num=Math.ceil(Math.random()*6)) {
    let temp = ""

    if (num < 0) {
        temp = "ERROR";
    }

    else {
        if (str == ''){
            temp = '';
        }
        else {
            for (i=0;i<num;i++){
            temp += str;
            }
        }
    }
        return (temp)
};
console.log(repeatString('hey',2))

// Do not edit below this line
module.exports = repeatString;
