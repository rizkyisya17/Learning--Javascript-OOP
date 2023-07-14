class Fruits {
  #name
  #color
    
  constructor(name, color) {

    this.#name = name
    this.#color = color

  }
  
  get getName() {
    return this.#name
  }
  
  get getColor() {
    return this.#color;
  }

  // get getInfo() {
  //   let string = "Color Of " + this.getName + " Is " + this.getColor
  //   return string;
  // }
  
  getInfo() {
    // let string = "Color Of " + this.getName + " Is " + this.getColor
    console.log("Color Of " + this.#name + " Is " + this.#color);
    // return string;
  }
  
}
  
  //lengkapi code
  let objFruits = new Fruits("Banana", "Yellow");
  let objFruits2 = new Fruits("Apple", "Red");
  
  objFruits.getInfo()
  objFruits2.getInfo()