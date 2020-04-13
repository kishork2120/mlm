const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(80,(err)=>{
    if(err) console.log(err)
    else console.log('Server on 80 port')
})