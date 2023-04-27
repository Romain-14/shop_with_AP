import { writeFile, readFileSync, writeFileSync } from "fs";

import formidable from "formidable";
import { v4 as uuidv4 } from "uuid";

export const adminView = (req, res) => {
    res.status(200).render("layout", {
        template: "admin/index",
        component: res.locals.display,
    });
};

export const add = (req, res) => {
    const form = formidable({ uploadDir: "public/img/", keepExtensions: true });
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).send(err);
        }

        const data = {
            id: uuidv4(),
            ...fields,
            photo: files.photo.originalFilename
                ? files.photo.newFilename
                : "no-picture.jpg",
        };

        const currentProducts = res.locals.products;
        currentProducts.push(data);

        writeFile(
            "src/data/product.json",
            JSON.stringify(currentProducts),
            (err) => {
                if (err) res.status(500).send(err);

                res.redirect(301, "/admin");
            }
        );
    });
};
