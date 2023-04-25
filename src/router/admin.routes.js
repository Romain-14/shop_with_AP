import { Router } from "express";

import { adminView } from "../controller/admin.js";
import displayHandler from "../middleware/displayHandler.js";

const router = Router();

router.get("/", displayHandler, adminView);
router.get("/product/add", displayHandler, adminView);

export default router;
