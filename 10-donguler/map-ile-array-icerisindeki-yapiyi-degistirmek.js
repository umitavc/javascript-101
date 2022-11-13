
const USERS = [
    "ayse", "fatma", "tUGCe", "aKSEL"
]

const NEw_USERS = USERS.map(user => user.toLowerCase())
console.log(NEw_USERS);

const USERS_OBJ = USERS.map(items => {
    return {
        userName: items, shortName: `${items[0]}.`,
        newName: `${items[0].toUpperCase()}${items.slice(1).toLowerCase()}`
    }
}
)

console.log(USERS_OBJ);