const mysql = require("mysql2")

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'business'
    },
    console.log(`Connected to the classlist_db database.`)
  );
  
  db.connect(function(err){
    if (err) console.log(err)
  });

module.exports= db;