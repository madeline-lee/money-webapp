const mysql = require("mysql");

let params = {
    host:"localhost",
    user:'root',
    password:'root',
    database: 'nusmoney'
};

mysqlConnection = mysql.createConnection(params);

mysqlConnection.connect((err) => {
    if (err) {
        console.log("Failed to connect");
    }
    else{
        console.log("Connection successful");
    }
});

module.exports = mysqlConnection;


