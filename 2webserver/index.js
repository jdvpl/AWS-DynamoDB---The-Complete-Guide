const express = require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'))
const port = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send('holaaslkdjf')
})

app.post('/send', (req, res)=>{
    let body=req.body;
    body.message="Hola "+body.name;

    res.json(body)
})

app.listen(port, ()=>{
    console.log(`escucahdno en el puerto ${port} http://localhost:${port}`)
})
