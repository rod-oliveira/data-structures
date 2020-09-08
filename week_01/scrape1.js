"use strict"
var request = require('request');
var fs = require('fs');
var arr = ['01','02','03','04','05','06','07','08','09','10'];

const baseurl = `https://parsons.nyc/aa/m`;
const baseout = `${__dirname}/data/m`;

for (var i = 0; i < arr.length; i++) {
    // debugging
    console.log(arr[i]);
    console.log(baseurl.concat('',arr[i],'.html'));
    console.log(baseout.concat('',arr[i],'.txt'));
    
    request(baseurl.concat('',arr[i],'.html'), function(error, response, body){
        if (!error && response.statusCode == 200) {
            fs.writeFileSync(baseout.concat('',arr[i],'.txt'), body);
        }else{
            console.log(`GET request failed: ${response.statusCode} "${response.statusMessage}"`)
        }
    });
}
