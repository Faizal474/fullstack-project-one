import express from "express";

const server = express();
server.use("/",(req,res)=>{
    res.send("hello wrold from express!")

});
server.listen("8080","0.0.0.0",()=>{
    console.log("server listen on http://0.0.0.0:8080");
});
