import express from "express";

const router = express.Router();

router.use("/login", (req, res) => {
    res.send("hello world from admin login");
});

export default router;