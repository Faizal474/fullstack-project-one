import express from "express";
// import testData from "./testData.json";
import cors from "cors";
import { connectClient } from "./db";

const router = express.Router();
router.use(cors());

router.use("/certifications/:certificationId", async (req, res) => {
    console.log(req.params.certificationId);
    const client = await connectClient();
    const certification = await client.collection("certifications")
        .findOne({id: req.params.certificationId});
    res.send({certification});
});

router.use("/certifications", async (req, res) => {
    // data from MongoDB
    const client = await connectClient();
    const certifications = await client.collection("certifications")
        .find({})
        .project({_id: 0, courses: 0})
        .toArray();
    res.send({certifications: certifications});
});

export default router;