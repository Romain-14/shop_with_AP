import { getRandomInteger } from "../utils/index.js";

export const homeView = (req, res) => {
    const datas = res.locals.datas;
    const randomProduct = datas[getRandomInteger(0, datas.length - 1)];

    res.status(200).render("layout", { template: "home", data: randomProduct });
};
