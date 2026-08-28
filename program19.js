
// Sum from 1 to N

let sum = 0, n = 10;

let sumNumbers = i => {
  sum += i;
  return sum;

}

for (let i = 1; i <= n; i++) {
 sumNumbers(i);

}
console.log(`Sum from 1 to ${n} = `,sum);