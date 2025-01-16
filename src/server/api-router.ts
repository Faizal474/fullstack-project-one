import express from "express";
// import testData from "./test-data.json";
import cors from "cors";
import {connectClient} from "./db";

const router = express.Router();

router.use(cors());

router.use("/certifications/:certificationId", async (req, res) => {
    const dbclient = await connectClient();
    const data = await dbclient.collection("certifications")
        .findOne({id: req.params.certificationId});
    res.send(data);
});

router.use("/certifications", async (req, res) => {
    // res.send({certifications: testData})
    // fetch data from DB
    let dbclient = await connectClient();
    let data = await dbclient.collection("certifications")
        .find({})
        .project({_id: 0, courses: 0})
        .toArray()
    res.send({certifications: data});
});

export default router;