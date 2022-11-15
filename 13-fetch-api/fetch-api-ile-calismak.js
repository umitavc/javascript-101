

fetch("data/settings.json").then(response => {
    return response.json()
}
).then(responseJson =>{
    console.log(responseJson);
    console.log(responseJson.userName);
})



let userListDOM =document.querySelector("#userList")
//api uzerinden veri cektik
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    json.forEach(item => {
        let liDom =document.createElement('li')
        liDom.innerHTML=item.title
        userListDOM.appendChild(liDom)
    });
  })