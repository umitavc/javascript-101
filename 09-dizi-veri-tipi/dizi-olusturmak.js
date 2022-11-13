
let domain = "umit avcı"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items);

let emptyArray=[]

console.log(
    items.length
);

document.querySelector('#info').innerHTML =items.length;

console.log(items[0]); //array içindeki ilk elemanı ulaşma

console.log(items[items.length-1]);//array içindeki son eleman

console.log(
    items[Math.floor(items.length/2)]
);

console.log(typeof (items));


console.log(
    Array.isArray(items)
);



