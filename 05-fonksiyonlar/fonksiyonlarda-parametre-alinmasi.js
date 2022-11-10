
let firstName = "lorem"

function greeting(firstName = "", lastName = "") {//default parametre alıyor.
    //console.log(`merhaba ${firstName ? firstName :""}`)
    console.log(`Merhaba  ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}

//default parametre alır

console.log(firstName)//degisken
greeting()
greeting("Parametre")


function greeting2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let info = greetingInfo = greeting2("ad", "soyad")

console.log(greetingInfo)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style ="color:red">Color Redddd</span>`

domIdWriteInfo("greeting", htmlInfo)
