import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputNumber = -1
const randomNuber = Math.floor(Math.random() * 10)

rl.question("Guess a number between 0 and 100: ", guessNumber)

function guessNumber(answer: string) {
    while (inputNumber !== randomNuber) {
        inputNumber = parseInt(answer)
        if (inputNumber === randomNuber) {
            console.log("You win!")
            rl.close();
        } else if (inputNumber > randomNuber) {
            console.log("Too high")
        }
        else {
            console.log("Too low")
        }
    }
}