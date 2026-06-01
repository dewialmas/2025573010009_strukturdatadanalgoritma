class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function palindromLL(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    
    let kiri = 0;
    let kanan = arr.length - 1;
    while (kiri < kanan) {
        if (arr[kiri] !== arr[kanan]) {
            return false;
        }
        kiri++;
        kanan--;
    }
    return true;
}

function hapusNDariAkhir(head, n) {
    const dummy = new Node(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        if (!fast) return head;
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    if (slow.next) {
        slow.next = slow.next.next;
    }
    
    return dummy.next;
}

function tengahLinkedList(head) {
    if (!head) return null;
    
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function buatList(arr) {
    if (arr.length === 0) return null;
    const head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

function printList(head) {
    if (!head) {
        console.log(' [List Kosong]');
        return;
    }
    let result = '';
    let current = head;
    while (current) {
        result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
        current = current.next;
    }
    console.log(' ', result);
}

console.log('Uji Fungsi: palindromLL');

const p1 = buatList([1, 2, 3, 2, 1]);
console.log('Kasus 1: [1, 2, 3, 2, 1]');
console.log('Apakah palindrom?', palindromLL(p1));

const p2 = buatList([1, 2, 2, 1]);
console.log('Kasus 2: [1, 2, 2, 1]');
console.log('Apakah palindrom?', palindromLL(p2));

const p3 = buatList([1, 2, 3, 4]);
console.log('Kasus 3: [1, 2, 3, 4]');
console.log('Apakah palindrom?', palindromLL(p3));


console.log('\nUji Fungsi: hapusNDariAkhir');

let h1 = buatList([1, 2, 3, 4, 5]);
console.log('Kasus 1: [1, 2, 3, 4, 5] dihapus ke-2 dari akhir');
h1 = hapusNDariAkhir(h1, 2);
printList(h1);

let h2 = buatList([10, 20, 30]);
console.log('Kasus 2: [10, 20, 30] dihapus ke-1 dari akhir');
h2 = hapusNDariAkhir(h2, 1);
printList(h2);

let h3 = buatList([100, 200, 300]);
console.log('Kasus 3: [100, 200, 300] dihapus ke-3 dari akhir');
h3 = hapusNDariAkhir(h3, 3);
printList(h3);


console.log('\nUji Fungsi: tengahLinkedList');

const t1 = buatList([1, 2, 3, 4, 5]);
console.log('Kasus 1: Jumlah Ganjil [1, 2, 3, 4, 5]');
const mid1 = tengahLinkedList(t1);
console.log('Node Tengah:', mid1 ? mid1.data : null);

const t2 = buatList([10, 20, 30, 40, 50, 60]);
console.log('Kasus 2: Jumlah Genap [10, 20, 30, 40, 50, 60]');
const mid2 = tengahLinkedList(t2);
console.log('Node Tengah (kedua):', mid2 ? mid2.data : null);

const t3 = buatList([7, 8]);
console.log('Kasus 3: Hanya Dua Node [7, 8]');
const mid3 = tengahLinkedList(t3);
console.log('Node Tengah:', mid3 ? mid3.data : null);