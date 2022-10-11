const express= require("express");
const path= require("path");// ye sendFile method mai jo file ka path read krne mai help krega.
const bodyParser=require("body-parser")// ye install krna pda npm i body-parser se and ye hame form ka result console mai dikhane mai madad kre ga

const app=express();//let assume kr liya hai taki baar baar express().get and all na likhna pde
const port=2000;
app.use(bodyParser.urlencoded({extended:false}));//using the body-parser method

app.get("/",(req,res)=>{ //these methods are quite similar to CRUD => POST GET PUT DELETE
    // res.send("<h1>Hello World</h1>")
    res.sendFile(path.join(__dirname+"/index.html"));//ye standard method mai file read krne ka express mai, jaise fs(file system) tha node mai read krne ke liye
})

app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})

app.post("/api/v1/login",(req,res)=>{
    res.send("<h1>Done</h1>")
    console.log(req.body);
})

app.listen(port,()=>{
    console.log(`Server is working on port ${port}`);
})
