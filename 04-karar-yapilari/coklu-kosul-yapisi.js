

let userName = prompt("kullanıcı adınız:")
let age = prompt("yasiniz: ")
let info = document.querySelector(`#info`)

if (userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "kullanıcı adınızı giriniz "
} else if (age <= 18) {
    info.innerHTML = "yas bilginiz yok veya 18 yasından kucuksunuz"
}