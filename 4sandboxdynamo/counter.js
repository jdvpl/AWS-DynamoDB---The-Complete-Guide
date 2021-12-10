const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.update({
    TableName: 'prueba_table1',
    Key: {
        user_id: 'ABC',
        time: 2
    },
    UpdateExpression: 'set #v = #v + :incr',
    ExpressionAttributeNames: {
        '#v': 'views'
    },
    ExpressionAttributeValues: {
        ':incr': 2
    }
}, (err, data)=> {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});