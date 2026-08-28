
// Multiplication table Function


let printTable = (num, i) => {
  return num * i;
}


for (let i = 1; i <= 10; i++) {
  let output = printTable(5, i);
  console.log(`5 * ${i} = `, output);
}

