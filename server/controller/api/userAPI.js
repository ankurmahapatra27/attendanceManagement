var AddUser = require('../../model/User');
var Messages = require('../../validation/messages');
var ObjectId = require('mongoose').Types.ObjectId;

function addUser(req, res) {
    var result = {
        status : false
    };
    var reqParam = req.body;
    AddUser.create(reqParam,function (err, response){
        if (response) {
           // result.message = Messages.policeOfficerAdded;
            result.status = true;
            res.json(result);
        }else{
          //  result.message = Messages.policeOfficerAddedFailed;
            res.json(result);
        }
    });
}



module.exports.addUser = addUser;