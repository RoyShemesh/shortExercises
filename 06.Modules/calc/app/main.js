import "./styles.css";
import { equals,add,divide,multiply,sub} from "./helpers/math";

const arg ={
    n1:"",
    n2:"",
    action:""
}

const addAction=(e)=>{
    arg.n1=document.getElementsByClassName("result")[0].value;
    switch (e.target.value) {
        case '/':{
            arg.action=divide;
            break;
        }
        case 'X':{
            arg.action=multiply;
            break;
        }         
        case '+':{
            arg.action=add;
            break;
        }
        case '-':{
            arg.action=sub;
            break;
        }   
        default:
            break;
        }
        document.getElementsByClassName("result")[0].value="";
}

const calc=()=>{
    arg.n2=document.getElementsByClassName("result")[0].value;
    if(arg.n2=="")
    {
        document.getElementsByClassName("result")[0].value="Fill all the req!";
        throw ("Fill all the req!");
    }
    arg.n1=equals(parseInt(arg.n1),parseInt(arg.n2),arg.action);
    clearArg();
}
const clearArg=()=>{
    arg.n2="";
    arg.action="";
    document.getElementsByClassName("result")[0].value=arg.n1;

}
const addNum=(e)=>{
    if(document.getElementsByClassName("result")[0].value=="Fill all the req!")
        document.getElementsByClassName("result")[0].value="";
    document.getElementsByClassName("result")[0].value+=e.target.value;
}
const deleteResult=()=>{
    document.getElementsByClassName("result")[0].value="";
}

document.getElementsByName('equal')[0].addEventListener('click',calc);
document.getElementsByName('multi')[0].addEventListener('click',addAction);
document.getElementsByName('divide')[0].addEventListener('click',addAction);
document.getElementsByName('minus')[0].addEventListener('click',addAction);
document.getElementsByName('plus')[0].addEventListener('click',addAction);
document.getElementsByName("delete")[0].addEventListener('click',deleteResult);
let nums=document.getElementsByName("num");
    nums.forEach(num => {
        num.addEventListener("click",addNum);
    });