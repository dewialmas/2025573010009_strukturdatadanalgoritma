
function pangkat(basis, eksponen) {
    
    if (eksponen === 0) {
        return 1;
    }

    return basis * pangkat(basis, eksponen - 1);
}

function balikString(str) {
    if (str.length <= 1) {
        return str;
    }

    let karakterTerakhir = str[str.length - 1];
    let sisaString = str.slice(0, str.length - 1);
    
    return karakterTerakhir + balikString(sisaString);
}

console.log("=== UJI COBA REKURSIF ===");

console.log("--- Fungsi Pangkat ---");
console.log(`2 pangkat 3 = ${pangkat(2, 3)}`); // Hasil: 8
console.log(`5 pangkat 2 = ${pangkat(5, 2)}`); // Hasil: 25
console.log(`10 pangkat 0 = ${pangkat(10, 0)}`); // Hasil: 1

console.log("\n--- Fungsi Balik String ---");
console.log(`'halo' dibalik menjadi: '${balikString('halo')}'`); // Hasil: olah
console.log(`'javascript' dibalik menjadi: '${balikString('javascript')}'`);
console.log(`'kodok' dibalik menjadi: '${balikString('kodok')}'`);