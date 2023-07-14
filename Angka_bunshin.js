function bagi_habis(number){
    let jumlah = 0
    for (let i = 1; i <= number/2; i++){
        if (number % i === 0){
            jumlah = jumlah + i
        }
    }
    return jumlah
}

function bagi_habis2(number){
    let jumlah = 0
    for (let i = 1; i <= number/2; i++){
        if (number % i === 0){
            jumlah = jumlah + i
        }
    }
    return jumlah
}

function main() {
    //DO YOUR CODE HERE
    const input = readLine()*1;
    const arr = [];
    // let a = bagi_habis(496)
    // let b = bagi_habis2(a)
    let i = 0
    
    if (isNaN(input) || input <= 0 || input > 10) {
        console.log("Wrong Input")
    }
    else {
        for (let j = 220; j < 10000; j++){
        let a = bagi_habis(j)
        let b = bagi_habis2(a)
        if (j == b && a != b && i < input) {
            console.log(`${b} Bunshin dengan ${a}`)
            i = i+1
            }
        }
    }
 
    
 
    
   // const arr2 = [arr[1],arr[0],arr[2],arr[1]]
    
    

    // console.log(a)
    // console.log(b)
    // console.log(arr)

    
    
    // for (let i = 0; i < input; i++){
    //     console.log(`${arr[i]} Bunshin dengan ${arr2[0]}`)
    // }
    // console.log(bagi_habis(220))
   
    // for (let i = 220; i < 10000; i++){
        
    // }

}