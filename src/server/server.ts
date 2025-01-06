import os from "node:os";
import express from "express";
import {PORT, HOST, SERVER_URL} from "./config";

const server = express();

server.set("view engine", "ejs");
server.use(express.static("dist"));

server.use("/students", (req, res) => {
    //TODO get data from DB and serve to UI
    const anyvariablename = {students: ["student 1", "student 2", "student 3"]};
    res.send(anyvariablename);
});

server.use("/", (req, res) => {
    res.render("index", {
        message: "This is from <em>server.ts</em>"
    });
});

server.listen(PORT, HOST, () => {
    console.info(`Express server listening at ${SERVER_URL}. Have ${os.freemem()/1024/1024} free memory available`);
});

