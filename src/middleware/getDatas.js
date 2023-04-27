import { readFile } from "fs";

export default (req, res, next) => {
    readFile("src/data/product.json", "utf8", (err, data) => {
        if (err) {
            console.log("error during the process of retrieving file", err);
            return;
        }
        res.locals.products = JSON.parse(data);
        next();
    });
};
