const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

app.use(express.static(path.join(__dirname,'html/public')))

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/html/coming_soon.html`);
})

app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err)
    else console.log(`Server on ${process.env.PORT} port`)
})