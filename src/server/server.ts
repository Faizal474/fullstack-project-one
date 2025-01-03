import express from "express"
import os from "node:os";
import config from "./config";

const server = express()
server.set("view engine", "ejs");

server.use(express.static("dist"));
server.use("/", (req, res) => {
    res.render("index", {
        content: "this is from <em>express</em>",
    });
});

server.listen(config.PORT, config.HOST, () => {
    console.info(`Express server listening at: ${config.SERVER_URL}`, `Free Memory: ${os.freemem()}`);
})