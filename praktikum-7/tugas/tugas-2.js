class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // O(1)
    push(value) {
        this.stack.push(value);

        if (
            this.minStack.length === 0 ||
            value <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(value);
        }
    }

    // O(1)
    pop() {
        if (this.stack.length === 0) {
            return null;
        }

        const removed = this.stack.pop();

        if (removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        return removed;
    }

    // O(1)
    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }

        return this.minStack[this.minStack.length - 1];
    }
}

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log("getMin() =", ms.getMin());

ms.pop();

console.log("getMin() =", ms.getMin());

ms.pop();

console.log("getMin() =", ms.getMin());