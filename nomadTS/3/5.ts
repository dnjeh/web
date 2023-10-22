function superPrint<T>(a:T[]) {
    return a[0]
}

const a = superPrint([1, 2, 3,4])
const ab = superPrint([true, false, true])
const abc = superPrint(["adf", "bsd", "afd"])
const abcd = superPrint([1, 2, true, false, "ds"])

type Player<E> = {
    name: string;
    extraInfo:E;
}

type NicoExtra = {
    favFood:string;
}
type NicoPlayer = Player<NicoExtra>

const nico: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}
/*
const nico: Player = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}*/
const lynn: Player<null> = {
    name: "lynn",
    extraInfo: null
}

function printAllNumbers(arr: Array<number>) {
    
}

type A = Array<number>

let aa:A = [1,2,3,4]