class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log(' Index di luar batas!');
            return;
        }

        if (index === 0) {
            this.prepend(data);
            return;
        }

        if (index === this.size) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
    }

    delete(data) {
        if (!this.head) return false;

        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = this.head.next;
                    if (this.head) this.head.prev = null;
                    else this.tail = null;
                } else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    reverse() {
        if (!this.head) return;

        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    print() {
        if (!this.head) {
            console.log(' [List Kosong]');
            return;
        }

        let forwardResult = '';
        let currentForward = this.head;
        while (currentForward) {
            forwardResult += currentForward.next ? `[${currentForward.data}] ⇄ ` : `[${currentForward.data}]`;
            currentForward = currentForward.next;
        }
        console.log(' Dari Depan    :', forwardResult, `(size: ${this.size})`);

        let backwardResult = '';
        let currentBackward = this.tail;
        while (currentBackward) {
            backwardResult += currentBackward.prev ? `[${currentBackward.data}] ⇄ ` : `[${currentBackward.data}]`;
            currentBackward = currentBackward.prev;
        }
        console.log(' Dari Belakang : ', backwardResult);
    }
}

const dll = new DoublyLinkedList();

console.log('=== Uji Coba Tugas 1: Doubly Linked List ===');

console.log('\n=== Uji Append ===');
dll.append(10);
dll.append(20);
dll.append(30);
dll.print();

console.log('\n=== Uji Prepend ===');
dll.prepend(5);
dll.print();

console.log('\n=== Uji InsertAt di Indeks 2 ===');
dll.insertAt(15, 2);
dll.print();

console.log('\n=== Uji Delete Data 20 ===');
dll.delete(20);
dll.print();

console.log('\n=== Uji Reverse ===');
dll.reverse();
dll.print();