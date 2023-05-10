//GenBuzz 
let myNumber = 6;
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

//ternary by ai

let myNumb = 6;
typeof myNumb !== 'number' ? console.log('This is not a number') :
  myNumb % 3 === 0 && myNumb % 5 === 0 ? console.log('GenBuzz') :
  myNumb % 3 === 0 ? console.log('Gen') :
  myNumb % 5 === 0 ? console.log('Buzz') :
  console.log(myNumb);


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
