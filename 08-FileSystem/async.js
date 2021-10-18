const fs=require("fs")

function findTreasure(roomPath, cb) {
    fs.readdir(roomPath,(err,files)=>{
        if(err)
            return;
        files.forEach(check => {
            if(check.endsWith('.json'))
            {
                cb(`${roomPath}/${check}`,)
            }            
        });
    }
    );
}


function openChest(chestPath, cb) {
    let clue = fs.lstat(chestPath,(err,data)=>{
        if (err)
            return;
                console.log(data);
    })
}


function drawMapSync(currentRoomPath, cb) {

}

findTreasure(`./maze`,openChest)