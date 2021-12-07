import express from 'express';
import { calculateBmi } from './bmiCalculator';
import{checkYourWorkOutRoutine} from './exerciseCalculator';
const app = express();
app.use(express.json())
app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.get('/bmi',(req,res)=>{
    try {
        const {height,weight}=req.query;
        res.send(calculateBmi(Number(height),Number(weight)));
    } catch (error) {
        res.send(error);
    }
});
app.get('/exercises',(req,res)=>{
    try {
        const target:number=req.body.target;
        const daily_exercises:number[]=req.body.daily_exercises;
        if(target===undefined||daily_exercises===undefined)
            throw('parameters missing')
        res.send(checkYourWorkOutRoutine(daily_exercises,target))
        
    } catch (error) {
        res.send((error))
    }
})
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});