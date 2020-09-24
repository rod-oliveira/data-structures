For fhis week's assignment I read last week's file and made a TAMU Geo request with the following code:

Read my file:

let content = fs.readFileSync('data/m09_week_02.txt','utf8').split('\n');

Run the geo request:

async.eachSeries(content, function(value, callback) {
    let query = {
        streetAddress: value,
        city: "New York",
        state: "NY",
        apikey: API_KEY,
        format: "json",
        version: "4.01"
    };
    
    The result of the request above was saved in "locations.json":
    
    function() {
    fs.writeFileSync('data/locations.json', JSON.stringify(meetingsData));
    
    
    I loaded the geo request output file's into "puredata" and looped through it and placed the results into the array "list":
    
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
    
    Then I wrote "final.json" with the contents from "List:
    
    fs.writeFileSync('data/final.json', JSON.stringify(list, null, 2));
    
    End file:
    
    [
  {
    "address": "35 E 125 ST, New York, NY",
    "latLong": {
      "lat": "40.805958",
      "lng": "-73.940763"
    }
  },
  {
    "address": "223 E 117TH ST, New York, NY",
    "latLong": {
      "lat": "40.7982106",
      "lng": "-73.9382769"
    }
  },
  {
    "address": "2126 2ND AVE, New York, NY",
    "latLong": {
      "lat": "40.7927121",
      "lng": "-73.94069"
    }
  },
  {
    "address": "22 E 119TH ST, New York, NY",
    "latLong": {
      "lat": "40.8021458",
      "lng": "-73.9442327"
    }
  }
]
