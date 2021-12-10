const AWS=require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const dynamoDb=new AWS.DynamoDB();

//  la lista de tablas que hay
// dynamoDb.listTables( {}, (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// describir la tabla
// dynamoDb.describeTable({
//     TableName:"prueba_table"
// }, (err, data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(JSON.stringify(data, null,2))
//         }
// })

// crear tabla
dynamoDb.createTable({
        TableName:"prueba_table1",
        AttributeDefinitions:[
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName:"time",
            AttributeType:"N"
        }
        ],
        KeySchema:[
            {
                AttributeName: "user_id",
                KeyType: "HASH"
            },
            {
                AttributeName:"time",
                KeyType:"RANGE"
            }
        ],
        ProvisionedThroughput:{
            ReadCapacityUnits:1,
            WriteCapacityUnits:1
        }
    }, (err, data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(JSON.stringify(data, null,2))
            }
    })

// actualizar tabla
// dynamoDb.updateTable({
//         TableName:"tb_note",
//         ProvisionedThroughput:{
//             ReadCapacityUnits:1,
//             WriteCapacityUnits:1
//         }
//     }, (err, data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(JSON.stringify(data, null,2))
//             }
//     })

// borrar tabla
// dynamoDb.deleteTable( {
//     TableName:"tb_note"
// }, (err, data)=>{
//                 if(err){
//                     console.log(err)
//                 }else{
//                     console.log(JSON.stringify(data, null,2))
//                 }
//         })