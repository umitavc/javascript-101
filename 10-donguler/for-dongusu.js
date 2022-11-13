

let users = ["lorem", "ıpsum", "dolar","umit"]

//  for( let index =0; index<10; index++){
//      console.log(index);
// }

// let index = 0;
// for (; index < 10; index++) {
//     console.log(index);
// }


const userListDom = document.querySelector("#userList")
for ( i =0; i<users.length; i++){
    const liDom =document.createElement("li")
    liDom.innerHTML =users[i]
    userListDom.appendChild(liDom)
    //console.log(users[i]);
}