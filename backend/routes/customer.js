const express = require("express");
const router = express.Router();
const Customer = require("../models/customermodel");

router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (err) {
    res.json({ message: err });
  }
});
//Get a Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Customer.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/add", async (req, res) => {
  const customer = new Customer({
    type: req.body.type,
    salu: req.body.salu,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    companyname: req.body.companyname,
    customerdisplayname: req.body.customerdisplayname,
    customeremail: req.body.customeremail,
    cusworkphone: req.body.cusworkphone,
    cusmobilephone: req.body.cusmobilephone,
    website: req.body.website,
    biladdattension: req.body.biladdattension,
    bilcountry: req.body.bilcountry,
    biladdrestreet1: req.body.biladdrestreet1,
    biladdrestreet2: req.body.biladdrestreet2,
    biladcity: req.body.biladcity,
    bilstate: req.body.bilstates,
    bilzipcode: req.body.bilzipcode,
    bilphone: req.body.bilphone,
    bilfax: req.body.bilfax,
    shipaddattension: req.body.shipaddattension,
    shipcountry: req.body.shipcountry,
    shipaddrestreet1: req.body.shipaddrestreet1,
    shipaddrestreet2: req.body.shipaddrestreet2,
    shipadcity: req.body.shipadcity,
    shipstate: req.body.shipstate,
    shipzipcode: req.body.shipzipcode,
    shipphone: req.body.shipphone,
    shipfax: req.body.shipfax,
    reciveable: req.body.reciveable,
    unusedcredit: req.body.unusedcredit,
  });
  try {
    const savedCustomer = await customer.save();
    res.json(savedCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delete a Post
router.delete("/:postId", async (req, res) => {
  try {
    const removedItem = await Customer.remove({ _id: req.params.postId });
    res.json(removedItem);
  } catch (err) {
    res.json({ message: err });
  }
});
//Update a Post
router.patch("/:postId", async (req, res) => {
  try {
    const updateCustomer = await Customer.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          type: req.body.type,
          salu: req.body.salu,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          companyname: req.body.companyname,
          customerdisplayname: req.body.customerdisplayname,
          customeremail: req.body.customeremail,
          cusworkphone: req.body.cusworkphone,
          cusmobilephone: req.body.cusmobilephone,
          website: req.body.website,
          biladdattension: req.body.biladdattension,
          bilcountry: req.body.bilcountry,
          biladdrestreet1: req.body.biladdrestreet1,
          biladdrestreet2: req.body.biladdrestreet2,
          biladcity: req.body.biladcity,
          bilstate: req.body.bilstates,
          bilzipcode: req.body.bilzipcode,
          bilphone: req.body.bilphone,
          bilfax: req.body.bilfax,
          shipaddattension: req.body.shipaddattension,
          shipcountry: req.body.shipcountry,
          shipaddrestreet1: req.body.shipaddrestreet1,
          shipaddrestreet2: req.body.shipaddrestreet2,
          shipadcity: req.body.shipadcity,
          shipstate: req.body.shipstate,
          shipzipcode: req.body.shipzipcode,
          shipphone: req.body.shipphone,
          shipfax: req.body.shipfax,
          reciveable: req.body.reciveable,
          unusedcredit: req.body.unusedcredit,
        },
      }
    );
    res.json(updateCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
