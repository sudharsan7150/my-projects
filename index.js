import mysql from 'mysql'
import express from 'express'
import url from 'url'

const router = express.Router();
const connection = mysql.createConnection({
    host: "localhost", // "127.0.0.1"
    database: "test",
    user: "admin",
    password: "admin"
});

const app = express();

const PORT = 3000;

app.listen(PORT,()=> {
    console.log('SERVER  :  http://localhost:${PORT}');
    connection.connect((err)=>{
        if (err) throw err;
        console.log("DATABASE CONNECTED");
    })
})

app.use("/all_account", (req, res)=> {
        const sql_query = 'select * from  Bank'
        connection.query(sql_query, (err, result)=> {
        if(err) throw err;
        res.send(result);
    })
})

     app.use("/create_account", (req, res) => {
        const sql_query = "INSERT INTO Bank (name, accno, accbal, phno, branch) VALUES ('sruthi', '105', '3000', '987654231', 'kangeyam')";
        connection.query(sql_query, (err, result) => {
            if (err) throw err;
            res.send(result);
  })
        })

        app.use("/get_account", (req, res) => {
            console.log(req.url);
                var accno = 103 ;
                var queryData = url.parse(req.url, true).query;
                console.log(queryData);
            const sql_query = 'SELECT * FROM Bank WHERE accno = ' + queryData.accno;
            console.log('SELECT * FROM Bank WHERE accno = ' + queryData.accno);
        connection.query(sql_query, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    })


    app.use("/update_account", (req, res)=> {
        const sql_query = 'UPDATE Bank SET accbal = 400 WHERE accbal = 300'
        connection.query(sql_query, (err, result)=> {
          if(err) throw err;
          res.send(result);
    })
})


   app.use("/delete_account", (req, res)=> {
        const sql_query = 'DELETE FROM Bank WHERE accno = 104'
        connection.query(sql_query, (err, result)=> {
           if(err) throw err;
           res.send(result);
    })

})   

   