const ox = require("ojox")
const app = ox()
app.get("/",(req,res)=>{
res.send(`home page \r\n\r\n${JSON.stringyfy(req.query)}`);
});
app.post("/",(req,res)=>{
res.send(JSON.stringyfy(req.body))
});
app.post("/file",(req,res)=>{
res.send(JSON.stringyfy(req.files))
});

app.listen()
