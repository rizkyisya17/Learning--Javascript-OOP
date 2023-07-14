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

function isFloat(value) {
  if (
    typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
  ) {
    return true;
  }

  return false;
}

function main() {
    const input = parseInt(readLine());
    //DO YOUR CODE HERE
    //console.log(input)
    //let arr = new Array(input)
    if (isNaN(input) || input < 1 || isFloat(input)){
        console.log("Wrong Input")
    }
    else{
        let arr = [2, 5, 7]
        
        for (let i = 3 ; i < input; i++ ){
            arr.push(1+arr[i-3])
        }
        //console.log(arr)
        
        let num = ""
        for (let j = 0; j < arr.length; j++){
            if (arr[j] % 3 == 0){
                num += " " + "Tik" 
            }
            else if (arr[j] % 5 == 0){
                num += " " + "Tak" 
            }
            else if (arr[j] % 3 == 0 && arr[j] % 5 == 0){
                num += " " + "Boom"
            }
            else{
                num += " " + arr[j] 
            }
        }
        console.log(num)
    }
    
}