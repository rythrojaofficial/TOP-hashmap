import { Node } from "./node.js";
import { BucketTypeLinkedList } from "./linked-list.js";



export class HashMap{
    constructor(capacity = 16, loadfactor = .75){
        this.capacity = capacity;
        this.loadfactor = loadfactor;
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;
    }
    
    hash(key) {
        // returns hashed number between 0 and capacity-1
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode %= this.capacity;
        //   modulo ensures hashcode never exceeds number of buckets.
        // eliminates hashcode exceeding js digit limitations
        }
     
        return hashCode;
      } 
    
      set(key, value){
        // insert key value pair into hash map

          const hashedBucketNumber = this.hash(key);
          let theRightBucket = this.buckets[hashedBucketNumber];
     //    find the right bucket

          if (theRightBucket === null){
                // console.log('right bucket working')
                let newBucketList = new BucketTypeLinkedList;
     //        make a new bucket, append the key, and the newBucket will be the right bucket
               newBucketList.append(key, value);
               this.buckets[hashedBucketNumber] = newBucketList;
               // console.log({
               //      "theRightBucket":this.buckets[hashedBucketNumber]
               // });
               this.size++;
          }else if(theRightBucket !== null){
               // console.log('right bucket is null')
               let currentNode = theRightBucket.head;
               switch(true){
                    case currentNode.key === key:
                         console.log('key = key')
                         currentNode.value = value;
                         break;
                    case currentNode.key !== key 
                         && currentNode.next === null:
                         theRightBucket.append(key, value);
                         this.size++;
                         break;
                    case currentNode.key !== key
                         && currentNode.next !== null:
                         do {
                              currentNode = currentNode.next;
                              if (currentNode.key === key){
                                   currentNode.value = value;
                                   // counter++;
                              }
                         } while (currentNode.next !== null)
                    default:
                         console.log('default')
                         break;
               }     
          }
           

                    // if (currentNode.next === null){
                    //      console.log('working')

                    // let counter = 0;
                    // while (currentNode.nextNode !== null){
                    //      if (currentNode.key === key){
                    //           currentNode.value = value;
                    //           counter++;
                    //      }
                    //      currentNode = currentNode.nextNode
                    // }
                    // if (counter === 0){
                    //      theRightBucket.append(key, value);
                    //      this.size++;
                    // }
                    // }
          // }
              
          // }
      }

      checkCollision(key, value){
        


        }
     
          get(key){
     //       takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
     
          }
     
          has(key){
     //       takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
               let hashedBucketNumber = this.hash(key);
                    if (this.buckets[hashedBucketNumber] !== null){
                         let currentNode = this.buckets[hashedBucketNumber];
                         do {
                              if (currentNode.key = key){
                                   return true;
                              } else currentNode = currentNode.next;
                         } while (currentNode.next !== null)
                    }else return false;

          }
     
          remove(key){
     //       takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
     
          }
     
          length(){
     //       returns the number of stored keys in the hash map.
     
          }
     
          clear(){
     //       removes all entries in the hash map.
     
          }
     
          keys(){
     //       returns an array containing all the keys inside the hash map.
     
          }
     
          values(){
     //       returns an array containing all the values.
     
          }
     
          entries(){
     //       returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
     
          }




      }
           