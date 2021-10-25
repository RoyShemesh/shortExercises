class Cat{
    constructor()
    {
        this.tiredness=5;
        this.hunger=5;
        this.lonliness=5;
        this.happiness=5;
    }
    pet(){
        if(Math.random()<0.5)
        {
            this.lonliness--;
            this.happiness+=2;
            this.tiredness++;
            this.hunger++;
        }
        else
            console.log('dont touch me creep');
        this.renderAll();

    }
    sleep(){
        this.hunger++;
        this.tiredness=0;
        this.happiness++;
        this.renderAll();

    }
    feed(){
        this.hunger=0;
        this.happiness++;
        this.lonliness--;
        this.renderAll();

    }
    yell(){
        this.hunger++;
        this.happiness--;
        this.lonliness++;
        this.renderAll();

    }
    showStatus(){
        console.log(`tiredness:${this.tiredness} \nhunger:${this.hunger}\n lonliness:${this.lonliness}\n happiness:${this.happiness}`);
    }
    
    renderTiredness(){
        if(this.tiredness>10)
            this.tiredness=10;
        if(this.tiredness<0)
            this.tiredness=0;
    }
    renderHunger(){
        if(this.hunger>10)
            this.hunger=10;
        if(this.hunger<0)
            this.hunger=0;
    }
    renderLonliness(){
        if(this.lonliness>10)
            this.lonliness=10;
        if(this.lonliness<0)
            this.lonliness=0;
    }
    renderHappiness(){
        if(this.happiness>10)
            this.happiness=10;
        if(this.happiness<0)
            this.happiness=0;
    }
    renderAll(){
        this.renderHappiness();
        this.renderLonliness();
        this.renderTiredness();
        this.renderHunger();
    }
}

let mizi=new Cat();
mizi.pet();
mizi.yell();
mizi.sleep();
mizi.feed();
mizi.showStatus();