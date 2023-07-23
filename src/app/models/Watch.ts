export class Watch{
  static gen : number = 1
    id : number
    type:String;
    name: String;
    price: number;
    imgSrc:String;
    
    constructor(type:String, name: String, price: number, imgSrc:String) {
        this.id = Watch.gen++
        this.type = type;
        this.name = name;
        this.price = price;
      this.imgSrc = imgSrc;
    }
  }