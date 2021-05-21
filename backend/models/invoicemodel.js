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
      itemn: {
        _id: {
          type: String,
        },
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
      },
    },
  ],
});
module.exports = mongoose.model("Invoice", InvoiceSchema);
