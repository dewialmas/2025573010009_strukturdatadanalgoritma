class Kendaraan { 
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.kecepatanSaatIni = 0;
    }

    akselerasi(tambahan) { 
        this.kecepatanSaatIni += tambahan; 
        console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);
    }

    rem() {
        this.kecepatanSaatIni = 0;
        console.log(`${this.merk} ${this.model}: berhenti.`); 
    }

    info() {
        return `${this.tahun} ${this.merk} ${this.model}`;
    }
}

class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahpintu) {
        super(merk, model, tahun);
        this.jumlahpintu = jumlahpintu; 
    }

    bunyikanKlakson() {
        console.log(`${this.merk}: Beep beep`);
    }

    info() {
        const infoparent = super.info();
        return `${infoparent} (${this.jumlahpintu} pintu)`; 
    }
}

class Motor extends Kendaraan {
    constructor(merk, model, tahun, jenisMotor) {
        super(merk, model, tahun);
        this.jenisMotor = jenisMotor;
    }

    wheelie() {
        if (this.kecepatanSaatIni > 50) {
            console.log(`${this.merk}: Wheelie!`);
        } else {
            console.log('Kecepatan terlalu rendah untuk wheelie.');
        }
    }

    info() {
        return `${super.info()} [${this.jenisMotor}]`;
    }
}


const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport');

console.log('=== Info Kendaraan ===');
console.log(mobil.info());
console.log(motor.info());

console.log('\n=== Aksi ===');
mobil.akselerasi(60);
mobil.bunyikanKlakson();

motor.akselerasi(80);
motor.wheelie();
motor.rem();

console.log('\n=== instanceof ===');
console.log('mobil instanceof Mobil :', mobil instanceof Mobil);
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan);
console.log('motor instanceof Mobil :', motor instanceof Mobil);

console.log('\n=== Polymorphism ===');
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(k => console.log(k.info()));

console.log('\n===Latihan 4===');
class Hewan {
    constructor(nama, suara) {
        this.nama = nama;
        this.suara = suara;
    }

    bersuara() {
        console.log(`${this.nama} berkata: ${this.suara}`);
    }

    info() {
        console.log(`Ini adalah hewan bernama ${this.nama}`);
    }
}

class Anjing extends Hewan {
    fetch() {
        console.log(`${this.nama} mengambil bola!`);
    }

    info() {
        super.info();
        console.log(`(jenis: anjing)`);
    }
}
class Kucing extends Hewan {
    cakarSofa() {
        console.log(`${this.nama} mencakar sofa!`);
    }

    bersuara() {
        super.bersuara();
        console.log(`Purrr...`);
    }
}

const anjing1 = new Anjing('Rex', 'Woof');
const anjing2 = new Anjing('Buddy', 'Guk Guk');
const kucing1 = new Kucing('Luna', 'Meong');
const kucing2 = new Kucing('Milo', 'Miau');

const semuaHewan = [anjing1, anjing2, kucing1, kucing2];

semuaHewan.forEach((hewan) => {
    hewan.info();
    hewan.bersuara();
});