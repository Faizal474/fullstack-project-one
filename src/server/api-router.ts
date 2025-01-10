import express from "express";

const router = express.Router();

router.use("/certifications", (req, res) => {
    res.send({certifications: [
        {
            name: "fullstack development",
            duration: "6 months",
        },
        {
            name: "web develpment",
            duration: "3 months",
        },
        {
            name: "devops",
            duration: "2 months"
        }
    ]});
});


router.use("/students", (req, res) => {
    res.send({certifications: [
        {
            name: "fullstack development",
            duration: "6 months",
        },
        {
            name: "web develpment",
            duration: "3 months",
        },
        {
            name: "devops",
            duration: "2 months"
        }
    ]});
});

export default router;