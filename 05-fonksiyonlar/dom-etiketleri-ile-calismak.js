

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick() {
        console.log("tiklandi")
        this.innerHTML = "BİLGİ DEĞİŞTİ"
        this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}