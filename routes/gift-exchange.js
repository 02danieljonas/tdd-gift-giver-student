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

router.post("/pairs", (req, res, next) => {
    try {
        let GE = GiftExchange.pairs(req.body.names);
        console.log(GE);
        res.status(200).json(GE);
    } catch (err) {
        next(err);
    }
});

router.post("/traditional", (req, res, next) => {
    try {
        console.log(req.body.names);
        if (req.body.names == undefined || req.body.names == []) {
            throw new BadRequestError("names is either undefined or empty");
        }
        let GE = GiftExchange.traditional(req.body.names);
        res.status(200).json(GE);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
