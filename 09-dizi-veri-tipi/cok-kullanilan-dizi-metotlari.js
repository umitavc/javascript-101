

let items = [1, 2, 3, 4, 5]

let femaleUsers = ["ayse", "Hulya", "merve"]
let maleUsers = ["ahmet", "hasan", "mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items);

console.log(items.length);
console.log(items[0].length);
console.log(items[0][0]);//ayse bilgisine ulaşılır



let newItems = items.splice(2, 4)

console.log("new items :", newItems);
console.log("items :", items);

items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum"));

let copyItems = items
console.log(items);

copyItems.pop()//son ogeyi cikartmak
console.log("copy ıtems: ", copyItems);
console.log("items :", items);


console.log("kopyaladıktan sonraki hali");
copyItems = items.slice()//kopyalama yapti

copyItems.pop()
console.log("copy ıtems: ", copyItems);
console.log("items :", items);

let es6Items = [...items]//es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items);


let allUsers = [...femaleUsers, ...maleUsers] //array ler birleştirildi
console.log(allUsers);


//array icerisindeki bilgiyi string cevirmek
console.log(allUsers.toString());
console.log(allUsers.join("---"));


//istedigimiz index bilgisine oge eklemek
allUsers.splice(allUsers.length - 1, 0, "melisa")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "lorem")
console.log(allUsers);