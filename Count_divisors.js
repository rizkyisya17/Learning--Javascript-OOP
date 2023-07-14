
//DO YOUR CODE HERE
const input = "2 7 3"    
const matches = input.match(/\d+/g);
const numStr1 = parseInt(matches[0]);
const numStr2 = parseInt(matches[1]);
const numStr3 = parseInt(matches[2]);
let sum = 0; 
for(var i = numStr2-1; i > numStr1; i--){
    sum = i%numStr3==0 ? sum+=i : sum+=0;
}
console.log(sum)

