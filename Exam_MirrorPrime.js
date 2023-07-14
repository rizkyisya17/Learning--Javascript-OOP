'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function check_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

function reversedNum(num) {
  return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )                 
}

function main() {
    //DO YOUR CODE HERE
    const input = parseInt(readLine());    
    //console.log(input);
    //console.log(typeof reversedNum(input))
    let inputReverse = reversedNum(input)
    //console.log(inputReverse)
    
    if (check_prime(input) && check_prime(inputReverse) && input >= 10 && input <= 100){
        console.log("Mirror Primes")
    }
    else if (input >= 10 && input <= 100){
        console.log("Regular Number")
    }
    else{
        console.log("Wrong Input")
    }
    

}