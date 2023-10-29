/*
type PlayerA = {
    name: string
}
type PlayerAA = PlayerA & {
    lastname: string
}
const playerA: PlayerAA = {
    name: "nico",
    lastname: "asf"
}

///////////////

interface PlayerB {
    name:string
}
interface PlayerBB extends PlayerB {
    lastname: string
}
interface PlayerBB {
    health: number
}
const playerB: PlayerBB = {
    name: "nico",
    lastname: "sdf",
    health: 123
}
*/
type PlayerA = {
    firstname: string    
}
interface PlayerB {
    firstname: string
}
class User implements PlayerB {
    constructor (
        public firstname: string
    ){}
}