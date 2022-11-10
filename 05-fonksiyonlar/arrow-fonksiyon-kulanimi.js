
function hello(firstname) {
    console.log(` Merhaba ${firstname}`)
}

hello("JavaScript")

const helloFuncV1 = (firstname) => { console.log(` Merhaba ${firstname}`) }

helloFuncV1("hellofunctionv1")

const helloFuncV2 = firstName => console.log(` Merhaba ${firstName}`)
helloFuncV2("hellofunctV2")

const helloFuncV3 = (firstName, lastName) => console.log(` Merhaba ${firstName} ${lastName}`)
helloFuncV3("hellofunctV3", "last name info")

const helloFuncV4 = (firstName, lastName) => {
    let info = ` Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("hellofunctV4", "other infoo")