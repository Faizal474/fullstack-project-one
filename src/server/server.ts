import os from "node:os";
import express from "express";
import config from "./config";
import { SERVER_URL } from "./config";
import apiRouter from "./api-router"; 

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.use("/", (req, res) => {
    res.render("index", {
        message: "This is a message passed from <b>Server</b>"
    });
});

server.listen(config.PORT, config.HOST, () => {
    console.log(`server listening on ${SERVER_URL}. The free memory on the system is ${os.freemem()/1024/1024}`);
});