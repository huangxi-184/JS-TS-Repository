let i = 0
let sum = 0
let result: number[] = []

while (sum < 1000) {
  i++
  sum = i * 5 + 3
  if (sum % 7 === 2) {
    result.push(sum)
  }
}

console.log(result)
