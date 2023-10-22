function add(a:number, b:number): number {
    return a + b
}

type Add = (a:number, b:number) => number;

const addd:Add = (a, b) => a+b