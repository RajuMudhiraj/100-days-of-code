// creating Stack class (constructor object) in ES6 
class Stack {
    constructor() {
        this.items = []
    }

    // pushing element to the last position of Stack items
    push(element) {
        this.items.push(element)
        return this.items[this.items.length - 1]
    }

    // popping out the last element from Stack items
    pop() {
        if (this.items.length == 0) {
            return "Underflow"
        }
        else {

            return this.items.pop()
        }
    }

    // seeing of last element of Stack items
    peek() {
        return this.items[this.items.length - 1];
    }

    // checking if the Stack items are empty
    isEmpty() {
        return this.items.length == 0;
    }

    // printing the whole Stack items as a string
    printStack() {
        var str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += `${this.items[i]} `;
        }
        return str;
    }

}

let stack = new Stack();

console.log(stack.push('1'));  // returns 1
console.log(stack.push('2'));  // returns 2
console.log(stack.push('3'));  // returns 3
console.log(stack.push('4'));  // returns 4
console.log(stack.pop());       // returns 4
console.log(stack.printStack()) // returns '1 2 3'


