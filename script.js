//GenBuzz 
let myNumber = 60;
if(typeof myNumber != 'number'){
    console.log('This is not a number')
}else if(myNumber % 3 === 0 && myNumber % 5 === 0){
    console.log('GenBuzz');
}else if(myNumber % 3 === 0){
    console.log('Gen')
}else if(myNumber % 5 === 0){  
    console.log('buzz')
} else { 
    console.log(myNumber)
}

//E-Commerce Item list
let bItem = 'Shoes'
if (bItem === 'Shoes') {
    console.log('Shoes- $50');
  } else if (bItem === 'Jeans'){
    console.log('Jeans- $25');
  } else if (bItem === 'Hat'){
    console.log('Hat- $12');
  }else if (bItem === 'Socks'){
    console.log('Socks- $2');
  }
  else {
    console.log('Invalid item');
  }

  let randomNumber = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
console.log(randomNumber);
