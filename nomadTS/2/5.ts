let a: unknown;
if(typeof a === "number") {
    let b = a+1
}

if(typeof a === "string") {
    let b = a.toUpperCase();
}

function hello() {
    console.log('x')
}

function hello2(name:string|number): never {
    if(typeof name === "string") {
        
    } else if(typeof name === "number") {
    } else {
        name 
    }
    throw new Error("sad")
}