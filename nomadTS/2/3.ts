let a = [1];
let b = ["il", "1"];
let c = [true];

type Age = number;
type Name = string;
type player = {
    name: string,
    age?: Age
}

/*function playerMaker(name:string): player {
    return {
        name:name,
    }
}*/
const playerMaker = (name:string): player => ({
        name:name,
})

const playerNico: player = {
    name: "nico"
};

const nico = playerMaker("nico");
nico.age = 12

//if(player.age && player.age < 10) { //타입스크립트는 이런것도 염려해준다!

//}