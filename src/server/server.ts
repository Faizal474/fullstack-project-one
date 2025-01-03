import express from "express"

const server = express()
server.set("view engine", "ejs");

server.use(express.static("dist"));
server.use("/", (req, res) => {
    res.render("index", {
        content: "this is from express",
    });
});
server.listen("8080", "0.0.0.0", () => {
    console.info("Express server listening at http://0.0.0.0:8080");
});