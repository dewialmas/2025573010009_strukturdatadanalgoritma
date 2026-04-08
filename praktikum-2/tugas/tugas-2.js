// Tugas 2: Kalkulator BMI (Body Mass Index)
const beratBadan = 68; 
const tinggiBadan = 1.72; 

const bmi = beratBadan / (tinggiBadan * tinggiBadan);

console.log("Berat: " + beratBadan + " kg | Tinggi: " + tinggiBadan + " m | BMI: " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Kategori: Kurus (Underweight)");
} else if (bmi >= 18.5 && bmi <= 24.9) {

    console.log("Kategori: Normal (Ideal)");
} else if (bmi >= 25.0 && bmi <= 29.9) {

    console.log("Kategori: Kelebihan Berat Badan (Overweight)");
} else {
    console.log("Kategori: Obesitas (Obese)");
}
