const express = require("express");
const router = express.Router();
const Item = require("../models/Itemsmodel");
//Get All
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
});
//Get a Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Item.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
//Submit a Post
router.post("/add", async (req, res) => {
  const item = new Item({
    type: req.body.type,
    name: req.body.name,
    sku: req.body.sku,
    quantity: req.body.quantity,
    unit: req.body.unit,
    returnable: req.body.returnable,
    dimension1: req.body.dimension1,
    dimension2: req.body.dimension2,
    dimension3: req.body.dimension3,
    manufacturer: req.body.manufacturer,
    upc: req.body.upc,
    ean: req.body.ean,
    weight: req.body.weight,
    brand: req.body.brand,
    mpn: req.body.mpn,
    isbn: req.body.isbn,
    salesprice: req.body.salesprice,
    purchaseInfo: req.body.purchaseInfo,
    sellingprice: req.body.sellingprice,
    spaccount: req.body.spaccount,
    spdescription: req.body.spdescription,
    costprice: req.body.costprice,
    cpaccount: req.body.cpaccount,
    cpdescription: req.body.cpdescription,
  });
  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delete a Post
router.delete("/:postId", async (req, res) => {
  try {
    const removedItem = await Item.remove({ _id: req.params.postId });
    res.json(removedItem);
  } catch (err) {
    res.json({ message: err });
  }
});
//Update a Post
router.patch("/:postId", async (req, res) => {
  try {
    const updateItem = await Item.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          type: req.body.type,
          name: req.body.name,
          sku: req.body.sku,
          quantity: req.body.quantity,
          unit: req.body.unit,
          returnable: req.body.returnable,
          dimension1: req.body.dimension1,
          dimension2: req.body.dimension2,
          dimension3: req.body.dimension3,
          manufacturer: req.body.manufacturer,
          upc: req.body.upc,
          ean: req.body.ean,
          weight: req.body.weight,
          brand: req.body.brand,
          mpn: req.body.mpn,
          isbn: req.body.isbn,
          salesprice: req.body.salesprice,
          purchaseInfo: req.body.purchaseInfo,
          sellingprice: req.body.sellingprice,
          spaccount: req.body.spaccount,
          spdescription: req.body.spdescription,
          costprice: req.body.costprice,
          cpaccount: req.body.cpaccount,
          cpdescription: req.body.cpdescription,
        },
      }
    );
    res.json(updateItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/:postId", async (req, res, next) => {
  try {
    const updateItem = await Item.findOneAndUpdate(
      { _id: req.params.postId },
      {
        $set: {
          type: req.body.type,
          name: req.body.name,
          sku: req.body.sku,
          quantity: req.body.quantity,
          unit: req.body.unit,
          returnable: req.body.returnable,
          dimension1: req.body.dimension1,
          dimension2: req.body.dimension2,
          dimension3: req.body.dimension3,
          manufacturer: req.body.manufacturer,
          upc: req.body.upc,
          ean: req.body.ean,
          weight: req.body.weight,
          brand: req.body.brand,
          mpn: req.body.mpn,
          isbn: req.body.isbn,
          salesprice: req.body.salesprice,
          purchaseInfo: req.body.purchaseInfo,
          sellingprice: req.body.sellingprice,
          spaccount: req.body.spaccount,
          spdescription: req.body.spdescription,
          costprice: req.body.costprice,
          cpaccount: req.body.cpaccount,
          cpdescription: req.body.cpdescription,
        },
      }
    );
    res.json(updateItem);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
