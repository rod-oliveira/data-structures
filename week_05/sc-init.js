var blogEntries = [];

class BlogEntry {
  constructor(primaryKey, address, latitude, longitude, borough, locationname, weekday) {
    this.pk = {};
    this.pk.S = primaryKey.toString();
    this.address = {};
    this.address.S = address;
    this.lat = {};
    this.lat.S = latitude.toString();
    this.long = {};
    this.long.S = longitude.toString();
    if (borough != null) {
      this.bo = {};
      this.bo.S = borough;
    }
    if (locationname != null) {
      this.ln = {};
      this.ln.S = locationname;
    }
    if (weekday != null) {
      this.wd = {};
      this.wd.S = weekday;
    }
  }
}

blogEntries.push(new BlogEntry(0, '1155 5th avenue, NY', "40.805958", "-73.940763"));
blogEntries.push(new BlogEntry(1, '1155 6th avenue, NY', "40.805958", "-73.940763","Queens","The Happy Place","Monday"));
blogEntries.push(new BlogEntry(2, '1155 7th avenue, NY', "40.805958", "-73.940763","Manhattan"));

console.log(blogEntries);

// PART 2----------------------------------------------------------------------------------------

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};

params.TableName = "blog1";


for(var i = 0; i < blogEntries.length; i++) {
  params.Item = blogEntries[i]; 
  dynamodb.putItem(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log("*****"); console.log(data);           // successful response
  });
}
