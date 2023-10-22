type SuperPrint = {
    /*(arr: number[]):void;
    (arr: boolean[]):void;
    (arr: string[]):void;
    (arr: (number|boolean)[]): void*/
    <T, M>(arr: T[], b:M): T //대체될 것..
}

const superPrint:SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
    return arr[0]
}

const a = superPrint([1, 2, 3,4], 't')
const ab = superPrint([true, false, true], 1)
const abc = superPrint(["adf", "bsd", "afd"], true)
const abcd = superPrint([1, 2, true, false, "ds"], 1.3)