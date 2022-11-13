
const PRODUCTS = [
    "Laptop", "Phone", "Speaker", "Desktop PC", "Server", "adipisicing", "Mouse","Keyboard"
]


//PRODUCTS.forEach((product,index ,array)=> console.log(array[index] =product +"111"))
PRODUCTS.forEach((product,index ,array)=> array[index] =`${product.toUpperCase()}`)

console.log(PRODUCTS);

// const userListDom = document.querySelector("#userList")
// for ( i =0; i<users.length; i++){
//     const liDom =document.createElement("li")
//     liDom.innerHTML =users[i]
//     userListDom.appendChild(liDom)
//     //console.log(users[i]);
// }


const userListDom = document.querySelector("#userList")
PRODUCTS.forEach((items)=>{
    const liDom =document.createElement("li")
    liDom.innerHTML =items
    userListDom.appendChild(liDom)
})
