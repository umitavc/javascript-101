

let price = "100"
let user = "umit"

//eşitse
console.log("== :", price == 1)
console.log("== :", price == 100)

//hem dergeri hem turu esitse
console.log("== :", price === 1)
console.log("== :", price === 100)

//eşit değilse
console.log("!= :", user != "guest")

//küçükse
console.log("price <100 :", price < 100)

//kücük veya eşit
console.log("price <= 100 :", price <= 100)

//büyükse
console.log("price >1000 :", price > 1000)

//büyük veya eşitse
console.log("price >=99 :", price >= 99)

//&& ve
price = 0
console.log(price > 0 && user != "guest")
// || veya
console.log(price > 0 || user != "guest")
// ! değig (tersi)
user = "guest"
price = 1
console.log(price > 0 && !user == "guest")


let firstCity = "Ankara";

       let secondCity = "İstanbul";

       const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

       console.log(isEqual)