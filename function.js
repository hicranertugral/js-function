// // 1- Functions
// // Fonksiyon tanımı : algoritmayı çalıştırma biçimi,
// // belli bir amaç için tekrar tekrar yaptıracağımız işlemeri yapmak için kullanıyoruz.
// // Fonksiyon örneği : kattle       / çamaşır makinesi
// // Paramtre : su haznesi           / deterjan haznesi
// // Argüman : içine koyduğumuz su   / deterjan - yumuşatıcı vs
// // Default : boşsa durdurayım demeyip çalıştırması

// const countries = ["ispanya", "mısır", "norveç", "macaristan"];

// // 2-Parametresiz fonksiyon hep aynı ülkeyi ekleyecek
// function addCountry1() {
//   countries.push("türkiye");
// }
// addCountry1(); // fonksiyon çalıştırma
// console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'macaristan', 'türkiye' ]

// //3- parametre belirterek fonskiyon yazma işlemi parametre:newCountry
// function addCountry2(newCountry) {
//   countries.push(newCountry);
// }

// addCountry2("japonya");
// addCountry2("almanya");
// console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'macaristan', 'türkiye', 'japanya', 'almanya' ]

// //4a - argüman boşdeğer içeriyorsa eklenmesin
// //NOT: default değer verilerek de yapılabilir.

// function addCountry3(newCountry) {
//   if (newCountry) {
//     countries.push(newCountry);
//   }
// }
// addCountry3("yunanistan");
// addCountry2();
// console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'macaristan', 'türkiye','japonya', 'almanya' ,  'yunanistan' , undefined]

// // 5 a- son 6 ülkeyi silmek ve s yeni bir ülke eklemek.
// function addCountry4(newCountry) {
//   if (newCountry) {
//     countries.pop();
//     countries.pop();
//     countries.pop();
//     countries.pop();
//     countries.pop();
//     countries.pop();
//     countries.push(newCountry);
//   }
// }
// addCountry4("hollanda");
// console.log(countries); // [ 'ispanya', 'mısır', 'norveç', 'hollanda' ]

// function changeLastCountry1(newCountry) {
//   if (newCountry) {
//     countries.pop();
//     countries.push(newCountry);
//   }
// }

// changeLastCountry1("portekiz");
// console.log(countries); // [ 'ispanya', 'mısır', 'norveç', 'portekiz' ]

// //5 b -

// function addCountry5(newCountry) {
//   newCountry && countries.push(newCountry);
// }
// function changeLastCountry2(newCountry) {
//   if (newCountry) {
//     countries[countries.length - 1] = newCountry;
//   }
// }

// changeLastCountry2("abd");
// addCountry5("usa");
// console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'abd', 'usa' ]

// addCountry5();
// changeLastCountry2("ingiltere");
// console.log(countries); //[ 'ispanya', 'mısır', 'norveç', 'abd', 'ingiltere' ]

// //6 Defaut parametre - sen sona tanımlanır böylece vermeme imkanımız olur.
// // birden fazla default değer tanımlayacaksak en fazla default kullanılacak değer en sona gidiyor.

// function addCountry6(newCountry) {
//   newCountry && countries.push(newCountry);
// }
// function changeLastCountry3(newCountry = "non-country") {
//   countries[countries.length - 1] = newCountry;
// }
// addCountry6("mısır");
// changeLastCountry3();
// console.log(countries); // [ 'ispanya', 'mısır', 'norveç', 'abd', 'ingiltere', 'non-country' ]

// // 7 - string değeri kontrol eden fonksiyon
// function addCountry7(newCountry) {
//   if (typeof newCountry === "string") {
//     countries.push(newCountry);
//   } else {
//     console.log("lütfen geçerli bir ülke adı giriniz");
//   }
// }

// addCountry7("fransa"); // [ 'ispanya', 'mısır', 'norveç', 'abd', 'ingiltere', 'non-country', 'fransa' ]
// addCountry7(7); // lütfen geçerli bir ülke adı giriniz     [ 'ispanya', 'mısır', 'norveç', 'abd', 'ingiltere', 'non-country', 'fransa' ]
// console.log(countries);

// //8 a ürün bilgilerinden (isim fiyat ve stok değeri) girilmediğinde / tipi tutmadığında uyarı veren fonksiyon

// const furnitureList = [
//   "chair",
//   115.99,
//   true,
//   "seat",
//   123.99,
//   false,
//   "table",
//   52.99,
//   true,
//   "bookshelf",
//   75.99,
//   true,
//   "wardrobe",
//   217.87,
//   false,
// ];

// function addFurnitureList1(name, price, onStock) {
//   if (
//     typeof name === "string" &&
//     typeof price === "number" &&
//     typeof onStock === "boolean"
//   ) {
//     furnitureList.push(name);
//     furnitureList.push(price);
//     furnitureList.push(onStock);
//   } else {
//     if (typeof name !== "string") {
//       console.log("Mobilya adını giriniz");
//     }
//     if (typeof price !== "number") {
//       console.log("Fiyatı giriniz.");
//     }
//     if (typeof onStock !== "boolean") {
//       console.log("stok değeri giriniz");
//     }
//   }
// }

// addFurnitureList1("desk", 78.13, true);

// console.log(furnitureList);
// /* Çıktısı :
// [
//     'chair', 115.99, true,       
//     'seat', 123.99, false,
//     'table', 52.99,true,      
//     'bookshelf', 75.99, true,
//     'wardrobe', 217.87,false,      
//     'desk', 78.13,  true
//   ] */

// // 8 b stok değerini default olarak atamak
// function addFurnitureList2(name, price, onStock = true) {
//   if (typeof name === "string" && typeof price === "number") {
//     furnitureList.push(name);
//     furnitureList.push(price);
//     furnitureList.push(onStock);
//   } else {
//     typeof name !== "string" && console.log("isim giriniz / kontrol ediniz");
//     typeof price !== "number" && console.log("fiyat firiniz / kontrol ediniz");
//     typeof onStock !== "boolean" &&
//       console.log("Stok giriniz / kontrol ediniz.");
//   }
// }

// addFurnitureList2("sofa");
// /* fiyat firiniz / kontrol ediniz
// [
//   'chair',    115.99,
//   true,       'seat',
//   123.99,     false,
//   'table',    52.99,
//   true,       'bookshelf',
//   75.99,      true,
//   'wardrobe', 217.87,
//   false,      'desk',
//   78.13,      true
// ] */
// console.log(furnitureList);

//9 -
function tumElemanlariTopla() {
  var total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(tumElemanlariTopla(10,30,50,80)); //170

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
