import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
const InvoiceDetailTable = ({ n }) => {
  return (
    <Tabel layoutId={n._id} variants={fadeIn} initial="hidden" animate="show">
      <td>{n.itemdetail} </td>
      <td>{n.decidequantity} </td>
      <td>{n.rate}</td>
      <td>Rs. {n.amount}.00</td>
    </Tabel>
  );
};
const Tabel = styled(motion.tr)`
  td {
    font-size: 18px;
    width: 15rem;
  }
  button {
    padding: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    background: #2fa3e6;
    color: white;
  }
`;
export default InvoiceDetailTable;
