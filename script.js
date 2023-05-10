let myNumber = 30;

if (typeof myNumber !== 'number') {
    console.log("This is not a number");
} else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
  console.log("GenBuzz");
} else if (myNumber % 5 === 0) {
  console.log("Buzz");
} else if (myNumber % 3 === 0) {
  console.log("Gen");
} else {
  console.log(myNumber);
}

let items = "Shoes";

switch (items) {
    case "Jeans":
        console.log('Jeans are $25');
        break;
    case "Hat":
        console.log('Hat is $12');
        break;
    case "Shoes":
        console.log("Shoes are $50");
        break;
    case "Socks":
        console.log('Socks are $2');
        break;
    default:
        console.log("Invalid Item");
        break;
}

for (let i = 50; i <= 100; i++) {
  console.log(i);
}

