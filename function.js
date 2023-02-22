// 1- Functions
// Fonksiyon tanımı : algoritmayı çalıştırma biçimi,
// belli bir amaç için tekrar tekrar yaptıracağımız işlemeri yapmak için kullanıyoruz.
// Fonksiyon örneği : kattle       / çamaşır makinesi
// Paramtre : su haznesi           / deterjan haznesi
// Argüman : içine koyduğumuz su   / deterjan - yumuşatıcı vs
// Default : boşsa durdurayım demeyip çalıştırması

const countries = ["ispanya", "mısır", "norveç", "macaristan"];

// 2-Parametresiz fonksiyon hep aynı ülkeyi ekleyecek
function addCountry1() {
  countries.push("türkiye");
}
addCountry1(); // fonksiyon çalıştırma
console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'macaristan', 'türkiye' ]

//3- parametre belirterek fonskiyon yazma işlemi parametre:newCountry
function addCountry2(newCountry) {
  countries.push(newCountry);
}

addCountry2("japonya");
addCountry2("almanya");
console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'macaristan', 'türkiye', 'japanya', 'almanya' ]

//4a - argüman boşdeğer içeriyorsa eklenmesin
//NOT: default değer verilerek de yapılabilir.

function addCountry3(newCountry) {
  if (newCountry) {
    countries.push(newCountry);
  }
}
addCountry3("yunanistan");
addCountry2();
console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'macaristan', 'türkiye','japonya', 'almanya' ,  'yunanistan' , undefined]

// 5 a- son 6 ülkeyi silmek ve s yeni bir ülke eklemek.
function addCountry4(newCountry) {
  if (newCountry) {
    countries.pop();
    countries.pop();
    countries.pop();
    countries.pop();
    countries.pop();
    countries.pop();
    countries.push(newCountry);
  }
}
addCountry4("hollanda");
console.log(countries); // [ 'ispanya', 'mısır', 'norveç', 'hollanda' ]

function changeLastCountry(newCountry) {
  if (newCountry) {
    countries.pop();
    countries.push(newCountry);
  }
}

changeLastCountry("portekiz");
console.log(countries); // [ 'ispanya', 'mısır', 'norveç', 'portekiz' ]

// // Function

// const students = [
//   "Guntac Bey", //0
//   "Ahmet Bilgin", //1
//   "Sefa Sarikaya", //2
//   "Senay Senturk", //3
//   "Ipek Gulsen Celik", //4
// ];

// // Function Declaration - Hoisted
// function addStudent() {
//   students.push("Emre Candemir");
// }
// console.log(students); // ['Guntac Bey', 'Ahmet Bilgin', 'Sefa Sarikaya' ,'Senay Senturk', 'Ipek Gulsen Celik']

// addStudent();
// console.log(students); // ['Guntac Bey', 'Ahmet Bilgin', 'Sefa Sarikaya' ,'Senay Senturk', 'Ipek Gulsen Celik', 'Emre Candemir']

// function addStudent(newStudent){
//     students.push(newStudent);
// }

// addStudent();

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
