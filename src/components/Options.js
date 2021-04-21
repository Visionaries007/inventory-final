import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import spedo from "../img/tachometer-alt-solid 1.svg";
import user from "../img/user-solid 2.svg";
import invoice from "../img/file-invoice-solid 1.svg";
import cart from "../img/shopping-cart-solid 1.svg";
import database from "../img/shopping_baske.svg";
import truck from "../img/truck-solid 1.svg";
import paid from "../img/paid.svg";
import shopping from "../img/dolly-solid 1.svg";
import folder from "../img/folder-open-solid.svg";
import hand from "../img/thumbs-up-solid 1.svg";
import graph from "../img/graph.svg";
import packag from "../img/archive-solid 1.svg";
import add from "../img/add_black12.svg";
const Options = () => {
  return (
    <FullPage>
      <Fully>
        <ul>
          <li>
            <div className="h">
              <div className="h2">
                <img src={spedo} alt="" />
                <Link to="/">Dashboard</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="h">
              <div className="h2">
                <img src={database} alt="" />
                <a href="/displayItems">Items</a>
              </div>
              <div className="h3">
                <Link to="/additems" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <div className="h2">
                <img src={user} alt="" />
                <Link to="/displaycustomer">Customers</Link>
              </div>
              <div className="h3">
                <Link to="/addcustomer" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="h">
              <div className="h2">
                <img src={cart} alt="" />
                <Link to="/displaysalesorder">Sales Order</Link>
              </div>
              <div className="h3">
                <Link to="/addsalesorder" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="h">
              <div className="h2">
                <img src={packag} alt="" />
                <Link to="/displaypackages">Packages</Link>
              </div>
              <div className="h3">
                <Link to="/addpackages" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="h">
              <div className="h2">
                <img src={truck} alt="" />
                <Link to="displayDeliverychallans">Delivery Challans</Link>
              </div>
              <div className="h3">
                <Link to="/addDeliverychallans" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="h">
              <div className="h2 g3">
                <img src={invoice} alt="" />
                <Link to="/displayinvoice">Invoices</Link>
              </div>
              <div className="h3">
                <Link to="/addinvoice" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="h">
              <div className="h2">
                <img src={paid} alt="" />
                <Link to="/displaypaymentrecieved">Payments Recieved</Link>
              </div>
              <div className="h3">
                <Link to="/addpaymentrecieved" className="h22 jj">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <div className="h2">
                <img src={shopping} alt="" />
                <Link to="/displaypurchaseorder">Purchase Orders</Link>
              </div>
              <div className="h3">
                <Link to="/addpurchaseorder" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <div className="h">
              <div className="h2">
                <img src={hand} alt="" />
                <Link to="/displaypaymentmade">Payments Made</Link>
              </div>
              <div className="h3">
                <Link to="/addpaymentmade" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <div className="h2">
                <img src={graph} alt="" />
                <Link to="/displayreport">Reports</Link>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="h">
              <div className="h2">
                <img src={folder} alt="" />
                <Link to="/displaydocuments">Documents</Link>
              </div>
              <div className="h3">
                <Link to="/adddocuments" className="h22">
                  <img src={add} alt=""></img>
                </Link>
              </div>
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
      padding-left: 1rem;
    }
    .h2 {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    .g3 {
      img {
        padding-right: 0.5rem;
      }
    }
    .h3 {
      .h22 {
        padding: 0rem;
      }
      .jj {
        img {
          padding-top: 1rem;
        }
      }
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
    padding-bottom: 1rem;
  }
`;
const Collapse = styled.span`
  height: 35px;
  bottom: 0;
  width: 200px;
`;

export default Options;
