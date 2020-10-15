const {Client} = require('pg'),
      dotenv = require('dotenv');

// AWS RDS POSTGRESQL INSTANCE
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

// Sample SQL statement to create a table (using ` quotes to break into multiple lines):
let query = `CREATE TABLE aalocation (
    Day varchar(50),
    Hour varchar(50),
    LocationName varchar(50),
    StreetName varchar(50)
);`;

// Sample SQL statement to delete a table:
// let query = "DROP TABLE location;";

client.query(query, (err, res) => {
    if (err){ throw err; }

    console.log(res);
    client.end();
});