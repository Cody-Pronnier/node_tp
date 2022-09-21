var express = require("express");
var server = express();

server.listen(3000);

server.use("/", function(requete, reponse){
    console.log("Hello serveur");
    console.log(requete.path);
    reponse.end("Hello Cody");
})