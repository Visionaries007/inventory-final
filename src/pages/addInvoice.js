import React, { useEffect, useState } from "react";
import close from "../img/close.svg";
import styled from "styled-components";
import Invoicetable from "../Cards/invoiceitemtable";
import InvoiceTotal from "../Cards/invoicetotal";
const Invoice = ({ customer, item }) => {
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

  useEffect(() => {
    console.log(item.item);
    var x = 0;
    if (termsarr !== undefined)
      for (x = 0; x < termsarr.length; x++) {
        var option12 = "<option >" + termsarr[x] + "</option>";
        document.getElementById("terms").innerHTML += option12;
      }
    if (customer.customer !== undefined)
      for (x = 0; x < customer.customer.length; x++) {
        var option13 =
          "<option >" + customer.customer[x].firstname + "</option>";
        document.getElementById("customename").innerHTML += option13;
      }
  }, [customer]);

  const inputhandler = () => {};
  const [price, setprice] = useState(100);
  const [customename, setcustomername] = useState("");
  const custnamehandler = (e) => {
    setcustomername(e.target.value);
  };
  const [invoice, setinvoice] = useState("");
  const invoicehandler = (e) => {
    setinvoice(e.target.value);
  };
  const [ordernumber, setordernumber] = useState("");
  const ordernumberhandler = (e) => {
    setordernumber(e.target.value);
  };
  const [invoicedate, setinvoicedate] = useState("");
  const invoicedatehandler = (e) => {
    setinvoicedate(e.target.value);
  };
  const [terms, setterms] = useState("");
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
  const [itemdetail, setitemdetail] = useState("");
  const [quantity, setquantity] = useState("");
  const [rate, setrate] = useState("");
  const [amount, setamount] = useState(0);
  const [subtotal, setsubtotal] = useState(0);
  const [discount, setdiscount] = useState(0);
  const [tax, settax] = useState(0);
  const [total, settotal] = useState(0);

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
                ></select>
              </div>

              <div className="d3">
                <label htmlFor="invoicenumber">Invoice Number*</label>
              </div>
              <div className="d4">
                <input
                  onChange={invoicehandler}
                  id="invoicenumber"
                  value={invoice}
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
                ></select>
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
            <div>
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
              />
            </div>
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
                <button type="submit" className="btn1">
                  Save
                </button>
              </div>
              <div>
                <button className="btn2">Cancel</button>
              </div>
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
    background: #f5f5f5;
    color: #212529;
  }
`;
export default Invoice;
