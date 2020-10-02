const {Client} = require('pg'),
      dotenv = require('dotenv'),
      async = require('async'),
      fs = require('fs'),
      querystring = require('querystring'),
      request = require('request');

dotenv.config(); 
let db_credentials = {
    host: 'data-structures.ctjjlxj84t5v.us-east-1.rds.amazonaws.com',
    database: 'aa',
    user: 'rodrigo',
    password: process.env.AWSRDS_PW,
    port: 5432,
}

let locations = fs.readFileSync('data/final.json');
let parsedlocations = JSON.parse(locations);
//console.log(parsedlocations);

async.eachSeries(parsedlocations, function(value, callback) {
    let client = new Client(db_credentials);
    client.connect();

    // When mixing variables into a query, place them in a `values` array and then refer to those 
    // elements within the `text` portion of the query using $1, $2, etc.
    let query = {
      text: "INSERT INTO Location VALUES($1, $2, $3)",
      values: [value.address, value.latLong.lat, value.latLong.lng]
    };

    client.query(query, (err, res) => {
        if (err){ throw err; }

        console.log(res);
        client.end();
    });
    setTimeout(callback, 1000);
});
