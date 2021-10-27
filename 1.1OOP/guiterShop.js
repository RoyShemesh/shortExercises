class Guitar{
    static count=1;
    #id;
    constructor(manufactureYear,brand,price,numberOfString,used,id){
        this.manufactureYear=manufactureYear;
        this.brand=brand;
        this.price=price;
        this.numberOfString=numberOfString||6;
        this.used=used||false;
        this.#id=Guitar.count;
        Guitar.count++;
    }

    get getPrice(){
        return this.price;
    }
    set setPrice(price){
        this.price=price;
    }
    get getManufactureYear(){
        return this.manufactureYear;
    }
    get getBrand(){
        return this.brand;
    }
    get id(){
         return this.#id;
    }
    play(){
        this.used=true;
        this.price=this.price*90/100;
        return ('ti ni nai nai');
    }
    static detectSound(sound)
    {
        if(sound=="vraam")
            return 'electric guitar';
        if(sound=="dong")
            return 'bass guitar';
    }
}

class ElectricGuitar extends Guitar{
    constructor(manufactureYear,brand,price,longNeck,numberOfString,used,id){
        super(manufactureYear,brand,price,numberOfString,used,id);
        this.longNeck=longNeck;
    }
    play(){
        return "vraam"; 
    }
}

class bassGuitar extends Guitar{
    constructor(manufactureYear,brand,price,longNeck,used,id){
        super(manufactureYear,brand,price,4,used,id);
    }
    playSolo(){
        return "dong digidi dong digidi dong digidi dongdongdong";
    }
    play(){
        return "dong";
    }
}
let myGuitar=new Guitar(2020,"Yamaa",200)
console.log(myGuitar);
myGuitar.play();
console.log(myGuitar);