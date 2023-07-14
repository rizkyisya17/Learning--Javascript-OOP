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
    //DO YOUR CODE HERE
    const input = parseInt(readLine());  
    
    if (isNaN(input)){
        console.log("Wrong Input") 
    }
    else{
        let number = 1
        for (let i = 2; i <= 1000; i++){
            number += i + ""
        }
        let temp = number.toString().split('');
        //console.log(temp)
        
        let arr = new Array(input);
        let page = temp.slice(0,arr.length)
        let last_page = page.slice(arr.length-2,arr.length)
        let previous_page = page.slice(arr.length-4,arr.length-2)
        
        let real_last_page = parseInt(last_page.join(''))
        let real_previous_page = parseInt(previous_page.join(''))
        
        //console.log(real_previous_page + 1)
        
        if (real_previous_page + 1 === real_last_page && real_last_page > real_previous_page && real_last_page > 0){
            console.log(real_last_page)
        }
        else{
            console.log("0")
        }
    }
    //console.log(input);
    
}