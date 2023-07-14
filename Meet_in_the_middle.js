//var input = readLine();  
let input = "CodingID"  
input = input.toLowerCase()
for (var i = 0; i < input.length; i++) {
    let x = input.length-(i+1)
    if (i >= x) {
        break;
        i = input.length
    } else {
        console.log(input[i]+ input[x]);
    }
}

/*console.log(input[0]+ input[input.length-1]);
console.log(input[1]+ input[input.length-2]);
console.log(input[2]+ input[input.length-3]);
console.log(input[3]+ input[input.length-4]);*/
