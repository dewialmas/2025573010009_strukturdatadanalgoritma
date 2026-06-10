class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas;
        this.waktuDaftar = waktuDaftar;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        const nodeBaru = new Node(data);

        if (this.rear === null) {
            this.front = nodeBaru;
            this.rear = nodeBaru;
        } else {
            this.rear.next = nodeBaru;
            this.rear = nodeBaru;
        }
    }

    dequeue() {
        if (this.front === null) {
            return null;
        }

        const data = this.front.data;
        this.front = this.front.next;

        if (this.front === null) {
            this.rear = null;
        }

        return data;
    }

    isEmpty() {
        return this.front === null;
    }

    tampilkan() {
        let current = this.front;

        while (current !== null) {
            console.log(
                `ID: ${current.data.id}, Nama: ${current.data.nama}, Prioritas: ${current.data.prioritas}, Waktu Daftar: ${current.data.waktuDaftar}`
            );
            current = current.next;
        }
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }

    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.enqueue(pasien);
        } else {
            this.antrianBiasa.enqueue(pasien);
        }
    }

    layani() {
        let pasien;

        if (!this.antrianDarurat.isEmpty()) {
            pasien = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasien = this.antrianBiasa.dequeue();
        } else {
            console.log("Tidak ada pasien dalam antrian.");
            return;
        }

        console.log(
            `Melayani Pasien -> ID: ${pasien.id}, Nama: ${pasien.nama}, Prioritas: ${pasien.prioritas}`
        );
    }

    tampilkanAntrian() {
        console.log("\n=== ANTRIAN DARURAT ===");

        if (this.antrianDarurat.isEmpty()) {
            console.log("Kosong");
        } else {
            this.antrianDarurat.tampilkan();
        }

        console.log("\n=== ANTRIAN BIASA ===");

        if (this.antrianBiasa.isEmpty()) {
            console.log("Kosong");
        } else {
            this.antrianBiasa.tampilkan();
        }
    }
}

const rs = new AntrianRS();

rs.daftar(new Pasien(1, "Andi", "darurat", "08:00"));
rs.daftar(new Pasien(2, "Budi", "biasa", "08:05"));
rs.daftar(new Pasien(3, "Citra", "darurat", "08:10"));
rs.daftar(new Pasien(4, "Dina", "biasa", "08:15"));
rs.daftar(new Pasien(5, "Eko", "biasa", "08:20"));
rs.daftar(new Pasien(6, "Fani", "darurat", "08:25"));
rs.daftar(new Pasien(7, "Gina", "biasa", "08:30"));
rs.daftar(new Pasien(8, "Hadi", "darurat", "08:35"));
rs.daftar(new Pasien(9, "Indra", "biasa", "08:40"));
rs.daftar(new Pasien(10, "Joko", "biasa", "08:45"));

console.log("=== STATUS ANTRIAN AWAL ===");
rs.tampilkanAntrian();

console.log("\n=== PROSES PELAYANAN ===");

while (
    !rs.antrianDarurat.isEmpty() ||
    !rs.antrianBiasa.isEmpty()
) {
    rs.layani();
}

console.log("\n=== STATUS ANTRIAN SETELAH PELAYANAN ===");
rs.tampilkanAntrian();

console.log("\nSEMUA 10 PASIEN TELAH DILAYANI.");