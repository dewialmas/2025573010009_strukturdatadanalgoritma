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

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; 
        this.size++; 
    }

    print() {
        if (!this.head) { console.log(' [Stack Kosong]'); return; }
        let result = '';
        let current = this.head;
        while (current) {
            result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
            current = current.next;
        }
        console.log(' Top →', result);
    }
}

class Stack {
    constructor() {
        this.storage = new LinkedList();
    }

    push(data) {
        this.storage.prepend(data);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedData = this.storage.head.data;
        this.storage.head = this.storage.head.next;
        this.storage.size--;
        return poppedData;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.storage.head.data;
    }

    isEmpty() {
        return this.storage.head === null;
    }

    size() {
        return this.storage.size;
    }

    print() {
        this.storage.print();
    }
}

const historyStack = new Stack();
const listAksi = [
    'Ketik kata pertama',
    'Ketik kata kedua',
    'Tambahkan gambar',
    'Ubah warna font'
];

console.log('=== Latihan 2: Implementasi Stack ===');
console.log('\n=== Menjalankan Aksi (Push) ===');
listAksi.forEach(aksi => {
    console.log(` Menjalankan aksi: "${aksi}"`);
    historyStack.push(aksi);
});

console.log('\n=== Status Stack Saat Ini ===');
historyStack.print();
console.log(' Total aksi tersimpan:', historyStack.size());
console.log(' Aksi teratas saat ini (Peek):', historyStack.peek());

console.log('\n=== Simulasi UNDO Pertama ===');
const undo1 = historyStack.pop();
console.log(` Melakukan Undo untuk aksi terakhir: "${undo1}"`);
console.log(' Sisa stack setelah Undo:');
historyStack.print();

console.log('\n=== Simulasi UNDO Kedua ===');
const undo2 = historyStack.pop();
console.log(` Melakukan Undo lagi untuk aksi: "${undo2}"`);
console.log(' Sisa stack setelah Undo kedua:');
historyStack.print();

console.log('\n=== Status Akhir Stack ===');
console.log(' Apakah stack kosong?', historyStack.isEmpty());
console.log(' Jumlah aksi tersisa:', historyStack.size());