import { getRandomInteger } from "../utils/index.js";

export const homeView = (req, res) => {
    const datas = res.locals.products;
    const product = datas[getRandomInteger(0, datas.length - 1)];
    console.log(product)

    res.status(200).render("layout", { template: "home", product });
};
