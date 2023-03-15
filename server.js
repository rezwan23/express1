const express = require('express');

const app = express();

const namesRouter = require('./router/names.router');


app.use((req, res, next) => {
    const date = Date.now();
    console.log(`${req.method} - ${req.url}`)
    next();
    const delta = Date.now() - date;
    console.log(delta);
})

app.use(express.json());

app.use('/names', namesRouter);




app.get('/', (req, res) => {
    res.send({id : 1, name : 'Ghani'})
})


app.listen(3000, ()=>{
    console.log('App silteing on 3000');
})