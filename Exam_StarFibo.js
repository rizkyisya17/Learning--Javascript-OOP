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

function fibo(num){
    let n1 = 1, n2 = 2, nextTerm;
    let number = ""
    for (let i = 1; i <= num; i++) {
        //console.log(n1);
        number += n1 + ""
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return number
}

function main() {
    const input = parseInt(readLine());
    const input2 = parseInt(readLine());
    //DO YOUR CODE HERE
    //console.log(input2)
    if (isNaN(input) || isNaN(input2) || input < 0 || input > 50 || input2 < 0){
        console.log("Wrong Input")
    }
    else {
        let num = ""
        let temp = fibo(input).toString().split('');  
        for (let i = 0; i < temp.length; i++){
            if (temp[i] % input2 == 0){
                num += " " + "*"
            }else{
                num += " " + temp[i] 
            }
        }
        console.log(num)
    }
    

}