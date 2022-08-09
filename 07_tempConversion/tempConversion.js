const ftoc = function(temp) {
  let converts =(temp-32)*(5/9)
  converts = Math.round(converts*10)/10
  return converts
  };

const ctof = function(temp) {
  let converts = (temp*(9/5))+32
  converts = Math.round(converts*10)/10
  return converts
};

console.log(ctof(73.2))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
