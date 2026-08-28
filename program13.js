
// Even or Odd function

let evenOrOdd = num => {
  if (num % 2 === 0)
    return 0;
  else
    return 1;
}

let check=evenOrOdd(8);
if(check === 0)
  console.log("Even Number !");
else
  console.log("Odd Number !");