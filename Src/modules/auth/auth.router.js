import {Router} from "express"
const router=Router();
import * as authController from "./auth.controller.js"
import validation from "../../middleware/validation.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
router.post("/register", validation(registerSchema),authController.register);
router.post("/login",validation(loginSchema), authController.login);
export default router;