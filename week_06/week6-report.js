const {Client} = require('pg'),
      dotenv = require('dotenv');

dotenv.config(); 
let db_credentials = {
    host: 'data-structures.ctjjlxj84t5v.us-east-1.rds.amazonaws.com',
    database: 'aa',
    user: 'rodrigo',
    password: process.env.AWSRDS_PW,
    port: 5432,
}

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to query the entire contents of a table: 
//let query = "SELECT * FROM aalocation;";
var query = "SELECT day, hour, locationname, streetname FROM aalocation WHERE day = 'Sunday' and hour = '5';";
//let query = "DELETE * FROM Location;";

client.query(query, (err, res) => {
    if (err){ throw err; }

    console.log(res.rows);
    client.end();
});

