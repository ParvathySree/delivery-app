import express from "express";
import { getGroceries } from "../controllers/groceryController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const groceryRouter = express.Router();

groceryRouter.get("/", authenticateToken, getGroceries);

export default groceryRouter;
