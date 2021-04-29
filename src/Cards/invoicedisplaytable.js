import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, popup } from "../animations";
const Invoicedisplaytable = ({ n }) => {
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
  };
  return (
    <Tabel
      layoutId={n._id}
      onClick={loadDetailHandler}
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <td>{n.invoicedate} </td>
      <td>{n.invoicenumber} </td>
      <td>{n.ordernumber}</td>
      <td>{n.customername}</td>
      <td>{n.status}</td>
      <td>{n.duedate}</td>
      <td>Rs. {n.subtotal}.00</td>
      <td>Rs. {n.balanceddue}.00</td>
      <td className="view">
        <Link to={`/displayinvoice/${n._id}`}>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }}>
            Details
          </motion.button>
        </Link>
      </td>
    </Tabel>
  );
};
const Tabel = styled(motion.tr)`
  .view {
    width: 10rem;
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
export default Invoicedisplaytable;
