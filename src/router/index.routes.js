import { Router } from "express";

import { homeView } from "../controller/home.js";
import shopRouter from "./shop.routes.js";
import adminRouter from "./admin.routes.js";

const router = Router();

router.get("/", homeView);

router.use("/shop", shopRouter);
router.use("/admin", adminRouter);

export default router;
