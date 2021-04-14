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
            <Link to="/displayItems">Items</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/displaycustomer">Customers</Link>
          </li>
          <li>
            <Link to="/displaysalesorder">Sales Order</Link>
          </li>
          <li>
            <Link to="/displaypackages">Packages</Link>
          </li>
          <li>
            <Link to="displayDeliverychallans">Delivery Challans</Link>
          </li>
          <li>
            <Link to="/displayinvoice">Invoices</Link>
          </li>
          <li>
            <Link to="/displaypaymentrecieved">Payments Recieved</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/displaypurchaseorder">Purchase Orders</Link>
          </li>

          <li>
            <Link to="/displaypaymentmade">Payments Made</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/displayreport">Reports</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/displaydocuments">Documents</Link>
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
