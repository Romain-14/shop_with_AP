export const adminView = (req, res) => {
    res.status(200).render("layout", {
        template: "admin/index",
        component: res.locals.display,
    });
};
