import express from "express";
import asyncHandler from "express-async-handler"; // obsługuje błędy przy zapytaniach asynchronicznych
import Product from "../models/productModel.js";

const router = express.Router();

//@desc Fetch all products
//@route GET /api/products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            // case insensitive
            $options: "i",
          },
        }
      : {};
    const products = await Product.find({ ...keyword }); // pobierz wszystkie produkty lub te pasujące do keyword jeśli jest. Returns promise
    // res.status(404);
    // throw new Error("O nie!");
    res.json(products);
  })
);
//@desc Fetch a single product
//@route GET /api/products/:id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    product ? res.json(product) : res.status(404);
    throw new Error("Product not found");
  })
);

export default router;
