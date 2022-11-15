

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluorux.org"
}


// let userName =settings.userName
// console.log(userName);


let { userName: user, password, isActive, ip, serverName } = settings
console.log(user, password, isActive, ip, serverName);
console.log(settings);
//console.log(userName);
console.log(user);



let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings

console.log(userName2, password2, isActive2, newSettings);

//objenin destructuring ile kopyalanmasi
//dogru
let settings2 = { ...settings }
settings2.userName = "Degisen Bilgi"
console.log("settings", settings);
console.log("settings2", settings2);


//hatalı
//let settings2 =settings
// settings2.userName ="Degisen Bilgi"
// console.log("settings",settings);
// console.log("settings2",settings2);score2,otherScore


let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore);

let copyOfScore=[...score]
console.log(copyOfScore);