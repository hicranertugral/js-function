let sayName = function(name) {
  console.log(`My name is ${name}`);
} 

// module.exports = sayName

// //function expression 
// let sayAge = function(age) {
//   console.log(`benim yaşım ${age}`);
// }

// module.exports = {
//   sayName : sayName,
//   sayAge : sayAge
// }

// export ediyoruz 
// import kısmı node çekirdeğinin içindeki js den geliyor. tekrardan tanımlamamıza gerek yok.
// js çalışma ortamı oluşuruyor bize Node.js

export default sayName