const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  sku: {
    type: String,
  },
  quantity: {
    type: String,
  },
  unit: {
    type: String,
  },
  returnable: {
    type: Boolean,
  },
  dimension1: {
    type: String,
  },
  dimension2: {
    type: String,
  },
  dimension3: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  upc: {
    type: String,
  },
  ean: {
    type: String,
  },
  weight: {
    type: String,
  },
  brand: {
    type: String,
  },
  mpn: {
    type: String,
  },
  isbn: {
    type: String,
  },
  salesprice: {
    type: Boolean,
  },
  purchaseInfo: {
    type: Boolean,
  },
  sellingprice: {
    type: String,
  },
  spaccount: {
    type: String,
  },
  spdescription: {
    type: String,
  },
  costprice: {
    type: String,
  },
  cpaccount: {
    type: String,
  },
  cpdescription: {
    type: String,
  },
});
module.exports = mongoose.model("Items", ItemSchema);
