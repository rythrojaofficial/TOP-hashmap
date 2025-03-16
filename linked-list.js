import { Node } from "./node.js";
import { errorMessage } from "./console.js";

export class BucketTypeLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0

    }
    append(key, value){
        // adds a new node containing value to the end of the list
        const node = new Node(key, value);

        if (this.head === null){
            this.head = node;
            this.tail = node;
            // console.log('appending')
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }
    prepend(key, value){
        // adds a new node containing value to the start of the list
        const currentNode = new Node(key, value);
        const initialHead = this.head;

        if (this.head === null){
            this.head = currentNode;
            this.tail = currentNode;
        }else {
            currentNode.next = initialHead;
            this.head = currentNode;
        }
        this.size++

    } 

    at(index){
        // returns the node at the given index
        let currentNode = this.head;{
            let j = 0;
            while (j < index){
                currentNode = currentNode.next;
                j++
            }return currentNode;     
        }
    } 
    
    pop(){
        // removes the last element from the list
        

        switch(true){
            case (this.head === null):
                // empty list 
                console.log(errorMessage('no tail'));
                return;
            case (this.head.next === null):
                // single item list
                console.log('poppy')
                this.head = null;
                this.tail = null;
                this.size--;
                return;
            default:
                let currentNode = this.head;
                while(currentNode.next){
                    currentNode = currentNode.next;
                }
                currentNode.next = null;
                this.tail = currentNode;
                this.size--;
                return;
                }
        }
    
    contains(value){
        // returns true if the passed in key is in the list and otherwise returns false.
        let i = 0;
        while (i < this.size){
            if (this.at(i).value === value){
                return true;
                } 
            i++;
        }
        return false;
    } 
    find(value){
        // returns the index of the node containing value, or null if not found.
        if (this.contains(value) === true){
            for (let i = 0; i < this.size; i++){
                if (this.at(i).value == value){
                    return i;
                }
            }
        }else { 
            return errorMessage('value not found');
        }
    } 
    toString(){
        // represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
        // The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let string = '';
        let j = 0;
        while (j < this.size){
            string += `[ ${this.at(j).value} ] -> `;
            j++;
        }
        return string += `[null]`;
        
    } 
    insertAt(key, value, index){
        // that inserts a new node with the provided value at the given index.
        // [ 0 -> 1 ^inserthere^ -> 2 -> 3 -> 4]
        if (this.head === null || index === this.size){
            this.append(key, value);
            this.size++;
        }else {
            const nodeBeforeIndex = this.at(index-1);
            const newNode = new Node(key, value);
            newNode.next = this.at(index);
            nodeBeforeIndex.next = newNode;
            this.size++;
        }
    } 
    removeAt(index){
        // that removes the node at the given index.
        switch (true){
            case index > this.size:
                console.log(errorMessage('index not available'));
                break;
            case this.head === null:
                console.log(errorMessage('head = null'));
                break;
            case index === 0
                && this.size === 1:
                // console.log('removeatnew')
                this.pop();
                break;
            case index === 0:
                this.head = this.at(1);
                break;
            case index === this.size:
                this.pop();
                break;
            default:
                this.at(index - 1).next = this.at(index + 1);
                this.size--
                break;
        }
    }
}