
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})


// app.get('/services', function(req, res){
//     res.sendFile(__dirname + "/services.html");
// })


// app.get('/doctors', function(req, res){
//     res.sendFile(__dirname + "doctors.html")
// })


// app.get('/aboutus', function(req, res){
//     res.sendFile(__dirname + "aboutus.html")
// })


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})