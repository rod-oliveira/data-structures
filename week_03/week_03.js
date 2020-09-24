"use strict"

// dependencies
const fs = require('fs'),
      querystring = require('querystring'),
      request = require('request'),
      async = require('async'),
      dotenv = require('dotenv');

// TAMU api key
dotenv.config();
const API_KEY = process.env.TAMU_KEY;
const API_URL = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx'

// // geocode addresses from last week's assignment
let meetingsData = [];
let content = fs.readFileSync('data/m09_week_02.txt','utf8').split('\n');

// eachSeries in the async module iterates over an array and operates on each item in the array in series
async.eachSeries(content, function(value, callback) {
    let query = {
        streetAddress: value,
        city: "New York",
        state: "NY",
        apikey: API_KEY,
        format: "json",
        version: "4.01"
    };

    // construct a querystring from the `query` object's values and append it to the api URL
    let apiRequest = API_URL + '?' + querystring.stringify(query);

    request(apiRequest, function(err, resp, body) {
        if (err){ throw err; }

        let tamuGeo = JSON.parse(body);
        console.log(tamuGeo['FeatureMatchingResultType'], apiRequest);
        meetingsData.push(tamuGeo);
    });

    // sleep for a couple seconds before making the next request
    setTimeout(callback, 2000);
}, function() {
    fs.writeFileSync('data/locations.json', JSON.stringify(meetingsData));
    console.log('*** *** *** *** ***');
    console.log(`Number of meetings in this zone: ${meetingsData.length}`);
    
    let pureData = fs.readFileSync('data/locations.json');
    let places = JSON.parse(pureData);
    let list = [];

    for(var i = 0; i < places.length; i++) {
        
        let jsonElement = {
        address: places[i].InputAddress.StreetAddress.replace(' New York NY ',', New York, NY'),
        latLong: {lat: places[i].OutputGeocodes[0].OutputGeocode.Latitude, 
                  lng: places[i].OutputGeocodes[0].OutputGeocode.Longitude
                 }
        };
        
        list[i] = jsonElement;
        
    }
    
    console.log(list);

    fs.writeFileSync('data/final.json', JSON.stringify(list, null, 2));
    
});

//use https://beautifier.io/ to make the json file readable
