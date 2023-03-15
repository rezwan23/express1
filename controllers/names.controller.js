const model = require('../models/names.model');


function addName (req, res) {
    model.push(req.body);
    res.send({message : 'Added'})
}


function getNames(req, res){
    res.send(model);
}

function getNameById(req, res){
    if(req.params.id >= model.length){
        res.status(404).send({message : 'Not found'});
    }else{
        res.send(model[req.params.id]);
    }
}


module.exports = {
    addName,
    getNames,
    getNameById
}