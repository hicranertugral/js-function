
// 1- Functions
// Fonksiyon tanımı : algoritmayı çalıştırma biçimi,
// Fonksiyon örneği : kattle       / çamaşır makinesi
// Paramtre : su haznesi           / deterjan haznesi
// Argüman : içine koyduğumuz su   / deterjan - yumuşatıcı vs
// Default : boşsa durdurayım demeyip çalıştırması 

const countries = [
    "ispanya",
    "mısır",
    "norveç",
    "macaristan
]


// 2-Parametresiz fonksiyon hep aynı ülkeyi ekleyecek
function addCountry () {
    countries.push("türkiye")
}
addCountry() // fonksiyon çalıştırma
console.log(countries)














































// Function

const students = [
  "Guntac Bey", //0
  "Ahmet Bilgin", //1
  "Sefa Sarikaya", //2
  "Senay Senturk", //3
  "Ipek Gulsen Celik", //4
];

// Function Declaration - Hoisted
function addStudent() {
  students.push("Emre Candemir");
}
console.log(students); // ['Guntac Bey', 'Ahmet Bilgin', 'Sefa Sarikaya' ,'Senay Senturk', 'Ipek Gulsen Celik']

addStudent();
console.log(students); // ['Guntac Bey', 'Ahmet Bilgin', 'Sefa Sarikaya' ,'Senay Senturk', 'Ipek Gulsen Celik', 'Emre Candemir']

function addStudent(newStudent){
    students.push(newStudent);
}

addStudent();













































// const saat = 20

// if(saat <= 9) {
//     console.log("günaydin")
// } else if (saat <= 19){
//     console.log("iyi öğlenler")
// }else {
//     console.log("iyi geceler")
// }

// const not = 20

// if(not >= 50){
//     console.log("geçti")
// }else {
//     console.log("kaldı")
// }

// //ternary opertor
// console.log((not >= 50) ?"geçti" : "kaldı")
