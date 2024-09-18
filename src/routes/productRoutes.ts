import { Router } from "express";
import { addProduct, getProducts } from "../controllers/productController";

const router = Router();

// Rota para obter a lista de produtos
router.get("/", getProducts); // Rota para obter produtos

// Rota para criar um novo produto
router.post("/", addProduct); // Rota para cadastrar um produto

export default router;
