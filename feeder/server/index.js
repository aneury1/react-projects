const path = require('path');
const express= require('express');
const app = express();
const server = require('http').createServer(app);
const mongodbClient =require('./mongodb').client;



app.use(express.static(path.join(__dirname, "public")));////to save data.
server.listen(8080, function(){
    console.log("Server running om port 8080");
});