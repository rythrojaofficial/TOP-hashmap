console.log("opening hash map")
class Node{
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class HashMap{
    constructor(loadFactor = .75, capacity = 16){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.size = 0;
        this.buckets = new Array(this.capacity).fill(null)


    }

    hash(key) {
        let hashCode = 0; 
        // initialize hashCode 
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        // loop through key at each index
        // charCodeAt uses unicode for character
     
        return hashCode % this.capacity;
        // modulo to ensure hashCode does not exceed bucket limit
      } 

    set(key, value){
      const index = this.hash(key);
      const newNode = new Node (key, value);
      newNode.next = this.buckets[index]

    }
}