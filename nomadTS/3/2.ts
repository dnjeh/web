type Add = {
    (a: number, b: number) : number
    (a: number, b: number, c: number) : number
    (a: number, b: string) : number
}
let a = 123;
let b = "af";
//const add: Add = (a, b) => a+b
function add(a, b): Add {
    if(typeof b === "string") return a
    return a+b
}

const addd:Add = (a,b,c?:number) => {
    if(c) return a+b+c;
    return a+b;
}

addd(1, 2)
addd(1, 2, 3)

type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void;
    (config:Config):void;
}

const push:Push = (config) => {
    if(typeof config === "string") console.log(config)
    else {
        console.log(config.path, config.state);
    }
}