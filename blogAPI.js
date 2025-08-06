var express = require('express');
var app = express();
var fs = require('fs');
const PORT = 8080;

var blogList = [];
const fileName = 'blogList.json';


if(!fs.existsSync(fileName)){
    fs.writeFileSync('blogList.json',JSON.stringify(blogList),'utf8');
}else{
    const data = fs.readFileSync('blogList.json','utf-8');
    blogList = JSON.parse(data);
}

app.get('/posts',(req, res)=>{

    res.json(blogList);
});

app.listen(PORT, function(){
    console.log("The API server is up");
});