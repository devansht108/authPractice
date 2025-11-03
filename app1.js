const express=require('express');
const cookieParser=require('cookie-parser');

const app=express();

app.use(cookieParser());

app.get("/",(req,res)=>{
  res.cookie("name","Devansh");
  res.send("Cookie has been set");
})

app.get("/read",(req,res)=>{
  res.send("Reading cookie");
  console.log(req.cookies);
})

app.listen(3000);