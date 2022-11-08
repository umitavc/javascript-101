

let fulName = prompt("Lutfen adininizi giriniz: ")

let greeting =document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red"> ${fulName} </small>`