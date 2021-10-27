class Person{
    #id;
    constructor(firstName,lastName,salary,age,id)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
        this.age=age;
        this.#id=id;
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
    constructor(firstName,lastName,salary,age,id,strongLeg,position,clebrationSentence)
    {
        super(firstName,lastName,salary,age,id);
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
    constructor(firstName,lastName,salary,age,id,strongHand,lastGoalConceded)
    {
        super(firstName,lastName,salary,age,id);
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
let roy=new Player('Roy','Shemesh','10000',21,2,'R','ST','one step for me big step for the team');
roy
