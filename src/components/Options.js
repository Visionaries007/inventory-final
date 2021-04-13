import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Options = () => {
  return (
    <FullPage>
      <Fully>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/items">Items</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Customers</Link>
          </li>
          <li>
            <Link to="/">Sales Order</Link>
          </li>
          <li>
            <Link to="/">Packages</Link>
          </li>
          <li>
            <Link to="/">Delivery Challans</Link>
          </li>
          <li>
            <Link to="/invoice">Invoices</Link>
          </li>
          <li>
            <Link to="/">Payments Recieved</Link>
          </li>
          <li>
            <Link to="/">Returns</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Vendors</Link>
          </li>
          <li>
            <Link to="/">Purchase Orders</Link>
          </li>
          <li>
            <Link to="/">Bills</Link>
          </li>
          <li>
            <Link to="/">Payments Made</Link>
          </li>
          <li>
            <Link to="/">Vendor Credits</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Integrations</Link>
          </li>
          <li>
            <Link to="/">Reports</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Documents</Link>
          </li>
        </ul>
      </Fully>
      <Collapse>
        <Link to="/"></Link>
      </Collapse>
    </FullPage>
  );
};
const FullPage = styled.div`
  background: black;
  height: 100%;
`;
const Fully = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  gap: 20px;
  font-size: 13px;
  text-decoration: none;
  height: 100%;
  ul {
    padding-top: 12px;
    width: 200px;
  }
  a {
    display: flex;
    flex-direction: column !important;
    color: white;
    padding: 6px 25px 6px 15px;
    text-decoration: none;
  }
`;
const Collapse = styled.span`
  height: 35px;
  bottom: 0;
  width: 200px;
`;

export default Options;
