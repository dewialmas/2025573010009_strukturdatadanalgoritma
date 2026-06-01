class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
        this.size++; 
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; 
        this.size++; 
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log(' Index di luar batas!'); return;
        }
        if (index === 0) { this.prepend(data); return; }
        
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) current = current.next;
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    delete(data) {
        if (!this.head) return false;
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next; 
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    search(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    print() {
        if (!this.head) { console.log(' [List kosong]'); return; }
        let result = '';
        let current = this.head;
        while (current) {
            result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
            current = current.next;
        }
        console.log(' ', result, ` (size: ${this.size})`);
    }

    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current; 
            current = next;
        }
        this.head = prev;
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current) { arr.push(current.data); current = current.next; }
        return arr;
    }

    getAt(index) {
        if (index < 0 || index >= this.size || this.head === null) {
            return null;
        }
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current.data;
    }

    deleteAt(index) {
        if (index < 0 || index >= this.size || this.head === null) {
            return null;
        }
        
        let deletedData;
        if (index === 0) {
            deletedData = this.head.data;
            this.head = this.head.next;
        } else {
            let current = this.head;
            let prev = null;
            let count = 0;
            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            deletedData = current.data;
            prev.next = current.next;
        }
        this.size--;
        return deletedData;
    }

    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    isEmpty() {
        return this.head === null;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }
}

const ll = new LinkedList();
console.log('=== Append ===');
ll.append(10); ll.append(20); ll.append(30); ll.append(40);
ll.print();

console.log('\n=== Prepend ===');
ll.prepend(5);
ll.print();

console.log('\n=== Insert di indeks 2 ===');
ll.insertAt(15, 2);
ll.print();

console.log('\n=== Search ===');
console.log(' Indeks nilai 20:', ll.search(20));
console.log(' Indeks nilai 99:', ll.search(99));

console.log('\n=== Delete 20 ===');
ll.delete(20);
ll.print();

console.log('\n=== Reverse ===');
ll.reverse();
ll.print();

console.log('\n=== Latihan 1 ===');
console.log(' Apakah list kosong?', ll.isEmpty()); 
console.log(' Data pada indeks 1:', ll.getAt(1)); 
console.log(' Indeks dari data 30:', ll.indexOf(30)); 

console.log(' Menghapus data pada indeks 1:', ll.deleteAt(1)); 
console.log(' List setelah data indeks 1 dihapus:');
ll.print(); 

console.log(' Mengosongkan seluruh list...');
ll.clear();
console.log(' Apakah list kosong setelah di-clear?', ll.isEmpty()); 
ll.print();