import express from "express"

const server = express()
server.use(express.static("dist"));
server.use("/", (req, res) => {
    res.send("Hello World!!");
});
server.listen("8080", "0.0.0.0", () => {
    console.info("Express server listening at http://0.0.0.0:8080");
});