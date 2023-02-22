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

console.log(tumElemanlariTopla(10, 30, 50, 80)); //170

// 10 -

function sum1(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    typeof a !== "number" &&
      console.log(`a için girdiğin ${a} değeri kontrol etmelisin`);
    typeof b !== "number" &&
      console.log(`b için girdiğin ${b} değeri kontrol etmelisin`);
  }
}

sum1(180, "SAYI");

// 11 -

function sum2() {
  if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
    console.log(arguments[0] + arguments[1]);
  } else {
    typeof arguments[0] !== "number" &&
      console.log("ilk değeri kontrol ediniz.");
    typeof arguments[1] !== "number" &&
      console.log("son değeri kontrol ediniz");
  }
}
sum2(30, 80);

// 12 -

function msj1(text) {
  if (text === "DUKKD") {
    console.log("Devler Ülkesindeki Karincalari Koruma Derneği");
  } else {
    console.log("Veriyi kontrol ediniz...");
  }
}

msj1("DUKKD");

// 13 -
function coffeeMachine1(groundCoffe, water, filter) {
  console.log("Kahve demleniyor...");
  const brewedCoffee = `${water}ml coffee has been brewed with ${groundCoffe}gr ground coffee.`;
  return brewedCoffee;
  console.log("retunden sonra çalıimaz");
}
// const result = coffeeMachine(50, 500, true)
console.log(coffeeMachine1(50, 500, true));

console.log("-------------------------------");
// 14 - function decleration - hoisted fonksiyonu direkt olarak değişene atabiliyoruz.
function coffeeMachine2(groundCoffe, water, filter) {
  console.log("Kahve demleniyor...");
  const brewedCoffee = `${water}ml coffee has been brewed with ${groundCoffe}gr ground coffee `;
  return brewedCoffee;
  console.log("returnden sonra çalışmıyor...");
}
const result1 = coffeeMachine1(25, 250, true);
console.log(result1);
const func1 = coffeeMachine1;
console.log(func1(25, 500));

/*
kod yukarıda tanımlanır. Aşağıya doğru okunur.
hoisting kod komple jsİn runtime'si tarafından yukarı taşınıyor. 
function declarationyukarı taşıma işlemi yapılabiliyor
function expression - değişkene atanıyor yukarı taşınmıyor no hoisted
arrow function this çalışmıyor no hoisting
*/


//16 arrow funtion not hoisted
const getSquareExp = (num) => {
    return num * num
}
console.log(getSquareExp(10))

//function decleration = > hoisteddir = > arrow function ile kullanımı aynıdır kullanım açısından arrow function tercih edilir. 
function getSquareArrow(num) {
    return num*num
}
console.log(getSquareArrow (5))


