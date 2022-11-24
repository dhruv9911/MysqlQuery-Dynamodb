const AmazonDaxClient = require('amazon-dax-client');
var AWS = require("aws-sdk");

var region = "ap-south-1";

AWS.config.update({
  region: region
});

var dynamodb = new AWS.DynamoDB();  //low-level client

var tableName = "sample";


var params = { 
    TableName : tableName
};


dynamodb.deleteTable(params, function(err, data) {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});