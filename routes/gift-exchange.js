const express = require("express");
const router = express.Router();


router.get("/", async (req, res, next) => {
    res.status(200).json({ v: "8" });
});

router.get("/pairs", async (req, res, next) => {
    res.status(200).json({ ping: "pong" });
});

router.post("/pairs/:parameter", async (req, res, next) => {
    console.log(req.query);
    if(req.query.names.split(", ").length% 2 == 0){
        console.log("Please provide an even amount of names")
    }else{
    res.status(400).json("Please provide an even amount of names");
    }
});

router.get("/traditional", async (req, res, next) => {
    res.status(200).json({ ping: "pong" });
});

router.post("/traditional/:parameter", async (req, res, next) => {
    console.log(req.query);
    res.status(200).json(req.query);
});

module.exports = router;
