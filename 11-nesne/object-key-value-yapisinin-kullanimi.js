

let laptop1 ={
    brand:"apple",
    model:"macbook pro",
    "2kg": 2,
    modelName :"macbook air"
}

console.log(laptop1);
console.log(laptop1.model);
console.log(laptop1["2kg"]);

//anahtar bilgisine bilgi eklemek

laptop1.brand="mac"
laptop1["brand"] = "mac1"
console.log(laptop1);

// yeni bilgi eklemek
laptop1.version ="10.15.7"
console.log(laptop1);

keys=Object.keys(laptop1)
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach(keyInfo => {
    console.log(keyInfo);
    console.log(laptop1[keyInfo]);
});

//deger bilgilerine ulasamak

console.log(Object.values(laptop1));

let values =Object.values(laptop1)

values.forEach(value => {
    console.log(value);
   
});