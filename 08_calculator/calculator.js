const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  let a = arr.reduce((total,item)=>{
    return(total+item)
  },0)
  return a
};

const multiply = function(c) {
  let arr=[...c];
  console.log(arr)
  if (arr.length == 0){
    arr[0] = 1
  }
  let arrFin = arr.reduce((total,item)=>{
    return total*item
  },1)
  return arrFin
};

const power = function(a,b) {
	return a**b
};

const factorial = function(b) {
  let fin = 1
	for(let i=b;i>0;i--){
    fin = fin * i
  }
  return fin
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
