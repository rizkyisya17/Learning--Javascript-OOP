const input = readLine()*1;
const input2 = readLine();
let number = ""
//DO YOUR CODE HERE
if (input2 === "Asc" && typeof input === 'number' && input > 0){
    for (let i = 1; i <= input; i++){
        number += i+" "
    }
    console.log(number)
}
else if (input2 === "Desc" && typeof input === 'number' && input > 0){
    for (let i = input; i >= 1; i--){
        number += i+" "
    }
    console.log(number)
}
else {
    console.log("Wrong Input")
}