
// Sum from 1 to N

let sum = 0, n = 10, summation;

let sumNumbers = i => {
  sum += i;
  return sum;

}

for (let i = 1; i <= n; i++) {
  summation = sumNumbers(i);

}
console.log(`Sum from 1 to ${n} = `, summation);