const mahasiswa = {
nama : 'Budi Santoso',
umur : 20,
jurusan : 'Teknik Informatika',
ipk : 3.75,
aktif : true,
};

console.log('=== Akses Property ===');
console.log('Nama :', mahasiswa.nama); 
console.log('Jurusan :', mahasiswa['jurusan']); 

const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]); 

mahasiswa.email = 'budi@email.com'; 
mahasiswa.umur = 21; 
console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
nama : 'Dr. Ahmad Fauzi',
mataKuliah : 'Struktur Data',
pengalaman : 10,

perkenalan() {
return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
},

statusSenior() {
if (this.pengalaman >= 10) {
return `${this.nama} adalah dosen senior.`;
}

return `${this.nama} adalah dosen junior.`;
}
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());

console.log(dosen.statusSenior());
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
if (typeof dosen[key] !== 'function') { 
console.log(` ${key}: ${dosen[key]}`);
}
}

console.log('Keys :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));

console.log('\n===Latihan 1===');

const buku = {
    judul: 'Laskar Pelangi',
    pengarang: 'Andrea Hirata',
    tahunTerbit: 2005,
    harga: 80000,
    tersedia: true,

    
    info() {
        return `Buku ${this.judul} karya ${this.pengarang} terbit tahun ${this.tahunTerbit}`;
    },

    
    diskon(persen) {
        return this.harga * (1 - persen / 100);
    }
};


const koleksiBuku = [
    { judul: 'Bumi', pengarang: 'Tere Liye', tahunTerbit: 2014, harga: 95000, tersedia: true },
    { judul: 'Filosofi Teras', pengarang: 'Henry Manampiring', tahunTerbit: 2018, harga: 85000, tersedia: false },
    { judul: 'Negeri 5 Menara', pengarang: 'Ahmad Fuadi', tahunTerbit: 2009, harga: 75000, tersedia: true }
];

koleksiBuku.forEach(item => {
    console.log(`${item.judul} - ${item.pengarang}`);
});

const bukuTersedia = koleksiBuku.filter(item => item.tersedia === true);
console.log(bukuTersedia);