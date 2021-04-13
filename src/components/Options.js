import React from "react";
import styled from "styled-components";
const Options = () => {
  return (
    <FullPage>
      <Fully>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Items</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">Sales Order</a>
          </li>
          <li>
            <a href="#">Packages</a>
          </li>
          <li>
            <a href="#">Delivery Challans</a>
          </li>
          <li>
            <a href="#">Invoices</a>
          </li>
          <li>
            <a href="#">Payments Recieved</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Vendors</a>
          </li>
          <li>
            <a href="#">Purchase Orders</a>
          </li>
          <li>
            <a href="#">Bills</a>
          </li>
          <li>
            <a href="#">Payments Made</a>
          </li>
          <li>
            <a href="#">Vendor Credits</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Integrations</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Documents</a>
          </li>
        </ul>
      </Fully>
      <Collapse>
        <a href="#"></a>
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
