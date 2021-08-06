let arr = [
     {name: 'Lawrance', age: 22, gender: 'male'},
     {name: 'Kelvin', age: 45, gender: 'male'},
     {name: 'Max', age: 13, gender: 'male'},
     {name: 'Michael', age: 33, gender: 'male'},
     {name: 'Raph', age: 58, gender: 'male'},
     {name: 'George', age: 26, gender: 'male'},
     {name: 'Matt', age: 17, gender: 'male'},
     {name: 'Jones', age: 12, gender: 'male'},
     {name: 'Dylan', age: 60, gender: 'male'},
     {name: 'Dickson', age: 31, gender: 'male'}
]

let array = [1,2,3,4,5]

for(let i = 0; i < 5; i++){
     console.log(arr[i]);
}

// filter()
const filteredItems = arr.filter((item) =>{
     return item.age < 50;
})
console.log(filteredItems)

// map()
const mapItems = arr.map((item) =>{
     return item.age;
})
console.log(mapItems)

// find()
const findItems = arr.find((item) =>{
     return item.age < 50;
})
console.log(findItems)

//forEach()
arr.forEach((item) => {
     console.log(item.name);
})

// some()
const someItems = arr.some((item) =>{
     return item.age < 18;
})
console.log(someItems)

// every()
const everyItems = arr.every((item) =>{
     return item.age < 18;
})
console.log(everyItems)

// reduce()
const reduceItems = arr.every((currentTotal, item) =>{
     return item.age += currentTotal
}, 0)
console.log(reduceItems)

// includes()
const includesItems = array.includes(2);
console.log(includesItems);

