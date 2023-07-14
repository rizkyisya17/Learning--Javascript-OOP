
const input = "Top spot".toLowerCase(); 
const word = input.split(" ");
const word2 = word.join("")
var newString = "";

for (var i = word2.length-1; i>=0; i--) { 
    newString += word2[i]; // or newString = newString + str[i];
}

if (word2 == newString){
    console.log("YES")
}
else {
    console.log("NO")
}
    

