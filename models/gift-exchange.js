const { BadRequestError } = require("../utils/errors.js");

class GiftExchange {
    static traditional(names) {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        };
        shuffleArray(names);

        let giverReceiver = [];

        for (let i = 0; i < names.length; i++) {
            if (i < names.length - 1) {
                giverReceiver.push(
                    `${names[i]} is giving a gift to ${names[i + 1]}`
                );
            } else {
                giverReceiver.push(
                    `${names[names.length - 1]} is giving a gift to ${names[0]}`
                );
            }
        }
        return giverReceiver;
    }

    static pairs(names) {
        if (names.length % 2 != 0) {
            throw new BadRequestError("Please provide an even number of names");
        }

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        };
        shuffleArray(names);

        let namePair = [];
        for (let i = 0; i < names.length; i++) {
            if (i % 2 == 0) {
                namePair.push([names[i], names[i + 1]]);
            }
        }

        return namePair;
    }
}

module.exports = GiftExchange;
