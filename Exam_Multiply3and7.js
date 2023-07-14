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

function main() {
    const input = parseInt(readLine());
    //DO YOUR CODE HERE
    //console.log(input);
    if (input > 50){
        console.log("Max.Input is 50")
    }
    else{
        let num = 0
        for (let i = 1; i <= input; i++){
            if (i % 3 == 0 || i % 7 == 0){
                num += i
            }
        }
        console.log(num)
    }

}