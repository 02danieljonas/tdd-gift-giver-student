const express = require("express");
const morgan = require("morgan");
const giftExchangeRouter = require("./routes/gift-exchange.js");
const { NotFoundError } = require("./utils/errors");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/gift-exchange", giftExchangeRouter);

app.get("/", async (req, res, next) => {
    res.status(200).json({ ping: "pong" });
});

//handles all 404 errors that weren't matched by a route
app.use((req, res, next) => {
    return next(new NotFoundError());
});

//Generic error handler - anything that is unhadled will be handled here
app.use((error, req, res, next) => {
    const status = error.status || 400;
    const message = error.message;
    return res.status(status).json({
        error: { message: message, status },
    });
});

// app.get("/gift-exchange", async (req, res, next) => {
//     res.status(200).json({ ping: "pong" });
// });

module.exports = app;
