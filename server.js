const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(process.env.PORT,(err)=>{
    if(err) console.log(err)
    else console.log(`Server on ${process.env.PORT} port`)
})