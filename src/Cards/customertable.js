import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, popup } from "../animations";
const CustomerTable = ({ n }) => {
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
      <td>{n.firstname} </td>
      <td>{n.companyname} </td>
      <td>{n.customeremail}</td>
      <td>{n.cusworkphone}</td>
      <td>Rs.{n.reciveable}.00</td>
      <td>Rs.{n.unusedcredit}.00</td>
      <td className="view">
        <Link to={`/displaycustomer/${n._id}`}>
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
export default CustomerTable;
