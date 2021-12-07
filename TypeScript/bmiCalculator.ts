
export function calculateBmi(height:number,weight:number):string{
    
    height/=100;
    const BMI = weight/(height*height);
    if(BMI>25)
        return ('Overwieght');
    return ('Normal');
}
