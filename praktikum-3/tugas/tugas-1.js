
const dataMahasiswa = [
    { nama: 'Dewi', nilai: 85 },
    { nama: 'Almas', nilai: 92 },
    { nama: 'Budi', nilai: 65 },
    { nama: 'Citra', nilai: 78 },
    { nama: 'Dedi', nilai: 45 },
    { nama: 'Eka', nilai: 55 }
];

function hitungStatistik(arrMahasiswa) {
    const totalMhs = arrMahasiswa.length;
    
    // Mencari rata-rata, tertinggi, dan terendah dalam satu kali jalan
    const stats = arrMahasiswa.reduce((acc, mhs) => {
        return {
            totalNilai: acc.totalNilai + mhs.nilai,
            tertinggi: mhs.nilai > acc.tertinggi ? mhs.nilai : acc.tertinggi,
            terendah: mhs.nilai < acc.terendah ? mhs.nilai : acc.terendah
        };
    }, { totalNilai: 0, tertinggi: -Infinity, terendah: Infinity });

    return {
        total: totalMhs,
        rataRata: (stats.totalNilai / totalMhs).toFixed(2),
        tertinggi: stats.tertinggi,
        terendah: stats.terendah
    };
}

function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade;
        if (mhs.nilai >= 85) grade = 'A';
        else if (mhs.nilai >= 75) grade = 'B';
        else if (mhs.nilai >= 60) grade = 'C';
        else if (mhs.nilai >= 45) grade = 'D';
        else grade = 'E';
        
        return { ...mhs, grade: grade };
    });
}

const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 60);
const dataDenganGrade = tambahGrade(dataMahasiswa);

console.log("=== LAPORAN SISTEM NILAI MAHASISWA ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata Nilai : ${statistik.rataRata}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

console.log("\n--- Daftar Mahasiswa & Grade ---");
dataDenganGrade.forEach((mhs, index) => {
    console.log(`${index + 1}. ${mhs.nama} - Nilai: ${mhs.nilai} (Grade: ${mhs.grade})`);
});

console.log("\n--- Mahasiswa yang Lulus (Nilai >= 60) ---");
mahasiswaLulus.forEach(mhs => {
    console.log(`- ${mhs.nama} (LULUS)`);
});