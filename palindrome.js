function isPalindrome(num) {
    var str = num.toString();
    var rev=str.split("").reverse().join("");
  
    if(rev == str){
        return true
    }
    return false
                 
}


function closest (num, arr) {
    
    let curr = arr[0];
    let diff = Math.abs (num - curr);
    
    let currr = 0
    let result = 0
    
    for (let val = 0; val < arr.length; val++) {
        let newdiff = Math.abs (num - arr[val]);
        
        if (newdiff < diff) {
            //console.log(newdiff+ " " + diff + " " + val)
            diff = newdiff;
            curr = arr[val];
            currr = arr[val-1];
        }
        
        if (num === curr){
            result = currr
        }
        else {
            result = curr
        }
        
    }
    
    return result;
}

const input = 153;
const arr = [];

if (isNaN(input)){
    console.log("Wrong Input")
}
else {
    for (let i = 10; i < 10000; i++) {
        if (isPalindrome(i)) {
            arr.push(i)
        }
    }
    
    console.log(arr)
    console.log(`Closest Palindrome: ${closest(input,arr)}`)
    //console.log(isPalindrome2(-151))
}
    

