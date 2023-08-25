const express = require('express');
const router = express.Router();
const assetController = require("../../controllers/assetsController");
const saveOrderController = require("../../controllers/saveOrderController");

router
  .get("/getColors", assetController.getColors)
  .get("/getGenders", assetController.getGenders)
  .get("/getSizes", assetController.getSizes)
  .get("/getTextilType", assetController.getTextilType)
  .post('/saveOrder', saveOrderController.saveOrder)
  
  module.exports = router;