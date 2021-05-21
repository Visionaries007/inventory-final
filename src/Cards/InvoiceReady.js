import React from "react";
import styled from "styled-components";
const InvoiceReady = ({
  p,
  setitemcoll,
  itemcoll,
  price,
  setprice,
  setsubtotal,
  tax,
  discount,
}) => {
  const deletehandler = (e) => {
    e.preventDefault();
    setprice(price - p.amount);
    setsubtotal(
      parseInt(price - p.amount) +
        parseInt((tax * (price - p.amount)) / 100) -
        parseInt(discount)
    );
    setitemcoll(itemcoll.filter((state) => state.key !== p.key));
  };
  return (
    <Trr>
      <td className="det">
        <label>{p.itemdetail}</label>
      </td>
      <td>
        <label>{p.quantity}</label>
      </td>
      <td>
        <label>{p.decidequantity}</label>
      </td>
      <td>
        <label>{p.rate}</label>
      </td>
      <td>
        <label>Rs. {p.amount}</label>
      </td>
      <td className="del">
        <button onClick={deletehandler}>Delete</button>
      </td>
    </Trr>
  );
};
const Trr = styled.tr`
  height: 3rem;
  label {
    width: 10rem;
  }
`;
export default InvoiceReady;
