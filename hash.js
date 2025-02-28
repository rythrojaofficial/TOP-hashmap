console.log("hash test")
class HashMap{
    constructor(loadFactor, capacity){
        this.loadFactor = loadFactor;
        this.capacity = capacity;

        this.buckets = new Array(this.capacity)
        this.size = 0;


    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode % this.capacity;
      } 
}