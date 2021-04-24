import React from "react";
import styled from "styled-components";
const Readyitems = ({ itemdetail, quantity, decidequantity, rate, amount }) => {
  return (
    <Trr>
      <td className="det">
        <label>{itemdetail}</label>
      </td>
      <td>
        <label>{quantity}</label>
      </td>
      <td>
        <label>{decidequantity}</label>
      </td>
      <td>
        <label>{rate}</label>
      </td>
      <td>
        <label>Rs. {amount}</label>
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
export default Readyitems;
