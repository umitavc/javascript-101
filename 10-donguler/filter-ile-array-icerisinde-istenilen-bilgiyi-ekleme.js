const PRODUCTS = [
    "Laptop", "Phone", "Speaker", "Desktop PC", "Server", "adipisicing", "Mouse", "Keyboard"
]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS);

const USERS = [
    { fullName: "ayse sumer", isActive: false },
    { fullName: "mehmet urgan", isActive: true },
    { fullName: "damla ates", isActive: false },
    { fullName: "barıs akar", isActive: true },
]

//const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive)
//const ACTIVE_USERS = USERS.filter(user => user.isActive === false)
console.log(ACTIVE_USERS);