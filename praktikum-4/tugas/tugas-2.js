class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();
    
    for (let i = 0; i < ekspresi.length; i++) {
        let karakter = ekspresi[i];

        if (karakter === '(' || karakter === '[' || karakter === '{') {
            stack.push(karakter);
        } 
        else if (karakter === ')' || karakter === ']' || karakter === '}') {
            if (stack.isEmpty()) {
                return false;
            }
            
            let itemTerakhir = stack.pop();
            
            if (
                (karakter === ')' && itemTerakhir !== '(') ||
                (karakter === ']' && itemTerakhir !== '[') ||
                (karakter === '}' && itemTerakhir !== '{')
            ) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

const daftarUji = [
    '(2 + 3) * (4 - 1)',
    '((a + b)',
    ')(',
    '([()])',
    '{[()]}',
    '((1+2)*3'
];

console.log('=== HASIL PENGECEKAN TANDA KURUNG ===');
daftarUji.forEach(teks => {
    const hasil = cekKurungSeimbang(teks);
    console.log(`'${teks}' -> Seimbang: ${hasil}`);
});