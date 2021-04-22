import React from "react";
import styled from "styled-components";
const CustomerTable = ({ n }) => {
  return (
    <Data>
      <tr>
        <td>{n.firstname} </td>
        <td>{n.companyname} </td>
        <td>{n.customeremail}</td>
        <td>{n.cusworkphone}</td>
        <td>Rs.{n.reciveable}.00</td>
        <td>Rs.{n.unusedcredit}.00</td>
      </tr>
    </Data>
  );
};
const Data = styled.div`
  padding: 2rem;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
      -1px -1px 8px rgba(0, 0, 0, 0.2);
  }
  tr {
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    word-wrap: break-word;
  }
  #header {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      45deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 255, 252, 1) 0%,
      rgba(0, 155, 255, 1) 100%
    );
    color: #fff;
  }
  tr:hover {
    background-color: #f5f5f5;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
      -1px -1px 8px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 768px) {
    table {
      width: 90%;
    }
  }
`;

export default CustomerTable;
