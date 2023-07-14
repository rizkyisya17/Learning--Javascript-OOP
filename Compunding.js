const input = 'ABCDE'.toLowerCase();
var lines = ""
for (var i=0; i<input.length; i++){
    /*for (var j=0; j<=i; j++){
        console.log(input[i].repeat(i+1))
    }`*/
    if (i+1 == input.length){
        lines += input[i].repeat(i+1)+'';
        //lines += input[i].charAt(0).toUpperCase().repeat(i+1)+'';
    }
    else {
        lines += input[i].repeat(i+1)+'-';
    }
    
}
//console.log(lines)

const arr = lines.split('-');
for (var i=0; i<arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const word = arr.join("-");
console.log(word)
