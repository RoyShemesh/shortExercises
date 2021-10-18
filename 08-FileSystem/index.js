const fs=require("fs")
let found=false;
const findTreasureSync=(roomPath)=> {
    let skelton = fs.readdirSync(roomPath);
    skelton.forEach(check => {
        if(check.endsWith('.json')&&!found)
        {
            openChestSync(`${roomPath}/${check}`)
        }
    });
}


const openChestSync=(chestPath)=> {
    // console.log((fs.readFileSync(chestPath)).toString().trim());
    try {
        let clue=JSON.parse(fs.readFileSync(chestPath).toString().trim());
        if(clue.treasure!==undefined)
        {
            console.log(chestPath);
            console.log("found the treasure!")
            found=true;
            return;
        }
        // drawMapSync(chestPath);
        clue=clue.clue;
        return (findTreasureSync(clue));
    }
    catch (error) {
        return false;
    }
    finally{
        return false;
    }
}


const drawMapSync=(currentRoomPath)=> {
    console.log(currentRoomPath)
}
findTreasureSync(`./maze`);