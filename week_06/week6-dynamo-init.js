var diaryEntries = [];

class BlogEntry {
  constructor(category, date, title, post) {
    this.categoria = {};
    this.categoria.S = category;
    this.dia = {};
    this.dia.N = new Date(date).getTime().toString(); console.log(new Date(date).valueOf().toString());
    this.titulo = {};
    this.titulo.S = title;
    if (post != null) {
        this.postagem = {};
        this.postagem.S = post.toString();
    }
  }
}


diaryEntries.push(new BlogEntry('personal', 'July 24 2019', 'First post', 'Description 1'));
diaryEntries.push(new BlogEntry('personal', 'August 13 2020', 'Second diary post','Description 2'));
diaryEntries.push(new BlogEntry('personal', 'September 17 2020', 'Third post', 'Description 3'));
diaryEntries.push(new BlogEntry('personal', 'October 12 2020', 'Another post, the 4th', 'Description 4'));

console.log(diaryEntries);

// PART 2----------------------------------------------------------------------------------------

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {};

params.TableName = "diary1";


for(var i = 0; i < diaryEntries.length; i++) {
  params.Item = diaryEntries[i]; 
  dynamodb.putItem(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log("*****"); console.log(data);           // successful response
  });
}