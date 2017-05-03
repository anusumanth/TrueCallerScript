#!/usr/bin/env node
var connection = require('./dbConnection');
(function(){
    var sync = {};
    exports.dbSync = sync.dbSync = function(){
        //your logic to create a report
        var mdn = 34374;
        var name;
        connection.query('SELECT Name from AllContacts WHERE MDN=?',mdn,function(err,rows){
        console.log(rows);
            if(rows.length != 0){
                console.log(rows[0].Name);
                name= rows[0].Name;
                connection.query('SELECT Name from Contacts WHERE MDN=?',mdn,function(err,rows){
                console.log(rows);
                if(rows.length != 0){
                connection.query('UPDATE Contacts Name=? WHERE MDN=?',[name,mdn],function(err,rows){
                    if(!err){
                        console.log("Contact table updated");
                    }
                })
            }else{
                    connection.query('INSERT INTO Contacts (Name,MDN) VALUES (?,?)',[name,mdn],function(err,rows){
                    if(!err){
                        console.log("Contact created");
                    }
                })
            }
        });
            }
        });
        //console.log("hi");
    };

    if (!module.parent) {
        sync.dbSync();
    }
})();