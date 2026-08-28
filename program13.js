
// Even or Odd function

let evenOrOdd = num => {
  if (num % 2 === 0)
    return "even";
  else
    return "odd";
}

let check=evenOrOdd(8);
if(check === "even")
  console.log("Even Number !");
else if(check === "odd")
  console.log("Odd Number !");