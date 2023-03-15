const express = require('express');

const namesController = require('../controllers/names.controller');

const namesRouter = express.Router();

namesRouter.use((req, res, next) => {
    if(req.method == 'POST'){
        const data = req.body;
        console.log(data);
        if(!data.hasOwnProperty('id') || !data.id){
            return res.status(400).json({message : 'Invalid Data'})
        }
    }
    
    next();
})

namesRouter.get('/', namesController.getNames)

namesRouter.get('/:id', namesController.getNameById)

namesRouter.post('/', namesController.addName)


module.exports = namesRouter;