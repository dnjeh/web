type Nickname = string
type Health = 1 | 5 | 10
type Friends = Array<string>

type team = "red" | "blue" | "yello"

//interface Hello = string 작동 불가..

interface Player  { //type의 일부 기능, 오브젝트를 위하야 존재!
    nickname: Nickname,
    team: team
    healthBar: Health
}

const nico: Player = {
    nickname: "nico",
    team: "yello",
    healthBar: 10
}

type Food = string;

const kimchi: Food = "delicious"



interface User {
    name: string
}
interface User {
    lastname: string
}
interface User { //인터페이스 고유!
    health: number
}
interface Playerr extends User {
}
const nicoo: User = {
    name:"nico",
    health:10,
    lastname:"asf"
}
//=동치=
/*type User = {
    name: string
}
type Playerr = User & {
}
const nnico: Playerr = {
    name:"nico"
}*/