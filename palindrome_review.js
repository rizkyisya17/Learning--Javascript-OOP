function isPalindrom(num){    
    let temp = num.toString().split('');        
    let reverseTemp = [...temp].reverse();        
    if(temp.toString() == reverseTemp.toString()){        
        return true;    
    }        
    return false;
}

function main() {    
    const input = readLine();    
    //DO YOUR CODE HERE    
    // 1. Gimana kita bisa menentukan apakah sebuah angka merupakan palindrom?    
    // 2. Gimana caranya kita bisa ngecek angka palindrom kebawah dan keatas.    
    // 3. Gimana caranya kita bisa tau jaraknya dan membandingkan mana yang terdekat?  

    let lowerPalindrom, higherPalindrom;   

    // input = 151    

    let number = input;  

    if(isNaN(parseInt(number))){        
        console.log('Wrong Input');        
        return;    
    }

    // Pengecekan kebawah    
    while(true){        
        number--;        
        if(isPalindrom(number)){            
            lowerPalindrom = number;            
            break;        
        }    
    }        
    number = input;

    // Pengecekan keatas    
    while(true){        
        number++;        
        if(isPalindrom(number)){            
            higherPalindrom = number;            
            break;        
        }    
    }            

    let rangeToHigherPalindrom = higherPalindrom - parseInt(input);    
    let rangeToLowerPalindrom =  parseInt(input) - lowerPalindrom;  

    if(rangeToLowerPalindrom < rangeToHigherPalindrom){                
        console.log(`Closest Palindrome: ${lowerPalindrom}`)            
    } else if(rangeToHigherPalindrom < rangeToLowerPalindrom ){                
        console.log(`Closest Palindrome: ${higherPalindrom}`)            
    } else {                
        console.log(`Closest Palindrome: ${lowerPalindrom}`)            
    }
}