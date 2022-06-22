const express = require("express");
const GiftExchange = require("../models/gift-exchange.js");
const router = express.Router();
const { BadRequestError } = require("../utils/errors");


router.post("/pairs", (req, res, next) => {
    try {
        if (req.body.names == undefined || req.body.names == [] || req.body.names.length<2) {
            throw new BadRequestError("Please provide at least two names");
        }
        let GE = GiftExchange.pairs(req.body.names);
        res.status(200).json(GE);
    } catch (err) {
        next(err);
    }
});

router.post("/traditional", (req, res, next) => {
    try {
        if (req.body.names == undefined || req.body.names == [] || req.body.names.length<2) {
            throw new BadRequestError("Please provide at least two names");
        }

        let GE = GiftExchange.traditional(req.body.names);
        res.status(200).json(GE);
    } catch (err) {
        next(err);
    }
});

module.exports = router;