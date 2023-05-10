// 1. GenBuzz 

let myNumber = 30;
    if(typeof myNumber !== 'number'){
        console.log('This is not a number');
    } else if (myNumber % 15 === 0) {
        console.log('GenBuzz');
    } else if (myNumber % 5 === 0) {
        console.log('Buzz');
    } else if (myNumber % 3 === 0) {
        console.log('Gen');
    }  else {
        console.log(myNumber);
    }

// 2. E-Commerce Item list

let item = 'shoes';

switch(item.toLocaleLowerCase()){
    case 'shoes' || 'shoes':
        console.log('$50');
        break;
    case 'jeans':
        console.log('$25');
        break;
    case 'hat':
        console.log('$12');
        break;
    case 'socks':
        console.log('$2');
        break;
    default:
        console.log('Invalid Item');
}


// 3. Print a random integer (whole number) between 50 and 100

    let randomNumber = Math.floor(Math.random() * (100 - 50)) + 50;
        console.log(randomNumber);
