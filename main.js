import { HashMap } from "./hash-map.js";

const myHash = new HashMap;
myHash.set('apple', 'red')
myHash.set('banana', 'yellow')
myHash.set('carrot', 'orange')
myHash.set('dog', 'brown')
myHash.set('elephant', 'gray')
myHash.set('frog', 'green')
myHash.set('grape', 'purple')
myHash.set('hat', 'black')
myHash.set('ice cream', 'white')
myHash.set('jacket', 'blue')
myHash.set('kite', 'pink')
myHash.set('lion', 'golden')

let testArray = [
    'apple', 
    'banana',
    'carrot',
    'dog',
    'elephant',
    'frog',
    'grape',
    'hat',
    'ice cream',
    'jacket',
    'kite',
    'lion',
];
console.log(myHash)
for (let i = 0; i < myHash.buckets.length; i++){
    console.log(`bucket ${i} : ${myHash.buckets[i]}`)
}

// testArray.forEach((key) =>{

//     console.log({
//         'key': key,
//         'value': myHash.get(key)
//     })
// })


// console.log({
//     'length()':myHash.length()
// })
// myHash.remove('frog');
myHash.clear();
// console.log(myHash.keys());
// console.log(myHash.keys());
console.log(myHash)
for (let i = 0; i < myHash.buckets.length; i++){
    console.log(`bucket ${i} : ${myHash.buckets[i]}`)
}