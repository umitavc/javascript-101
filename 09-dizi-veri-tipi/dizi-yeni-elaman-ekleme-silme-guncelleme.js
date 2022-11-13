

let items = [10, 20, 30, 40]

console.log("items- ilk hali :", items);

// array : sona eleman ekleme =>push
items.push(50)
console.log("50 :", items);

//basa eleman ekleme => unshift

items.unshift(5)
console.log("5:", items);

//sondaki ogeyi cıkarmak =>pop
let lastItem = items.pop()
console.log("last item:", lastItem, "items :", items)


//bastaki ogeyi cıkarmak =>shift

let firstItem = items.shift()
console.log("firstItem:", firstItem, "items :", items)


//array icindeki bir ogenin bilgisini degistirme


//ilk elemanı değiştirme
items[0] = 5;
console.log(items);

//son elemanı degistirme
items[items.length - 1] = 200
console.log(items);


