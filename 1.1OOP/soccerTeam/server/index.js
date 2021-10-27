const express = require('express');
const app = express();
const port = 8080;
const playerRouter=require("./src/routers/player.js");
const teamRouter=require("./src/routers/team.js");
const { playerHandler } = require('./src/middleware/playerHandler.js');
const{errorHandler}=require('./src/middleware/errorHandler')


// route our app
app.get('/',async function(req, res) {
  res.send('hello world!'); 
});
app.use(express.json());
app.use(express.urlencoded());
app.use('/player',playerHandler, playerRouter);
app.use(errorHandler);


// start the server
app.listen(port, function() {
  console.log('app started');
});
