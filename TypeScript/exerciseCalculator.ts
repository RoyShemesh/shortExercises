interface WorkOutSol{ periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: 'You are the best!'|'not too bad but could be better'|'You are suck...',
    target: number,
    average: number }

    export function checkYourWorkOutRoutine(workOuts:number[],target:number):WorkOutSol{
        const periodLength=workOuts.length;
        const trainingDays=workOuts.filter(dayTime=>dayTime!==0).length;
        let avgAll=0;
        workOuts.forEach(dayTime => {
            avgAll+=dayTime;
        });
        avgAll/=workOuts.length;
        const success=avgAll>target;
        if(success)
        {
            return{periodLength,trainingDays,success,rating:3,ratingDescription:'You are the best!',target,average:avgAll};
        }
        if(avgAll===target){
            return{periodLength,trainingDays,success,rating:2,ratingDescription:'not too bad but could be better',target,average:avgAll};
        }
        return{periodLength,trainingDays,success,rating:1,ratingDescription:'You are suck...',target,average:avgAll};
    }

    console.log(checkYourWorkOutRoutine([3, 0, 2, 4.5, 0, 3, 1]
,2        ));
    

    