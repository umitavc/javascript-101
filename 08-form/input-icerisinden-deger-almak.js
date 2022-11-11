let formDOM =document.querySelector("#userForm");
formDOM.addEventListener("submit",formSubmit);

function formSubmit(event){
    event.preventDefault();
    console.log("islem gerceklesti");
    let inputNameDom = document.querySelector(`#inputName`)
    console.log(inputNameDom.value);
    localStorage.setItem(`inputName` ,inputNameDom.value)
}