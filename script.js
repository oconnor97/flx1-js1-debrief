
// Genbuzz
let myNumber = 20;
console.log(typeof myNumber)

if (typeof myNumber !== "number") 
{ console.log("This is not a number");}
 else if ( myNumber % 3 ===0 && myNumber % 5 ===0 ) 
 {console.log('GenBuzz')}
 else if (myNumber % 3 ===0) 
 {console.log("Gen");} 
 else if (myNumber % 5===0) 
 {console.log("'Buzz'");}
else {console.log(myNumber)}

// E-commerce item list
let items;
switch (items) {
    case 'Shoes':
        console.log(`Shoes are $50`)
        break;
    case 'Jeans':
        console.log(`Jeans are $25`);
        break;
    case 'Hats':
        console.log(`Hats are $12`);
        break;
    case 'Socks':
        console.log(`Socks are $2`);
        break;
    default:
        console.log('Invalid Item');
        break;

}

// random integer generator
console.log(Math.floor(Math.random() * 51 + 50))
