import React from "react";
import styled from "styled-components";
const InvoiceTotal = ({
  subtotal,
  setsubtotal,
  discount,
  setdiscount,
  tax,
  settax,
  price,
}) => {
  const discounthandler = (e) => {
    setdiscount(e.target.value);
    setsubtotal(
      parseInt(price) + parseInt((tax * price) / 100) - parseInt(e.target.value)
    );
  };

  const taxhandler = (e) => {
    settax(e.target.value);
    setsubtotal(
      parseInt(price) +
        parseInt((e.target.value * price) / 100) -
        parseInt(discount)
    );
  };

  return (
    <Grider>
      <div className="d1">
        <label htmlFor="subtotal">Sub Total</label>
      </div>
      <div className="d2">
        <label>{price}.00</label>
      </div>
      <div className="d3">
        <label htmlFor="discount">Discount</label>
      </div>
      <div className="d4">
        <input
          onChange={discounthandler}
          id="discount"
          value={discount}
          type="number"
          min="0"
        ></input>
      </div>
      <div className="d5">
        <label htmlFor="discount">Rs. {discount}.00</label>
      </div>
      <div className="d6">
        <label htmlFor="tax">Tax Percentage </label>
      </div>
      <div className="d7">
        <input
          onChange={taxhandler}
          id="tax"
          value={tax}
          type="number"
          min="0"
        ></input>
      </div>
      <div className="d8">
        <label htmlFor="tax">Tax: {tax}%</label>
      </div>
      <div className="d9">
        <label>Total ( Rs. )</label>
      </div>
      <div className="d10">
        <label>{subtotal}.00</label>
      </div>
    </Grider>
  );
};
const Grider = styled.div`
  font-size: 13px;
  margin: 0rem 22rem 0rem 65rem;
  border-radius: 1rem;
  background: #ebe9e6;
  padding: 3rem 1rem;
  display: grid;
  grid-gap: 2rem;
  input {
    width: 10rem;
    border: none;
    padding: 0.5rem 0.5rem;
  }
  .d1 {
    grid-area: d1;
  }
  .d2 {
    grid-area: d2;
  }
  .d3 {
    grid-area: d3;
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
  }
  .d8 {
    grid-area: d8;
  }
  .d9 {
    grid-area: d9;
    label {
      font-size: 1.7rem;
      font-weight: bold;
    }
  }
  .d10 {
    grid-area: d10;
    label {
      font-size: 1.7rem;
      font-weight: bold;
    }
  }
  grid-template-areas:
    "d1 . . d2"
    "d3 d4 . d5"
    "d6 d7 . d8"
    "d9 . . d10";
`;
export default InvoiceTotal;
