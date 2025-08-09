var express = require('express');
var app = express();
var fs = require('fs');
const PORT = 8080;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const fileContent = fs.readFileSync('blogList.json','utf8');
let blogList = JSON.parse(fileContent);
//var  = [];
const fileName = 'blogList.json';


if(!fs.existsSync(fileName)){
    fs.writeFileSync('blogList.json',JSON.stringify(blogList),'utf8');
}else{
    const data = fs.readFileSync('blogList.json','utf-8');
    blogList = JSON.parse(data);
}

function loadData(){
    
    const fileContent = fs.readFileSync('blogList.json','utf8');
    let existingItems = JSON.parse(fileContent);
    blogList.push(...existingItems);
    fs.writeFileSync('blogList.json',JSON.stringify(blogList,null,2),'utf8');
}

app.get('/',(req,res)=>{
    res.json(blogList);
})

app.post('/posts', (req, res) => {
  // Extract data sent from the form
  const { title, content } = req.body;
  blogList.push(req.body);
  loadData();
  
  // Do something with the data, e.g., store in a database
  // For demonstration, echo the data back as a JSON response:
  res.json({
    success: true,
    message: 'Data received successfully!',
    data: {
      title,
      content
    }
  });
  console.log("data received");
});



app.listen(PORT, function(){
    console.log("The API server is up");
});