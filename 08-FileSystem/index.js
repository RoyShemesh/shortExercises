const fs=require("fs")
const path = require("path")
const os = require("os");



let found=false;
const findTreasureSync=(roomPath)=> {
    let skelton = fs.readdirSync(roomPath);
    skelton.forEach(check => {
        if(check.endsWith('.json')&&!found)
        {
            // openChestSync(`${roomPath}/${check}`)
            openChestSync((path.join(roomPath,check)));
        }
    });
}


const openChestSync=(chestPath)=> {
    try {
        let clue=JSON.parse(fs.readFileSync(chestPath).toString().trim());
        if(clue.treasure!==undefined)
        {
            console.log(chestPath);
            console.log("found the treasure!")
            drawMapSync("treasure!")
            found=true;
            return;
        }
        drawMapSync(chestPath);
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
    fs.appendFileSync("./treasureMap.txt", currentRoomPath+os.EOL);
}
fs.writeFileSync(`./treasureMap.txt`,(''));
findTreasureSync(`./maze`);
    