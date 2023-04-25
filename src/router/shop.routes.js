import { Router } from "express";
import { shopView, productView } from "../controller/shop.js";

const router = Router();

router.get("/", shopView);
router.get("/product", productView);

export default router;
