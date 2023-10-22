type SuperPrint = {
    /*(arr: number[]):void;
    (arr: boolean[]):void;
    (arr: string[]):void;
    (arr: (number|boolean)[]): void*/
    <T>(arr: T[]): T //대체될 것..
}

const superPrint:SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
    return arr[0]
}

const a = superPrint([1, 2, 3,4])
const ab = superPrint([true, false, true])
const abc = superPrint(["adf", "bsd", "afd"])
const abcd = superPrint([1, 2, true, false, "ds"])