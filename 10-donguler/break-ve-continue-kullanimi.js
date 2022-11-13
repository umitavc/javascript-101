

const LOREM_LIST = ["lorem", "ipsum", "dolar", "amet", "consectetur", "adipisicing", "elit"]


let counter = 0;
// for(; counter<10; counter++){
//     console.log(counter);
//     if(counter ===5) {break}

// }

// for (; counter < 10; counter++) {
//     if (counter === 5) { continue }
//     console.log(counter);

// }

const UL_DOM =document.querySelector("#userList")

let index =0

// for(; index<LOREM_LIST.length; index++){
//     if(LOREM_LIST[index] == "dolar") {break}
//     let li_dom =document.createElement("li")
//     li_dom.innerHTML=LOREM_LIST[index]
//     UL_DOM.append(li_dom)

// }

for(; index<LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == "dolar") {continue}
    let li_dom =document.createElement("li")
    li_dom.innerHTML=LOREM_LIST[index]
    UL_DOM.append(li_dom)

}