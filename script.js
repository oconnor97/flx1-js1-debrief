let myNumber = 30;
console.log(typeof myNumber)
if(typeof myNumber !== 'number'){
    console.log('This is not a number')
} else if(myNumber % 3 === 0 && myNumber % 5 === 0){
    console.log('Genbuzz');
} else if(myNumber % 3 === 0){
    console.log('Gen');
} else if(myNumber % 5 === 0){
    console.log('Buzz');
} else {
    console.log(myNumber);
}

let item = 'socks';

switch(item){
    case 'shoes':
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

let randomNumber = Math.floor(Math.random() * (100 - 50 + 1) + 50);

console.log(randomNumber);

