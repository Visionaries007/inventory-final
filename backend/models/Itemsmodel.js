const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  returnable: {
    type: Boolean,
    required: true,
  },
  dimension1: {
    type: String,
    required: true,
  },
  dimension2: {
    type: String,
    required: true,
  },
  dimension3: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  upc: {
    type: String,
    required: true,
  },
  ean: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  mpn: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  salesprice: {
    type: Boolean,
    required: true,
  },
  purchaseInfo: {
    type: Boolean,
    required: true,
  },
  sellingprice: {
    type: String,
    required: true,
  },
  spaccount: {
    type: String,
    required: true,
  },
  spdescription: {
    type: String,
    required: true,
  },
  costprice: {
    type: String,
    required: true,
  },
  cpaccount: {
    type: String,
    required: true,
  },
  cpdescription: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Items", ItemSchema);
