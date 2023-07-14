function check_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

const input = 10;
    
//DO YOUR CODE HERE
const arr = [];
const arr2 = [];
for (let i = 103; i<=1000; i++){
    if (check_prime(i)){
        let digit2 = String(i).substring(1,3)
        if (check_prime(digit2)){
            let digit1 = String(i).substring(2,3)
            if (check_prime(digit1) && digit1 > 1){
                arr.push(i)
            }
        }
    }
}

for (let i = 0; i < input; i++){
    console.log(`#${i+1} Number => ${arr[i]}`)
}