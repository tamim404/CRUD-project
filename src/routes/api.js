const express = require("express");
const ProductController=require("../controllers/ProductController")
const router = express.Router();


router.post("/CreateData",ProductController.CreateData);

router.get("/ReadData",ProductController.ReadData);

router.get("/ReadDataById/:id",ProductController.ReadDataById);

router.post("/UpdateData/:id",ProductController.UpdateData);

router.get("/DeleteData/:id",ProductController.DeleteData);



module.exports= router;