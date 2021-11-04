var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var parser= bodyParser.urlencoded({extended : false })
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(3000)
app.get("/",(req,res)=>{
    res.render("trangchu")
})
var didong = ["Android","Ios","Samsung","Apple","Window"];
app.post('/getNotes',(req,res)=>{
    res.send(didong)
})
app.post('/add',parser,(req,res)=>{
    var newNote= req.body.noDD;
    didong.push(newNote);
    res.send(didong)
})
app.post('/delete',parser,(req,res)=>{
    var xoa = req.body.XoaId;
    console.log(xoa);
    didong.splice(xoa,1)
    res.send(didong)
})