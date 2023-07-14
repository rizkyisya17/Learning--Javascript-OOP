function getFactor(number) 
{    let listFactor = [];
    for(let i = 1; i < number; i++){ 
       if(number % i == 0){            
        listFactor.push(i);        
    }    
}        
    return listFactor;
}

function sum(arr){
        let result = 0;

        for(let i = 0; i < arr.length; i++){
            result += arr[i];    
        }        
        return result;
}

function main() {    
    //DO YOUR CODE HERE    
    const input = readLine();            
    // 1. Gimana caranya supaya kita bisa mencetak output sebanyak input yang diminta    
    // 2. Gimana cara kita cari faktor dari sebuah angka    
    // 3. Gimana caranya kita menjumlahkan semua faktor    
    // 4. Apakah jumlah faktor dari 284 adalah 220 dan jumlah faktor dari 220 adalah 284        
    let number = 220;    
    let loop = 1;    
    let angka1 = 0;    
    let angka2 = 0;

    if(input < 1){
        console.log('Wrong Input');
        return    
    }        
    
    while(loop <= input){
            // console.log(loop)        
            angka1 = sum(getFactor(number))                
            angka2 = sum(getFactor(angka1));                
            if(angka2 == number && number != angka1){
                console.log(`${number} Bunshin dengan ${angka1}`)
                loop++;        
            }                
        number++;    
    }
}