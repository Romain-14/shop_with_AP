import { Router } from "express";

import { adminView, add } from "../controller/admin.js";
import displayHandler from "../middleware/displayHandler.js";

const router = Router();

router.get("/", displayHandler, adminView);
router.get("/product/add", displayHandler, adminView);

router.post("/product/add", add);

export default router;
