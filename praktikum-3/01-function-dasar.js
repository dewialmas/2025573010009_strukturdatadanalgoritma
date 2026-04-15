function sapa() {
console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa(); 
sapa(); 

function sapaNama(nama) {
console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Dewi');
sapaNama('Dewi');
function tambah(angka1, angka2) {
const hasil = angka1 + angka2;
return hasil; 
}

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13)); 

function hitung(nilai, pengali = 2) {
return nilai * pengali;
}
console.log(hitung(5)); 
console.log(hitung(5, 3)); 

const pesanGlobal = 'Saya ada di mana saja'; 

function cekScope() {
const pesanLokal = 'Saya hanya ada di dalam function ini'; 
console.log(pesanGlobal); 
console.log(pesanLokal); 
}
cekScope();
console.log(pesanGlobal);

console.log("\n=== LATIHAN 1 ====");

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) {
        console.log('Error: tidak bisa membagi dengan nol');
        return null;
    }
    return a / b;
}

function tambah(a, b) {
    return a + b;
}

function kalkulator(a, operator, b) {
    let hasil;
    switch (operator) {
        case '+':
            hasil = tambah(a, b);
            break;
        case '-':
            hasil = kurang(a, b);
            break;
        case '*':
            hasil = kali(a, b);
            break;
        case '/':
            hasil = bagi(a, b);
            break;
        default:
            return "Operator tidak dikenal";
    }
    return hasil;
}

console.log("--- Uji Coba Kalkulator ---");

console.log(`10 + 5 = ${kalkulator(10, '+', 5)}`); 
console.log(`10 - 5 = ${kalkulator(10, '-', 5)}`);  
console.log(`10 * 5 = ${kalkulator(10, '*', 5)}`);  
console.log(`10 / 2 = ${kalkulator(10, '/', 2)}`);  
console.log(`10 / 0 = ${kalkulator(10, '/', 0)}`);  
