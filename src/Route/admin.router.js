import { Router } from "express";
import { loginAdmin } from "../controller/admin.controller.js";
const router = Router();

router.route("/login").post(loginAdmin);

export default router;
