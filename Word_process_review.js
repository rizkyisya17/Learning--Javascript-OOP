function main() {
    const input = readLine();    
    // 1. Gimana caranya kita bisa cari karakter ke i dan duplikasinya dalam suatu kalimat    
    // 2. Menambahkan saudara dari karakter ke i dan mengubahnya pada variabel awal menjadi string kosong    
    // 3. Membuat pengecualian jika karakter ke i adalah string kosong        
    let temp = input.toLowerCase().split('')    
    let result = '';        
    for(let i = 0; i < input.length; i++){        
        // Statement        
        if(temp[i] == ''){            
            continue;        
        }                
        result += temp[i];        
        for(let j = i + 1; j < input.length; j++){            
            if(temp[i] == temp[j]){                
                result += temp[j];                
                temp[j] = '';            
            }        
        }    
    }        
    console.log(result);    
}