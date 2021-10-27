const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
// const jsonParser = bodyParser.json()
// router.use(bodyParser.urlencoded({ extended: false }))
const fs=require("fs");
const fsPromises=require("fs").promises;
const path = require("path");

class Person{
    static count=0;
    #id;
    constructor(firstName,lastName,salary,age,overall)
    {
        // fsPromises.readFile('./src/db/id/id.json').then((text)=>{
            let text=fs.readFileSync('./src/db/id/id.json');
            this.firstName=firstName;
            this.lastName=lastName;
            this.salary=salary;
            this.age=age;
            this.overall=overall;
            this.#id= JSON.parse(text).id;
            let newId=this.#id;
            newId++;
            fs.writeFileSync('./src/db/id/id.json',`{"id":"${newId}"}`);
        // })
        
    }

    get getFirstName(){
        return this.firstName;
    }
    get getLastName(){
        return this.lastName;
    }
    get getSalary(){
        return this.salary;
    }
    set setSalaty(salary){
        this.salary=salary;
    }
    get getAge(){
        return this.age;
    }
    get getID(){
        return this.#id;
    }
}

class Player extends Person{
    constructor(firstName,lastName,salary,age,strongLeg,position,clebrationSentence,overall)
    {
        super(firstName,lastName,salary,age,overall);
        this.strongLeg=strongLeg;
        this.position=position;
        this.celebrationSentence=clebrationSentence;
    }

    goalClebration(){
        console.log(this.celebrationSentence);
        this.salary=this.salary*102.5/100;
    }
    get getStrongLeg(){
        return this.strongLeg;
    }
    get getPostion(){
        return this.position;
    }
    set setPosition(position){
        this.position=position;
    }
    get getClebrationSentence(){
        return this.clebrationSentence;
    }
    set setClebrationSentence(clebrationSentence){
        this.clebrationSentence=clebrationSentence;
    }
}

class Goalkeeper extends Person{
    constructor(firstName,lastName,salary,age,strongHand,overall,lastGoalConceded)
    {
        super(firstName,lastName,salary,age,overall)
        //(firstName,lastName,salary,age,overall);
        this.strongHand=strongHand;
        this.lastGoalConceded=lastGoalConceded||Date.now();
    }
    get getStrongHand(){
        return this.getStrongHand;
    }
    get getLastGoalConceded(){
        return this.getLastGoalConceded;
    }
    concededAGoal(){
        this.lastGoalConceded=Date.now();
    }
}

router.get('/',(req,res)=>{
    res.send('You reach player section')
});

router.get('/getallfreeagents',(req,res)=>{
    fsPromises.readdir('./src/db/freeAgent').then((dir)=>{
        fsPromises.readFile(`${dir}`).then((file)=>{
            console.log(file[0]);
        })

    });
});
router.put('/createplayer',(req,res)=>{
    let player;
    if(req.player==undefined)
        player=createGk(req.gk);
    else
        player=createPlayer(req.player);
    console.log(player);
    fsPromises.writeFile(`./src/db/freeAgent/${player.getID}.json`,JSON.stringify(player))
    .then(()=>{
        res.send(`Player ID : ${player.getID}`)
        })
    .catch(()=>{
        next (({error:500,text:`Cant create this player`}));
    })
})

module.exports = router;

const createPlayer=(player)=>{
    let newPlayer=new Player(player.firstName,player.lastName,player.salary,player.age,player.strongLeg,player.position,player.celebrationSentence,player.overall);
    return newPlayer;
}
const createGk=(GK)=>{
    let newGk=new Goalkeeper(GK.firstName,GK.lastName,GK.salary,GK.age,GK.strongHand,GK.overall);
    return newGk;
}
