const express = require("express");
const router = express.Router();
const Invoice = require("../models/invoicemodel");

router.get("/", async (req, res) => {
  try {
    const invoice = await Invoice.find();
    res.json(invoice);
  } catch (err) {
    res.json({ message: err });
  }
});
//Get a Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Invoice.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/add", async (req, res) => {
  const invoice = new Invoice({
    customername: req.body.customername,
    itemcoll: req.body.itemcoll,
    subtotal: req.body.subtotal,
    discount: req.body.discount,
    tax: req.body.tax,
    total: req.body.total,
    price: req.body.price,
    invoicenumber: req.body.invoicenumber,
    ordernumber: req.body.ordernumber,
    invoicedate: req.body.invoicedate,
    terms: req.body.terms,
    duedate: req.body.duedate,
    salesperson: req.body.salesperson,
    status: req.body.status,
    balancedue: req.body.balancedue,
  });
  try {
    const savedInvoice = await invoice.save();
    res.json(savedInvoice);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delete a Post
router.delete("/:postId", async (req, res) => {
  try {
    const removedItem = await Invoice.remove({ _id: req.params.postId });
    res.json(removedItem);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
