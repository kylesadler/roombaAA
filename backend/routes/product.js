var express = require('express');
var router = express.Router();
var productApi = require('../api/product.js');

router.get("/", (request, response) => {
  console.log("GET api/product/");
  productApi.getAllProducts(request, response);
});

router.get("/:id", (request, response) => {
  console.log("GET api/product/" + request.params.id);
  productApi.getProduct(request, response, request.params);
});

router.post("/", (request, response) => {
  console.log("POST api/product/");
  productApi.addProduct(request, response);
});

router.patch("/:id", (request, response) => {
  console.log("PATCH api/product/" + request.params.id);
  productApi.updateProduct(request, response);
});

router.delete("/:id", (request, response) => {
  console.log("DELETE api/product/" + request.params.id);
  productApi.deleteProduct(request, response);
});

module.exports = router;
