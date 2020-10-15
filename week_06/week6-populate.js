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

let parsedlocations = [
  {day: 'Saturday', hour: '4', locationname: '125 - TWO FOR ONE', streetnae: '35 East 125 Street' },
  {day: 'Tuesday', hour: '6', locationname: 'EAST HARLEM - East Harlem', streetnae: '223 East 117th Street' },
  {day: 'Sunday', hour: '5', locationname: 'GRUPO NUEVA VIDA', streetnae: '2126 2nd Avenue' },
  {day: 'Sunday', hour: '1', locationname: 'HARLEM 1 PM RECOVERY', streetnae: '22 East 119th Street' }
];

async.eachSeries(parsedlocations, function(value, callback) {
    let client = new Client(db_credentials);
    client.connect();

    // When mixing variables into a query, place them in a `values` array and then refer to those 
    // elements within the `text` portion of the query using $1, $2, etc.
    let query = {
      text: "INSERT INTO aalocation VALUES($1, $2, $3, $4)",
      values: [value.address, value.latLong.lat, value.latLong.lng]
    };

    client.query(query, (err, res) => {
        if (err){ throw err; }

        console.log(res);
        client.end();
    });
    setTimeout(callback, 1000);
});