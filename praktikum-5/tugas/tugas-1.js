
// FUNGSI A: INTERSECTION

// O(n^2) | Space: O(n)
function intersectionN2(arr1, arr2) {
    const hasil = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !hasil.includes(arr1[i])) {
                hasil.push(arr1[i]);
            }
        }
    }
    return hasil;
}

// O(n) | Space: O(n)
function intersectionN(arr1, arr2) {
    const set2 = new Set(arr2);
    const hasil = [];

    for (let i = 0; i < arr1.length; i++) {
        if (set2.has(arr1[i]) && !hasil.includes(arr1[i])) {
            hasil.push(arr1[i]);
        }
    }
    return hasil;
}

// FUNGSI B: ANAGRAM

// Time: O(n log n) | Space: O(n)
function kelompokAnagram(arr) {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i].split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(arr[i]);
    }

    return Object.values(map);
}


// FUNGSI C: JUMLAH KUADRAT

// O(n^3) | Space: O(1)
function adaJumlahKuadratN3(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// O(n log n) | Space: O(n)
function adaJumlahKuadrat(arr) {
    const set = new Set(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const jumlah = arr[i] + arr[j];
            if (set.has(jumlah * jumlah)) {
                return true;
            }
        }
    }
    return false;
}


// TEST DATA BESAR

const arr1 = Array.from({ length: 5000 }, (_, i) => i);
const arr2 = Array.from({ length: 5000 }, (_, i) => i + 2500);

const angka = Array.from({ length: 1000 }, (_, i) => i + 1);

// PENGUKURAN WAKTU

console.log("=== Fungsi A ===");

console.time("Intersection O(n^2)");
intersectionN2(arr1, arr2);
console.timeEnd("Intersection O(n^2)");

console.time("Intersection O(n)");
intersectionN(arr1, arr2);
console.timeEnd("Intersection O(n)");


console.log("\n=== Fungsi B ===");

const words = ['eat','tea','tan','ate','nat','bat'];

console.time("Anagram");
console.log(kelompokAnagram(words));
console.timeEnd("Anagram");


console.log("\n=== Fungsi C ===");

console.time("Kuadrat O(n^3)");
adaJumlahKuadratN3(angka);
console.timeEnd("Kuadrat O(n^3)");

console.time("Kuadrat O(n log n)");
adaJumlahKuadrat(angka);
console.timeEnd("Kuadrat O(n log n)");