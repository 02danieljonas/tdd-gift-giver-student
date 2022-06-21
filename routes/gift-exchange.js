const express = require("express");
const GiftExchange = require("../models/gift-exchange.js");
const router = express.Router();

// router.get("/", async (req, res, next) => {
//     res.status(200).json({ v: "8" });
// });

// router.get("/pairs", async (req, res, next) => {
//     res.status(200).json({ ping: "pong" });
// });

// router.get("/traditional", async (req, res, next) => {
//     res.status(200).json({ ping: "pong" });
// });

router.post("/pairs/:parameter", (req, res, next) => {
    // console.log(req.body.names);
    if (req.body.names.length % 2 == 0) {
        let GE = GiftExchange.pairs(req.body.names);
        console.log(GE);
        res.status(200).json(GE);
    } else {
        console.error("Please provide an even amount of names")
        res.status(400).json("Please provide an even amount of names");
    }
});

router.post("/traditional/:parameter", (req, res, next) => {
    let GE = GiftExchange.traditional([
        "me",
        "you",
        "them",
        "us",
        "her",
        "him",
        "they",
        "y'all",
    ]);
    // console.log(GE);
    res.status(200).json(GE);
});

module.exports = router;
