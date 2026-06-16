// SOAL 1
// Big O: O(n)

function subArrayJumlahK(arr, k) {

    const prefixMap = new Map();

    prefixMap.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of arr) {

        sum += num;

        if (prefixMap.has(sum - k)) {
            count += prefixMap.get(sum - k);
        }

        prefixMap.set(
            sum,
            (prefixMap.get(sum) || 0) + 1
        );
    }

    return count;
}

// SOAL 2
// Big O: O(n)

function karakterPertamaUnik(s) {

    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {

        if (map.get(s[i]) === 1) {
            return i;
        }

    }

    return -1;
}

// SOAL 3
// Big O: O(n + m log m)

function topKFrequent(arr, k) {

    const map = new Map();

    for (let num of arr) {

        map.set(
            num,
            (map.get(num) || 0) + 1
        );

    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(item => item[0]);
}

console.log("========== SOAL 1 ==========");

const hasil1 = subArrayJumlahK([1, 1, 1], 2);

console.log("Array :", [1, 1, 1]);
console.log("k     :", 2);
console.log("Hasil :", hasil1);

console.log("\n========== SOAL 2 ==========");

const hasil2 = karakterPertamaUnik("leetcode");

console.log("String :", "leetcode");
console.log("Hasil  :", hasil2);

console.log("\n========== SOAL 3 ==========");

const hasil3 = topKFrequent(
    [1, 1, 1, 2, 2, 3],
    2
);

console.log("Array :", [1, 1, 1, 2, 2, 3]);
console.log("k     :", 2);
console.log("Hasil :", hasil3);

console.log("\n========== ANALISIS BIG O ==========");

console.log("Soal 1");
console.log("Menggunakan Prefix Sum + HashMap");
console.log("Big O = O(n)");
console.log("Naif   = O(n²)");

console.log("\nSoal 2");
console.log("Menggunakan Map");
console.log("Big O = O(n)");
console.log("Naif   = O(n²)");

console.log("\nSoal 3");
console.log("Menggunakan Map + Sorting");
console.log("Big O = O(n + m log m)");
console.log("Naif   = O(n²)");