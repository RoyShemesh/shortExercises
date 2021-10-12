let body=document.getElementById("title");
/* function changeBg(time,color,callback,reject)
{
    body.style.backgroundColor="red";
    if(Math.floor(Math.random()*10)>=5)
    {
        setTimeout(()=>{
            body.style.backgroundColor="green";
            if(Math.floor(Math.random()*10)>=5)
            {
                setTimeout(()=>{
                    body.style.backgroundColor="yellow";
                    if(Math.floor(Math.random()*10)>=5)
                    {
                        console.log("done")
                    }
                    else{
                        console.log(" was rejected");

                    }
                },1000)
            }
            else{
                console.log("yellow was rejected");
                ()=>{
                }
            }
        },1000)
    }
    else{
        console.log("green was rejected");
        ()=>{
        }
    }
}
 */



function changeBg(time,color,callback,onFailure)
{    
    setTimeout(()=>
    {
        let rndNum=Math.floor(Math.random()*10);
        if(rndNum>2){
            body.style.backgroundColor=color;
            console.log(color+" worked")
            callback();
        }
        else{
            onFailure();
        }
    },time)
}


changeBg(1000,"red",()=>{
    changeBg(1000,"blue",()=>{
        changeBg(1000,"pink",()=>{
            changeBg(1000,"purple",()=>{
                changeBg(1000,"green",()=>{
                    changeBg(1000,"black",()=>{
                        changeBg(1000,"orange",()=>{
                            console.log("done")
                        },()=>{
                            console.log("failed with orange")
                        })
                    },()=>{
                    console.log("failed with black")
                    })
                },()=>{
                    console.log("failed with green")
                })
            },()=>{
            console.log("failed with purple")
            })
        },()=>{
            console.log("failed with pink")
        })
    },()=>{
    console.log("failed with blue")
})
},()=>{
    console.log("failed with red")
});
