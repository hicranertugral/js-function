// FONKSIYONLAR: belirli bir işlevi / görevi olan kod yapılarıdır. 

 // Function Declaration // Statement // hoisted
 
 console.log(squareDec(5))
 
 function squareDec(num) { // Parametre
    return (num * num);
}



function coffeeMachine_dec(groundCoffee, water) {
    console.log("Kahve demleniyor...");
    const brewedCoffee = `${water}ml kahve ${groundCoffee}gr kahve içerir`;
    return brewedCoffee;
    console.log("returnden sonra");
}
console.log(coffeeMachine_dec(50, 500, true))

const result_dec = coffeeMachine_dec(50, 500);
console.log(result_dec);

/*------------------------------------ */

// parametre : programı yazarken kullandığımız değişkenlere parametre diyoruz
// argüman : fonskiyonu çalıştırırken kullandığımız değişkenlere argüman diyoruz. 

//**** */ Function Expression : bir değişkene atayarak yapılma işlemi
// burada function ismi opsiyoneldir ve genelde kullanılmaz.


const coffeeMachine_exp = function coffeeMachine_exp(groundCoffee, water) {
    console.log("Kahve demleniyor...");
    const brewedCoffee = `${water}ml demlenmiş kahve ${groundCoffee}gr kahve içerir`;
    return brewedCoffee;
}
console.log(coffeeMachine_exp(60, 600))


const squareExp = function /*square*/(num) {
    return(num*num)
}
console.log(squareExp(10))



// Arrow function


const squareArrow1 = (num) => {return console.log((num*num))}
squareArrow1(2)

const squareArrow2 = num => console.log((num*num))
squareArrow2(3)

const coffeeMachine_arrow = (groundCoffee ,water) =>{
    const brewedCoffee = `${water}ml demlenmiş kahve ${groundCoffee}gr kahve içerir.`
    return brewedCoffee
}

console.log(coffeeMachine_arrow(100,10))