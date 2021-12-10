const AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});

const docClient = new AWS.DynamoDB.DocumentClient();

// agregar datos
// docClient.put({
//     TableName: 'prueba_table1',
//     Item: {
//         user_id: 'bb',
//         time: 2,
//         title: 'changed title',
//         content: 'changed content'
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// actualizar
// docClient.update({
//     TableName: 'prueba_table1',
//     Key: {
//         user_id: 'bb',
//         time: 1
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t': "Updated title"
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// borrar datos
// docClient.delete({
//     TableName: 'prueba_table1',
//     Key: {
//         user_id: 'bb',
//         time: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// agregar varios datos delete y puts
// docClient.batchWrite({
//     RequestItems: {
//         'prueba_table1': [
//             {
//                 DeleteRequest: {
//                     Key: {
//                         user_id: 'bb',
//                         time: 2
//                     }
//                 }
//             },
//             {
//                 PutRequest: {
//                     Item: {
//                         user_id: '11',
//                         time: 1,
//                         title: 'Title 11',
//                         content: 'Content 11'
//                     }
//                 }
//             },
//             {
//                 PutRequest: {
//                     Item: {
//                         user_id: '22',
//                         time: 2,
//                         title: 'Title 22',
//                         content: 'Content 22'
//                     }
//                 }
//             }
//         ]
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });