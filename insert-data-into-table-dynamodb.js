
const AmazonDaxClient = require('amazon-dax-client');
var AWS = require("aws-sdk");

var region = "ap-south-1";

AWS.config.update({
  region: region
});

var ddbClient = new AWS.DynamoDB.DocumentClient() 

var tableName = "sample";


var someData = "Hello Viewer, Welcome To My YouTube Channel".repeat(1);
var pkmax = 2;
var skmax = 2;

for (var ipk = 1; ipk <= pkmax; ipk++)  {

    for (var isk = 1; isk <= skmax; isk++) {
        var params = {
            TableName: tableName,
            Item: {
                "rollno": ipk,
                "enrollno": isk,
                "someData": someData
            }
        };

        //
        //put item

        ddbClient.put(params, function(err, data) {
            if (err) {
               console.error("Unable to write data: ", JSON.stringify(err, null, 2));
            } else {
               console.log("PutItem succeeded");
            }
        });

    }
}