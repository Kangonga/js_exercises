// const removeFromArray = function(array,...items) {
//     for(let j=0;j<items.length;j++){
//         for (let i=0;i<array.length;i++){
//             if (items[j] === array[i]){
//                 array.splice(i,1)
//             }
//         }
//     }
//     return(array)
// };
const removeFromArray = function(arr, ...args) {
    let a = arr;
    let b = args;
    let c = a.filter(d => !b.includes(d));
    console.log(c)};
console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
