import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import spedo from "../img/tachometer-alt-solid 1.svg";
import user from "../img/user-solid 2.svg";
import invoice from "../img/file-invoice-solid 1.svg";
import cart from "../img/shopping-cart-solid 1.svg";
import database from "../img/database.svg";
import truck from "../img/truck-solid 1.svg";
import paid from "../img/paid.svg";
import shopping from "../img/dolly-solid 1.svg";
import folder from "../img/folder-open-solid.svg";
import hand from "../img/thumbs-up-solid 1.svg";
import graph from "../img/graph.svg";
import packag from "../img/archive-solid 1.svg";
const Options = () => {
  return (
    <FullPage>
      <Fully>
        <ul>
          <li>
            <div className="h">
              <img src={spedo} alt="" />
              <Link to="/">Dashboard</Link>
            </div>
          </li>
          <li>
            <div className="h">
              <img src={database} alt="" />
              <a href="/displayItems">Items</a>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <img src={user} alt="" />
              <Link to="/displaycustomer">Customers</Link>
            </div>
          </li>
          <li>
            <div className="h">
              <img src={cart} alt="" />
              <Link to="/displaysalesorder">Sales Order</Link>
            </div>
          </li>
          <li>
            <div className="h">
              <img src={packag} alt="" />
              <Link to="/displaypackages">Packages</Link>
            </div>
          </li>
          <li>
            <div className="h">
              <img src={truck} alt="" />
              <Link to="displayDeliverychallans">Delivery Challans</Link>
            </div>
          </li>
          <li>
            <div className="h">
              <img src={invoice} alt="" />
              <Link to="/displayinvoice">Invoices</Link>
            </div>
          </li>
          <li>
            <div className="h">
              <img src={paid} alt="" />
              <Link to="/displaypaymentrecieved">Payments Recieved</Link>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <img src={shopping} alt="" />
              <Link to="/displaypurchaseorder">Purchase Orders</Link>
            </div>
          </li>

          <li>
            <div className="h">
              <img src={hand} alt="" />
              <Link to="/displaypaymentmade">Payments Made</Link>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <img src={graph} alt="" />
              <Link to="/displayreport">Reports</Link>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <img src={folder} alt="" />
              <Link to="/displaydocuments">Documents</Link>
            </div>
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

    .h {
      display: flex;
      flex-direction: row;
      padding-left: 2rem;
    }
  }
  a {
    display: flex;
    flex-direction: column !important;
    color: white;
    padding: 6px 25px 6px 15px;
    text-decoration: none;
  }
  li {
    &:hover {
      transform: scale(1.02);
      transition: 0.2s ease;
    }
  }
`;
const Collapse = styled.span`
  height: 35px;
  bottom: 0;
  width: 200px;
`;

export default Options;
