import React, { useState } from "react";
import close from "../img/close.svg";
import styled from "styled-components";
import Invoicetable from "../Cards/invoiceitemtable";
import InvoiceTotal from "../Cards/invoicetotal";
import InvoiceReady from "../Cards/InvoiceReady";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
const Invoice = ({ customer, item, invoice, setinvoice, setitem }) => {
  const history = useHistory();
  const termsarr = [
    "Net 15",
    "Net 30",
    "Net 45",
    "Net 60",
    "Due End Of The Month",
    "Due End Of The Next Month",
    "Due on Receipt",
    "Custom",
  ];
  const cust = customer.customer;
  const [itemn, setitemn] = useState("");
  const [status, setstatus] = useState("Confirmed");
  const [balancedue, setbalancedue] = useState("0");
  const [itemdetail, setitemdetail] = useState("1");
  const [quantity, setquantity] = useState(0);
  const [rate, setrate] = useState(0);
  const [amount, setamount] = useState(0);
  const [subtotal, setsubtotal] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [tax, settax] = useState(0);
  const [total, settotal] = useState(0);
  const [decidequantity, setdecidequantity] = useState(0);
  const [itemcoll, setitemcoll] = useState([]);
  const customers =
    cust !== undefined &&
    cust.map((n) => <option key={n._id}>{n.firstname}</option>);
  const term = termsarr.map((n) => <option key={n}>{n}</option>);

  const [price, setprice] = useState(0);
  const [customername, setcustomername] = useState("1");
  const custnamehandler = (e) => {
    setcustomername(e.target.value);
  };
  const [invoicenumber, setinvoicenumber] = useState("");
  const invoicenumberhandler = (e) => {
    setinvoicenumber(e.target.value);
  };
  const [ordernumber, setordernumber] = useState("");
  const ordernumberhandler = (e) => {
    setordernumber(e.target.value);
  };
  const [invoicedate, setinvoicedate] = useState("");
  const invoicedatehandler = (e) => {
    setinvoicedate(e.target.value);
  };
  const [terms, setterms] = useState("1");
  const termshandler = (e) => {
    setterms(e.target.value);
  };
  const [duedate, setduedate] = useState("");
  const duedatehandler = (e) => {
    setduedate(e.target.value);
  };
  const [salesperson, setsalesperson] = useState("");
  const salespersonhanlder = (e) => {
    setsalesperson(e.target.value);
  };
  const [iden, setiden] = useState("hello");
  const newitembuthandler = (e) => {
    e.preventDefault();
    let flag = 0;
    for (let i = 0; i < itemcoll.length; i++) {
      if (itemcoll[i].iden === iden) {
        flag = 1;
        break;
      }
    }
    if (decidequantity <= quantity && decidequantity > 0 && flag === 0) {
      setitemcoll([
        ...itemcoll,
        {
          itemdetail,
          quantity,
          rate,
          amount,
          decidequantity,
          iden,
          key: uuidv4(),
          itemn,
        },
      ]);
      setprice(parseInt(price) + parseInt(amount));
      setsubtotal(parseInt(price) + parseInt(amount));
    } else {
      if (flag === 1) alert("Same Item Cannot Appear Twice");
      else if (parseInt(decidequantity) < 0)
        alert("Quantity Cannot Be Negative");
      else if (parseInt(decidequantity) === 0) alert("Quantity Cannot Be Zero");
      else alert("Quantity is More Than Available");
    }

    setitemdetail("1");
    setquantity(0);
    setdecidequantity(0);
    setrate(0);
    setamount(0);
    setiden("");
  };
  const inputhandler = (e) => {
    e.preventDefault();
    const invoicestruct = {
      customername,
      itemcoll,
      subtotal,
      discount,
      tax,
      total,
      price,
      invoicenumber,
      ordernumber,
      invoicedate,
      terms,
      duedate,
      salesperson,
      status,
      balancedue,
    };
    console.log("hey bhade ka form submited");

    axios
      .post(
        "https://inventory-management-vision.herokuapp.com/invoices/add",
        invoicestruct
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
    for (let i = 0; i < itemcoll.length; i++) {
      if (
        parseInt(itemcoll[i].itemn.quantity) -
          parseInt(itemcoll[i].decidequantity) ===
        parseInt(0)
      ) {
        axios
          .delete(
            `https://inventory-management-vision.herokuapp.com/items/${itemcoll[i].iden}`
          )
          .then((response) => {
            setitem(item.filter((t) => t._id !== itemcoll[i].iden));
          })
          .catch((error) => {
            console.log({ error });
          });
      } else {
        axios
          .put(
            `https://inventory-management-vision.herokuapp.com/items/${itemcoll[i].iden}`,
            {
              type: itemcoll[i].itemn.type,
              name: itemcoll[i].itemn.name,
              sku: itemcoll[i].itemn.sku,
              quantity:
                parseInt(itemcoll[i].itemn.quantity) -
                parseInt(itemcoll[i].decidequantity),
              unit: itemcoll[i].itemn.unit,
              returnable: itemcoll[i].itemn.returnable,
              dimension1: itemcoll[i].itemn.dimension1,
              dimension2: itemcoll[i].itemn.dimension2,
              dimension3: itemcoll[i].itemn.dimension3,
              manufacturer: itemcoll[i].itemn.manufacturer,
              upc: itemcoll[i].itemn.upc,
              ean: itemcoll[i].itemn.ean,
              weight: itemcoll[i].itemn.weight,
              brand: itemcoll[i].itemn.brand,
              mpn: itemcoll[i].itemn.mpn,
              isbn: itemcoll[i].itemn.isbn,
              salesprice: itemcoll[i].itemn.salesprice,
              purchaseInfo: itemcoll[i].itemn.purchaseInfo,
              sellingprice: itemcoll[i].itemn.sellingprice,
              spaccount: itemcoll[i].itemn.spaccount,
              spdescription: itemcoll[i].itemn.spdescription,
              costprice: itemcoll[i].itemn.costprice,
              cpaccount: itemcoll[i].itemn.cpaccount,
              cpdescription: itemcoll[i].itemn.cpdescription,
            }
          )

          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log({ error });
          });
      }
    }

    setcustomername("");
    setitemcoll([]);
    setsubtotal("");
    setdiscount("");
    settax("");
    settotal("");
    setprice("");
    setinvoicenumber("");
    setordernumber("");
    setinvoicedate("");
    setterms("");
    setduedate("");
    setsalesperson("");
    setstatus("");
    setbalancedue("");
    history.push("/displayinvoice");
    window.location.reload(false);
  };
  const CancelHandler = () => {
    history.push("/displayinvoice");
  };
  return (
    <ItemMaking1>
      <Heading12>
        <h3>New Invoice</h3>
        <span>
          <a className="labels" href="/displayinvoice">
            <img src={close} alt="" />
          </a>
        </span>
      </Heading12>
      <div>
        <form onSubmit={inputhandler}>
          <Top>
            <Grider>
              <div className="d1">
                <label htmlFor="name">Customer Name*</label>
              </div>
              <div className="d2">
                <select
                  className="salu"
                  id="customename"
                  placeholder="Select Customer"
                  onChange={custnamehandler}
                  value={customername}
                >
                  <option key={1} value="1" disabled>
                    Select
                  </option>
                  {customers}
                </select>
              </div>

              <div className="d3">
                <label htmlFor="invoicenumber">Invoice Number*</label>
              </div>
              <div className="d4">
                <input
                  onChange={invoicenumberhandler}
                  id="invoicenumber"
                  value={invoicenumber}
                  type="text"
                ></input>
              </div>
              <div className="d5">
                <label htmlFor="ordernumber">Order Number</label>
              </div>
              <div className="d6">
                <input
                  onChange={ordernumberhandler}
                  id="ordernumber"
                  value={ordernumber}
                  type="text"
                ></input>
              </div>
              <div className="d7">
                <label htmlFor="invoicedater">Invoice Date*</label>
              </div>
              <div className="d8">
                <input
                  onChange={invoicedatehandler}
                  id="invoicedate"
                  value={invoicedate}
                  type="text"
                ></input>
              </div>
              <div className="d9">
                <label htmlFor="terms">Terms</label>
                <select
                  className="terms"
                  id="terms"
                  placeholder="Terms"
                  onChange={termshandler}
                  value={terms}
                >
                  <option key={1} value="1" disabled>
                    Select
                  </option>
                  {term}
                </select>
              </div>
              <div className="d11">
                <label htmlFor="duedate">Due Date</label>
                <input
                  onChange={duedatehandler}
                  id="duedate"
                  value={duedate}
                  type="text"
                ></input>
              </div>
              <div className="d13">
                <label htmlFor="salesperson">SalesPerson</label>
              </div>
              <div className="d14">
                <input
                  onChange={salespersonhanlder}
                  id="salesperson"
                  value={salesperson}
                  type="text"
                ></input>
              </div>
            </Grider>
            <AddItemBut>
              <Table>
                <table>
                  <thead>
                    <tr>
                      <th className="th1">Item Details</th>
                      <th className="th2">Available</th>
                      <th className="th3">Quantity</th>
                      <th className="th4">Rate</th>
                      <th className="th5">Amount</th>
                      {itemcoll.length >= 1 && <th className="th6">Delete</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {itemcoll.map((p) => (
                      <InvoiceReady
                        p={p}
                        setitemcoll={setitemcoll}
                        itemcoll={itemcoll}
                        key={p._id}
                        price={price}
                        setprice={setprice}
                        setsubtotal={setsubtotal}
                        tax={tax}
                        discount={discount}
                      />
                    ))}
                    <Invoicetable
                      item={item}
                      amount={amount}
                      setamount={setamount}
                      itemdetail={itemdetail}
                      setitemdetail={setitemdetail}
                      quantity={quantity}
                      setquantity={setquantity}
                      rate={rate}
                      setrate={setrate}
                      price={price}
                      setprice={setprice}
                      decidequantity={decidequantity}
                      setdecidequantity={setdecidequantity}
                      setiden={setiden}
                      itemn={itemn}
                      setitemn={setitemn}
                    />
                  </tbody>
                </table>
              </Table>
              <div>
                <button onClick={newitembuthandler}>Add item</button>
              </div>
            </AddItemBut>

            <div>
              <InvoiceTotal
                subtotal={subtotal}
                setsubtotal={setsubtotal}
                discount={discount}
                setdiscount={setdiscount}
                tax={tax}
                settax={settax}
                total={total}
                settotal={settotal}
                price={price}
              />
            </div>
          </Top>
          <Down>
            <div className="both">
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="btn1"
                  onClick={inputhandler}
                >
                  Save
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn2"
                onClick={CancelHandler}
              >
                Cancel
              </motion.button>
            </div>
          </Down>
        </form>
      </div>
    </ItemMaking1>
  );
};
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Heading12 = styled.div`
  position: webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
  border: none;
  box-shadow: 1px 1px #888888;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  h3 {
    margin: 20px 0px 10px;
  }
  span {
    margin: 15px 0px 0px;
    padding: 8px 0px 0px;
  }
  font-size: 13px;
`;
const ItemMaking1 = styled.div`
  label {
    font-size: 13px;
  }
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: white;
`;
const AddItemBut = styled.div`
  button {
    border: none;
    background: #2fa3e6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin: 1rem 0rem 0rem 8rem;
  }
`;

const Grider = styled.div`
  display: grid !important;
  grid-gap: 2rem;

  select,
  label,
  input {
    padding: 5px 8px;
  }

  .d1 {
    grid-area: d1;
    color: #e54643;
  }
  .d2 {
    grid-area: d2;
    select {
      width: 100%;
    }
  }
  .d3 {
    grid-area: d3;
    color: #e54643;
  }
  .d4 {
    grid-area: d4;
  }
  .d5 {
    grid-area: d5;
  }
  .d6 {
    grid-area: d6;
  }
  .d7 {
    grid-area: d7;
    color: #e54643;
  }
  .d8 {
    grid-area: d8;
  }
  .d9 {
    grid-area: d9;
    display: flex;
    gap: 1rem;
  }

  .d11 {
    grid-area: d11;
    display: flex;
    gap: 1rem;
  }

  .d13 {
    grid-area: d13;
  }
  .d14 {
    grid-area: d14;
  }

  .d16 {
    grid-area: d16;
  }
  .d17 {
    grid-area: d17;
  }
  grid-template-areas:
    ". d1   d2   .   .    .    .  "
    ". d3   d4   .   .    .    .  "
    ". d5   d6   .   .    .    .  "
    ". d7   d8   d9  d11  .    .  "
    ". d13  d14  .   .    .    .  ";
`;
const Down = styled.div`
  position: webkit-sticky;
  position: sticky;
  bottom: 0;
  margin-top: 6.5rem;
  background: white;
  border: none;
  box-shadow: 0px -5px 20px 1px #adadad;
  .both {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;
    padding: 0.5rem;
    button {
      padding: 1rem;
      border: none;
      cursor: pointer;
      border-radius: 1rem;
    }
  }

  .btn1 {
    background: #2fa3e6;
    color: #ffffff;
  }
  .btn2 {
    background: #2fa3e6;
    color: #ffffff;
  }
`;
const Table = styled.div`
  font-size: 13px;
  padding: 2rem 22rem 0rem 8rem;
  label {
    padding: 0rem 4rem;
  }
  table,
  th {
    padding: 8px 10px;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
  }
  .detail {
    border: none;
    padding: 1rem 5rem;
  }
  button {
    padding: 1rem 2rem;
    align-items: center;
  }
  th,
  td {
    height: auto;
    text-align: center;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    word-wrap: break-word;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
    padding: 2rem 1rem;
  }
  .th1,
  .th2,
  .th3,
  .th4,
  .th5,
  .th6 {
    padding: 2rem 2rem;
  }

  input {
    padding: 10px 8px;
    width: 15rem;
    height: 100%;
    border-style: none;
    border-color: Transparent;
    resize: none;
    &:focus {
      outline: 1px solid #1ea3c4;
    }
  }
`;
export default Invoice;
