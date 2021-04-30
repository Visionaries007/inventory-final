import React, { useState } from "react";
import styled from "styled-components";
import Customertable from "../Cards/customertable";
import CustomerDetail from "../Detail/customerdetail";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, popup } from "../animations";
const DisplayCustomer = ({ customer, setcustomer }) => {
  const [update, setupdate] = useState(false);
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  return (
    <div>
      <Total variants={fadeIn} initial="hidden" animate="show">
        <div className="cust">
          <Selector>
            <option className="d1">All Customer</option>
            <option className="d1">Active Customers</option>
            <option className="d1">CRM Customers</option>
            <option className="d1">Duplicate Customers</option>
            <option className="d1">Inactive Customers</option>
            <option className="d1">Overdue Customers</option>
            <option className="d1">Unpaid Customers</option>
          </Selector>
        </div>
        <div className="btn1">
          <button>
            <a className="labels" href="/addCustomer">
              + New
            </a>
          </button>
        </div>
      </Total>
      <Data variants={fadeIn} initial="hidden" animate="show">
        <table>
          <tbody>
            <tr id="header">
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Work Phone</th>
              <th>Reciveable</th>
              <th>Unused Credit</th>
              <th>Details</th>
            </tr>
            {customer.customer !== undefined &&
              customer.customer.map((n) => <Customertable n={n} key={n._id} />)}
          </tbody>
        </table>
        {pathId && (
          <CustomerDetail
            pathId={pathId}
            setcustomer={setcustomer}
            customer={customer}
            setupdate={setupdate}
            update={update}
          />
        )}
      </Data>
    </div>
  );
};
const Data = styled(motion.div)`
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

const Total = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .cust {
    padding: 1rem 0rem 0rem 2rem;
  }
  .btn1 {
    padding: 1rem 2rem;
    button {
      padding: 0.5rem;
      border-radius: 3px;
      a {
        text-decoration: none;
        color: white !important;
      }
      background: linear-gradient(
        45deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 255, 252, 1) 0%,
        rgba(0, 155, 255, 1) 100%
      );
      border: none;
    }
    &:hover {
      transform: scale(1.1);
      transition: 0.5s ease;
    }
  }
`;
const Selector = styled(motion.select)`
  border: none;
  width: 70%;
  &:focus {
    outline: none;
  }

  .d1 {
    font-size: 12px !important;
  }
  font-size: 20px;
`;
export default DisplayCustomer;
