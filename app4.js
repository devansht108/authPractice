const express=require('express');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');

const app=express();
app.use(cookieParser());

app.get("/",(req,res)=>{
  const token=jwt.sign({email:"devansh21@gmail.com"},"HareKrishna");
  res.cookie("token",token);
  res.send("Cookie saved!");
})

app.get("/read",(req,res)=>{
  const data=jwt.verify(req.cookies.token,"HareKrishna");
  console.log(data);
})

app.listen(3000);

