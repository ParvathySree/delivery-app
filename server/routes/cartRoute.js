import express from "express";
import { addToCart,removeFromCart,getCartData } from "../controllers/cartController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.post("/add",authenticateToken,addToCart);
cartRouter.post("/remove",authenticateToken,removeFromCart);
cartRouter.post("/get",authenticateToken,getCartData);

export default cartRouter;