const path = require('path');

function getMessage(req, res){

    const filePath = path.join(__dirname, '..', 'public', 'pic.png')
    res.sendFile(filePath);
}



module.exports = {
    getMessage
}