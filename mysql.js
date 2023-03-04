var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database:"test"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// query rows in the table

function getacc(acc) {
  console.log('connected')
    let selectQuery = 'SELECT * FROM Bank WHERE accno = 101';    
    let query = mysql.format(selectQuery,["Bank","user", "userName"]);
    // query = SELECT * FROM `Bank` where `user` = 'admin'
    con.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}
getacc(1)


// update accbal

function updateaccbal(accbal) {
  console.log('connected')
    let updateQuery = "UPDATE Bank SET accbal = 300 WHERE accbal = 200";
    let query = mysql.format(updateQuery,["admin","accbal","data.value","user","data.user"]);
    // query = UPDATE `admin` SET `accbal`='200' WHERE `name`='admin'
    con.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows updated
        console.log(response.affectedRows);
    });
}
updateaccbal(2);


function deleteacc(userName) {
  console.log('connected')
    let deleteQuery = "DELETE from Bank where accno = 105";
    let query = mysql.format(deleteQuery, ["Bank", "admin", userName]);
    // query = DELETE from `Bank` where `user`='admin';
    con.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows deleted
        console.log(response.affectedRows);
    });
}
deleteacc(3);

