function findUnique(str){
    // The variable that contains the unique values
    let uniq = "";
     
    for(let i = 0; i < str.length; i++){
      // Checking if the uniq contains the character
      if(uniq.includes(str[i]) === false){
        // If the character not present in uniq
        // Concatenate the character with uniq
        uniq += str[i]
      }
    }
    return uniq;
}

function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {

      // check if the character is at that position
      if (str.charAt(i) == letter) {
          count += 1;
      }
  }
  return count;
}

function main() {
  const input = readLine().toLowerCase()
  // console.log(findUnique(input))
  // console.log(countString(input,'i'))
  let kata = findUnique(input)
  let huruf = ""
  for (let i = 0; i < kata.length; i++){
      huruf += kata[i].repeat(countString(input,kata[i])) 
  }
  console.log(huruf)
  
}