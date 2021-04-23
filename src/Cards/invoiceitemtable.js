import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Invoiceitemtable = ({
  item,
  itemdetail,
  setitemdetail,
  quantity,
  setquantity,
  rate,
  setrate,
  amount,
  setamount,
  price,
}) => {
  const items = item.item;
  const listItem = [
    <option selected disabled>
      Select
    </option>,
  ];
  const listItems = [
    ...listItem,
    items !== undefined &&
      items.map((n) => <option key={n._id}>{n.name}</option>),
  ];

  const itemdetailhandler = (e) => {
    setitemdetail(e.target.value);
  };
  const quantityhandler = (e) => {
    setquantity(e.target.value);
  };
  const ratehandler = (e) => {
    setrate(e.target.value);
  };
  const amounthandler = (e) => {
    setamount(e.target.value);
  };
  return (
    <Table>
      <table>
        <thead>
          <tr>
            <th className="th1">Item Details</th>
            <th className="th2">Quantity</th>
            <th className="th3">Rate</th>
            <th className="th4">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="det">
              <select
                className="detail"
                required
                id="detail"
                onChange={itemdetailhandler}
              >
                {listItems}
              </select>
            </td>
            <td>
              <input type="number" min="0" placeholder="Quantity"></input>
            </td>
            <td>
              <input type="number" placeholder="Rate" min="0"></input>
            </td>
            <td>
              <label className="he">Rs. {amount}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </Table>
  );
};
const Table = styled.div`
  font-size: 13px;
  padding: 2rem 22rem 0rem 8rem;
  table,
  th {
    width: 100%;
    padding: 8px 10px;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
  }
  .detail {
    width: 100%;
    border: none;
    padding: 1rem 0rem;
  }
  .th2 {
    padding: 0rem 10rem 0rem 10rem;
  }
  .th3 {
    padding: 0rem 5rem 0rem 5rem;
  }
  .th4 {
    padding: 0rem 3rem 0rem 3rem;
  }
  .he {
    padding-left: 0.5rem;
  }
  th,
  td {
    height: auto;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    word-wrap: break-word;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
  }
  input {
    padding: 10px 8px;
    width: 100%;
    height: 100%;
    border-style: none;
    border-color: Transparent;
    resize: none;
    &:focus {
      outline: 1px solid #1ea3c4;
    }
  }
`;
export default Invoiceitemtable;
