
// creating Queue class (constructor object) in ES6 
class Queue {
    constructor() {
        this.items = []
    } 

    //adding an element to the end of Queue items
    enqueue(element) {
        this.items.push(element)
        return this.items[this.items.length - 1]
    }

    //removing an element from starting of the Queue items 
    dequeue() {
        if (this.isEmpty()) {
            return 'Underflow'
        }
        else {
            return this.items.shift();
        }
    }

    // checking the first element of Queue items
    front() {
        if (this.isEmpty()) {
            return 'No elements in Queue'
        }
        else {
            return this.items[0]
        }
    }

    // checking if the Queue items is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // printing Queue items
    printQueue() {
        var str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str
    }
}

var queue = new Queue();

console.log(queue.enqueue('1')) //returns 1
console.log(queue.enqueue('2')) //returns 2
console.log(queue.enqueue('3')) //returns 3
console.log(queue.enqueue('4')) //returns 4
console.log(queue.dequeue()) //returns 1
console.log(queue.front()) //returns 2
console.log(queue.isEmpty()) //returns false
console.log(queue.printQueue()) //returns 2 3 4