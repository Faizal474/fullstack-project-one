import os from "node:os";
import express from "express";
import config from "./config";
import apiRouter from "./api-router";

const server = express();
server.set("view engine", "ejs");

server.use(express.static("dist"));

server.use("/api", apiRouter);

server.use("/", (req, res) => {
    // res.send("hello world from express");
    res.render("index", {
        message: "This is a message passed from express server to the template",
        html_message: "This is an html message sent from <b>express</b>",
    });
});

server.listen(config.PORT, config.HOST, () => {
    console.log(`some change a server started on ${config.SERVER_URL}`, 
        `Free memory available in the system: ${os.freemem()/1024/1024}`);
});