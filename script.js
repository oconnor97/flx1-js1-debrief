let myNumber = true;
myNumber = 15
if (myNumber) {
    console.log(`GenBuzz`);
} else {
    console.log(`Gen`);
    
}

let Shoes = '$50';
let Jeans = '$20';
let Hat = '$12';
let socks = '$2';


switch (Shoes) {
    case '$50':
        console.log(`These shoes are $50`);
    break;
    case '$20':
    console.log(`These jeans are $20`);
    break;
    case '$12':
        console.log('This hat is $12');
        break;
    case '$2':
        console.log(`These socks are $2`);
        break;
    default:
        console.log(`Invalid Item`);
        break;
}
