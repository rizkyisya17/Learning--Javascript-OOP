const input = 7;
//DO YOUR CODE HERE
var lines = ""
if (input>0 && input<41){
    for(var i = 1; i <= input; i++){
        if (i % 2 === 0){
            lines += "O"+'';
        }
        else{
            lines += "X"+'';
        }
    }
    console.log(lines)
}
else{
    console.log("Wrong Input")
}

