
class HashMapLinearProbing {

    constructor(capacity = 8) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity);

        this.TOMBSTONE = { deleted: true };
    }

    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.capacity;
    }

    loadFactor() {
        return this.size / this.capacity;
    }

    resize() {

        console.log("\n=== RESIZE OTOMATIS ===");

        const oldTable = this.table;

        this.capacity *= 2;
        this.table = new Array(this.capacity);
        this.size = 0;

        for (const item of oldTable) {

            if (
                item &&
                item !== this.TOMBSTONE
            ) {
                this.insert(item.key, item.value);
            }

        }
    }

    insert(key, value) {

        if (this.loadFactor() > 0.7) {
            this.resize();
        }

        let index = this.hash(key);

        // Linear Probing
        while (
            this.table[index] &&
            this.table[index] !== this.TOMBSTONE &&
            this.table[index].key !== key
        ) {
            index = (index + 1) % this.capacity;
        }

        if (
            !this.table[index] ||
            this.table[index] === this.TOMBSTONE
        ) {
            this.size++;
        }

        this.table[index] = { key, value };
    }

    // SEARCH
    get(key) {

        let index = this.hash(key);
        let start = index;

        while (this.table[index]) {

            if (
                this.table[index] !== this.TOMBSTONE &&
                this.table[index].key === key
            ) {
                return this.table[index].value;
            }

            index = (index + 1) % this.capacity;

            if (index === start) {
                break;
            }
        }

        return null;
    }

    // DELETE menggunakan Tombstone
    delete(key) {

        let index = this.hash(key);
        let start = index;

        while (this.table[index]) {

            if (
                this.table[index] !== this.TOMBSTONE &&
                this.table[index].key === key
            ) {
                this.table[index] = this.TOMBSTONE;
                this.size--;
                return true;
            }

            index = (index + 1) % this.capacity;

            if (index === start) {
                break;
            }
        }

        return false;
    }

    display() {

        console.log("\nIsi Hash Table:");

        for (let i = 0; i < this.capacity; i++) {

            if (this.table[i] === this.TOMBSTONE) {

                console.log(i + " => TERHAPUS");

            } else {

                console.log(i + " => ", this.table[i]);

            }
        }
    }
}

// PENGUJIAN PROGRAM

const hashMap = new HashMapLinearProbing();

console.log("=== INSERT DATA ===");

hashMap.insert("Ali", 90);
hashMap.insert("Budi", 85);
hashMap.insert("Cici", 95);
hashMap.insert("Dina", 88);
hashMap.insert("Eko", 75);
hashMap.display();

console.log("\n=== SEARCH ===");
console.log("Nilai Cici =", hashMap.get("Cici"));

console.log("\n=== DELETE ===");
hashMap.delete("Budi");
hashMap.display();

console.log("\n=== INSERT DATA BARU ===");
hashMap.insert("Fani", 80);
hashMap.insert("Gina", 92);
hashMap.insert("Hadi", 77);
hashMap.display();

console.log("\n=== PERBANDINGAN DENGAN CHAINING ===");
console.log("Linear Probing:");
console.log("- Collision ditangani dengan mencari slot kosong berikutnya.");
console.log("- Lebih hemat memori.");
console.log("- Performa menurun jika collision tinggi.");

console.log("\nChaining:");
console.log("- Collision ditangani menggunakan bucket/list.");
console.log("- Membutuhkan memori lebih besar.");
console.log("- Lebih stabil saat collision tinggi.");