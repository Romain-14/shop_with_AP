import { Router } from "express";
import { shopView, productView } from "../controller/shop.js";

const router = Router();

router.get("/", shopView);
router.get("/product/:id", productView);

export default router;