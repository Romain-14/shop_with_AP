export const shopView = (req, res) => {
    res.status(200).render("layout", {
        template: "shop/index",
        datas: res.locals.datas,
    });
};

export const productView = (req, res) => {
    const [product] = res.locals.products.filter(p => p.id === req.params.id);
    
    res.status(200).render("layout", { template: "shop/product", product });
};
