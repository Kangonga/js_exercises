const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
  
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  const findTheOldest = function(people) {
    let findOld;
    findOld = people.sort((a,b)=>{
        if(!(a.yearOfDeath)|| !(b.yearOfDeath)){
            let today = new Date().getFullYear()
            a.yearOfDeath = today
            b.yearOfDeath = today
        }
    })
    findOld = people.sort((a,b)=>(a.yearOfDeath-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)?-1:1)

    return findOld[0]
};
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
