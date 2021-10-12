function checkRightAngle (rib1, rib2 ,rib3)
{
    if(getRib(rib1)+getRib(rib2)==getRib(rib3))
    {
        return true;
    }
    return false;
}

function getRib(rib)
{
    return getSquare(rib,rib);
}

function getSquare(num1,num2)
{
    return num1*num2;
}

if(checkRightAngle(3,4,5))
{
    console.log("right angel");
}
else
{
    console.log("not right angel");
}

