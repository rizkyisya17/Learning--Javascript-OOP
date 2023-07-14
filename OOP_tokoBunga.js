class Toko {
    #nama;
    #lokasi;
    #arrCabang;
    constructor(nama, lokasi) {
   
      //lengkapi code
      this.#nama = nama
      this.#lokasi = lokasi;
      this.#arrCabang = [];
    }
    getNama() {
      return this.#nama;
    }
    setNama(value) {
      //lengkapi code
      this.#nama = value;
    }
    arrCabang(objcabang) {
      //lengkapi code
     this.#arrCabang.push(objcabang)
    }
    getArrcabang() {
      return this.#arrCabang;
    }
    getinfo() {
      //console.log("Print Disini ")
    console.log(this.#nama + " Merupakan toko yang berada di " + this.#lokasi)
    console.log("yang memiliki " + this.#arrCabang.length + " Cabang, dengan nama:")
    for (let i = 0; i < this.#arrCabang.length; i++){
        console.log("* " + this.#arrCabang[i])
    }
    
      
    }
  }
  
  let toko1 = new Toko("toko Bunga", "bandung");
  toko1.arrCabang("cabang satu");
  toko1.arrCabang("cabang dua");
  //console.log(toko1.getNama());
  toko1.getinfo();