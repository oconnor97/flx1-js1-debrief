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

let items= 'tees';

switch(items) {
    case 'shoes':
        console.log('shoes are $50');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'hats':
        console.log('Hats is $12');
        break;
    case 'socks':
        console.log('Socks are $2');
        break;
    default:
        console.log('Invalid item');
        break;
}

let ranNum = Math.floor((Math.random()* 50) + 50);
console.log(ranNum);