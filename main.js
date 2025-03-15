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
console.log({
    'hashmap':myHash,
    'bucket 0':myHash.buckets[0],
    'bucket 1':myHash.buckets[1],
    'bucket 2':myHash.buckets[2],
    'bucket 3':myHash.buckets[3],
    'bucket 4':myHash.buckets[4],
    'bucket 5':myHash.buckets[5],
    'bucket 6':myHash.buckets[6],
    'bucket 7':myHash.buckets[7],
    'bucket 8':myHash.buckets[8],
    'bucket 9':myHash.buckets[9],
    'bucket 10':myHash.buckets[10],
    'bucket 11':myHash.buckets[11],
    'bucket 12':myHash.buckets[12],
    'bucket 13':myHash.buckets[13],
    'bucket 14':myHash.buckets[14],
    'bucket 15':myHash.buckets[15],

})

testArray.forEach((key) =>{

    console.log({
        'key': key,
        'value': myHash.get(key)
    })
})