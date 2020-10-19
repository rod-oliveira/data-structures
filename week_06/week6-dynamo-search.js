var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "diary1",
    KeyConditionExpression: "#ct = :categoryName and dia between :minDate and :maxDate", // the query expression
    ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
        "#ct" : "categoria"
    },
    ExpressionAttributeValues: { // the query values
        ":categoryName": {S: "personal"},
        ":minDate": {N: new Date("January 1, 2010").valueOf().toString()},
        ":maxDate": {N: new Date("September 1, 2020").valueOf().toString()}
    }
};

dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});