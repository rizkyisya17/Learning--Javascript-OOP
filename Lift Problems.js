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
    const input = readLine();
    //DO YOUR CODE HERE
    if (input>0 && input<=4){
        console.log("A")
    }
    else if (input>4 && input<=7){
        console.log("B")
    }
    else{
        console.log("Wrong Input")
    }
}