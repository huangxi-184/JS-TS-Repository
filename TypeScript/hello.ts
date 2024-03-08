const sym2: symbol = Symbol("lizi");
const big2: bigint = 10n;
let num: number[] = [1, 2, 3, 4];
let num2: Array<number> = [1, 2, 3, 4];


let num3: (number | string)[] = [1, "2", "3", 4];

const sum: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 + num2
}

function push(firstNumber: number, ...items: number[]) {

}

let person: {
    readonly name: string;
    age?: number;
    sayHi: () => void;
    greet: (name: string) => void;
} = {
    name: "John",
    age: 25,
    sayHi() { },
    greet(name) { },
};

let tuple: [string, number] = ["Echo", 26];

let [str, num77] = tuple;
let tuple2: readonly [string, number] = ["Echo", 26];

// console.log(sym2, big2, num, num2, num3, push(1, 2, 3, 4));
console.log(person.greet("Lizi"))



let direction: "Up" | "Right" | "Down" | "Left";
direction = 'Right'