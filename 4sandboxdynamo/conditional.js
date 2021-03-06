const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'prueba_table1',
    Item: {
        user_id: 'ABC',
        time: 2,
        title: 'last Title',
        content: 'last Content'
    },
    ConditionExpression: '#t <> :t',
    ExpressionAttributeNames: {
        '#t': 'time'
    },
    ExpressionAttributeValues: {
        ':t': 2
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});