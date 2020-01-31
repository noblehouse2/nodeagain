const express =require('express');
const handle =require('./handlers');
const db =require('./models');
var cors = require('cors');
var bodyParser = require('body-parser');
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.json({hello: 'world'});
})
//for middlleware  to use error handle
app.use(cors());

// parse application/json
app.use(bodyParser.json());
app.use(handle.notFound);
app.use(handle.errors);
app.listen(port,console.log(`sever start on port ${port}`));