// buradaki ismin aynı olması gerekmez ama kullanılırken genlede aynı isim olarak verilir. 

// let sayNames38 = require(`./employe`)
// sayNames38("Can")


// obje olarak tümünü çağırmak istediğimizde aşağıdaki yolu izleyebiliriz
//  let employe = require(`./employe`)
import  sayName from "./employe.js"
sayName("Can")
// employe.sayAge("22")


// Sadece yaşı gösteren kısmı alacaksak aşağıdaki şekilde yapabiliriz 
// let sayAge = require(`./employe`).sayAge
// sayAge(25)
