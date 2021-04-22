const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  salu: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  companyname: {
    type: String,
  },
  customerdisplayname: {
    type: String,
  },
  customeremail: {
    type: String,
  },
  cusworkphone: {
    type: String,
  },
  cusmobilephone: {
    type: String,
  },
  website: {
    type: String,
  },
  biladdattension: {
    type: String,
  },
  bilcountry: {
    type: String,
  },
  biladdrestreet1: {
    type: String,
  },
  biladdrestreet2: {
    type: String,
  },
  biladcity: {
    type: String,
  },
  bilstate: {
    type: String,
  },
  bilzipcode: {
    type: String,
  },
  bilphone: {
    type: String,
  },
  bilfax: {
    type: String,
  },
  shipaddattension: {
    type: String,
  },
  shipcountry: {
    type: String,
  },
  shipaddrestreet1: {
    type: String,
  },
  shipaddrestreet2: {
    type: String,
  },
  shipadcity: {
    type: String,
  },
  shipstate: {
    type: String,
  },
  shipzipcode: {
    type: String,
  },
  shipphone: {
    type: String,
  },
  shipfax: {
    type: String,
  },
  reciveable: {
    type: String,
  },
  unusedcredit: {
    type: String,
  },
});
module.exports = mongoose.model("Customer", CustomerSchema);
