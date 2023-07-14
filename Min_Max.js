const input = readLine()*1;
const input2 = readLine()*1;



if (input<=0 || input2 <=0 || input>=50 || input2>=50 || isNaN(input) || isNaN(input2)){
    console.log("Wrong Input")
}
else{
    if (input === input2){
            console.log("Same Input")
    }
    else{
        const arr = [input, input2]
        if (input%5 === input2%5){
            console.log(Math.max(input, input2))
        }
        else{
            console.log(Math.min(input, input2))
        }
    }
}
