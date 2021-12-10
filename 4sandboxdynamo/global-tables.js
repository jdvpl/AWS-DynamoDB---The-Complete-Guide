const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'td_notes_test',
    Item: {
        user_id: 'ABC',
        time: 5,
        title: 'ABC title',
        content: 'ABC content'
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log('Put operation successful in', AWS.config.region);

        setTimeout(()=>{
            AWS.config.update({ region: 'eu-central-1' });

            docClient.get({
                TableName: "td_notes_test",
                Key: {
                    user_id: 'ABC',
                    time: 5
                }
            }, (err, data)=>{
                if(err) {
                    console.log(err);
                } else {
                    console.log('Getting the item from', AWS.config.region);
                    console.log(data);
                }
            });
        }, 1000);
    }
});