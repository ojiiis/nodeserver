const {ojox} = require("ojox")
const app = ojox()
app.get("/",(req,res)=>{
res.send(`home page \r\n\r\n${JSON.stringyfy(req.query)}`);
});
app.post("/",(req,res)=>{
res.send(JSON.stringyfy(req.body))
});
app.post("/file",(req,res)=>{
res.send(JSON.stringyfy(req.files))
});

app.listen(220,()=>console.log("working"))
