const express = require("express");
const mysql = require("mysql2");

// Should be kept as environment variable
const mysqlConfig = {
  host: process.env.MYSQL_DATABASE || "mysql_server",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "secret",
  database: process.env.MYSQL_ROOT_PASSWORD || "mydb",
};

const port = process.env.PORT || 3000;

// Connecting to mysql container
const con = mysql.createConnection(mysqlConfig);
con.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

const app = express();
app.use(express.json())
app.get("/", function (req, res) {
  res.send("Testing my server");
});

//  Creating first table "numbers"
app.get("/create-table", function (req, res) {
  const sql = `
    CREATE TABLE IF NOT EXISTS numbers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      number INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=INNODB;
  `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send("numbers table created");
  });
});

// Adding a random number ti "numbers" table
app.get("/insert", function (req, res) {
  const number = Math.round(Math.random() * 100);
  const sql = `INSERT INTO numbers (number) VALUES (${number})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(`${number} inserted into table`);
  });
});

// Fetching number's table
// app.get("/fetch", function (req, res) {
//   const sql = `USE mydb `;
//   con.query(sql, function (err, result, fields) {
//     console.log(result);
//     if (err) throw err;
//     res.send(JSON.stringify(result));
//   });
// });

app.get('/usemydb',(req,res)=>{
  const sql ='USE mydb';
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
})
//get teacher by id 
app.get('/teacher/:teacherid',(req,res)=>{
  const sql =`SELECT * FROM Teachers WHERE idTeachers=${req.params.teacherid}`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
})
//get class by id 
app.get('/class/:classID',(req,res)=>{
  const sql =`SELECT * FROM Classes WHERE idClasses=${req.params.classID}`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
})
//get pupil by id 
app.get('/pupil/:pupilID',(req,res)=>{
  const sql =`SELECT * FROM Pupils WHERE idPupils=${req.params.pupilID}`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
})
//get subject by id 
app.get('/subject/:subjectID',(req,res)=>{
  const sql =`SELECT * FROM Subjects WHERE idSubjects=${req.params.subjectID}`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
})
app.post('/new/pupil',(req,res)=>{
  const {pupilID,name,classID}=req.body;
  if(!pupilID||!name||!classID)
    res.sendStatus(400)
  else
  {
    const sql =`INSERT INTO Pupils VALUES (${pupilID},'${name}',${classID})`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
  }
})
app.post('/new/teacher',(req,res)=>{
  const {idTeacher,name}=req.body;
  if(!idTeacher||!name)
    res.sendStatus(400)
  else
  {
    const sql =`INSERT INTO Teachers VALUES (${idTeacher},'${name}')`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
  }
})

app.put('/update/pupil/:pupilid',(req,res)=>{
  const pupilID=req.params.pupilid;
  const {classID}=req.body;
  if(!classID)
    res.sendStatus(400);
  else
  {
    const sql =`UPDATE Pupils SET Classes_idClasses =${classID} WHERE idPupils =${pupilID}`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
  }
})

app.put('/update/class/:classid',(req,res)=>{
  const classid=req.params.classid;
  const {name}=req.body;
  if(!name)
    res.sendStatus(400);
  else
  {
    const sql =`UPDATE Classes SET name='${name}' WHERE idClasses=${classid}`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
  })
  }
})

app.delete('/remove/pupil/:pupilID',(req,res)=>{
  const pupilID=req.params.pupilID;
  const sql =`DELETE FROM Pupils WHERE idPupils=${pupilID}`
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
      res.send(JSON.stringify(result))
})})

app.delete('/remove/class/:classID',(req,res)=>{
  const classID=req.params.classID;
  const sql =`DELETE FROM Classes WHERE idClasses=${classID}`;
  con.query(sql,(err,result,fields)=>{
    if(err) throw err;
    res.send(JSON.stringify(result))
})})
app.listen(port, () => {
  console.log(`running on ${port}`);
});
