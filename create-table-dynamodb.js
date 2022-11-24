
const AmazonDaxClient = require('amazon-dax-client');
var AWS = require("aws-sdk");

var region = "ap-south-1";

AWS.config.update({
  region: region
});

var dynamodb = new AWS.DynamoDB() //low-level client

var tableName = "sample";

var params = {
    TableName : tableName,
    KeySchema: [       
        { AttributeName: "rollno", KeyType: "HASH"},  //Partition key
        { AttributeName: "enrollno", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "rollno", AttributeType: "N" },
        { AttributeName: "enrollno", AttributeType: "N" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});