const mongoose = require("mongoose");
const InvoiceSchema = new mongoose.Schema({
  customername: {
    type: String,
  },
  subtotal: {
    type: String,
  },
  discount: {
    type: String,
  },
  tax: {
    type: String,
  },
  total: {
    type: String,
  },
  price: {
    type: String,
  },
  invoicenumber: {
    type: String,
  },
  ordernumber: {
    type: String,
  },
  invoicedate: {
    type: String,
  },
  terms: {
    type: String,
  },
  duedate: {
    type: String,
  },
  salesperson: {
    type: String,
  },
  status: {
    type: String,
  },
  balancedue: {
    type: String,
  },
  itemcoll: [
    {
      itemdetail: {
        type: String,
      },
      iden: {
        type: String,
      },
      amount: {
        type: String,
      },
      quantity: {
        type: String,
      },
      rate: {
        type: String,
      },
      decidequantity: {
        type: String,
      },
    },
  ],
});
module.exports = mongoose.model("Invoice", InvoiceSchema);
