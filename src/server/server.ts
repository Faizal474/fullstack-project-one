import express from "express";

const server = express();

server.use(express.static("dist"));

server.use("/students", (req, res) => {
    //TODO get data from DB and serve to UI
    const anyvariablename = {students: ["student 1", "student 2", "student 3"]};
    res.send(anyvariablename);
});

server.use("/", (req, res) => {
    res.send("This is coming from / path");
});

server.listen("8080", "0.0.0.0", () => {
    console.info("Express server listening at http://0.0.0.0:8080");
});

