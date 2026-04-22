class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        console.log(`[ID: ${this.id}] ${this.nama} - Rp${this.harga} (Stok: ${this.stok})`);
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (this.stok >= jumlah) {
            this.stok -= jumlah;
            console.log(`Berhasil menjual ${jumlah} ${this.nama}.`);
        } else {
            console.log(`Gagal jual ${this.nama}: Stok tidak mencukupi.`);
        }
    }
}

class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        super.info();
        console.log(`Detail Digital: ${this.ukuranFile}MB, Format: ${this.formatFile}`);
    }

    download() {
        console.log(`Mengunduh ${this.nama} dalam format ${this.formatFile}...`);
    }

    jual(jumlah) {
        console.log(`Lisensi digital ${this.nama} berhasil terjual.`);
    }
}

class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        super.info();
        console.log(`Pengiriman: ${this.beratGram}g, Dimensi: ${this.dimensi}`);
    }

    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        const ongkir = beratKg * tarifPerKg;
        console.log(`Estimasi Ongkir untuk ${this.nama}: Rp${ongkir}`);
    }
}

const p1 = new ProdukDigital(101, 'E-Book JS', 50000, 999, 15, 'PDF');
const p2 = new ProdukDigital(102, 'Course React', 250000, 999, 500, 'MP4');
const p3 = new ProdukFisik(201, 'Keyboard Mechanical', 450000, 10, 800, '35x15x4cm');
const p4 = new ProdukFisik(202, 'Mouse Gaming', 200000, 0, 150, '12x6x4cm');

const daftarProduk = [p1, p2, p3, p4];

console.log('=== (a) Semua Info Produk ===');
daftarProduk.forEach(p => p.info());

console.log('\n=== (b) Produk yang Tersedia ===');
const tersedia = daftarProduk.filter(p => p.tersedia());
tersedia.forEach(p => console.log(`- ${p.nama} (Tersedia)`));

console.log('\n=== (c) Array Nama Produk Saja ===');
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);

console.log('\n=== (d) Uji Coba Transaksi & Ongkir ===');
p3.hitungOngkir(10000);
p1.jual(1);
p3.jual(2);
console.log(`Stok terbaru ${p3.nama}: ${p3.stok}`);