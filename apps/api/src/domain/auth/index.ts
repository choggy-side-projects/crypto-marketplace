import { Router } from "express";
import { confirmForgotPassword } from "./routes/confirmForgotPassword";
import { confirmRegister } from "./routes/confirmRegister";
import { forgotPassword } from "./routes/forgotPassword";
import { login } from "./routes/login";
import { register } from "./routes/register";

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/register", register);
authRoutes.post("/register/confirm", confirmRegister);
authRoutes.post("/forgotpassword", forgotPassword);
authRoutes.post("/forgotpassword/confirm", confirmForgotPassword);

export { authRoutes };
