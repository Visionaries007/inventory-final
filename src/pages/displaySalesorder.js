import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DisplaySalesorder = () => {
  return (
    <div>
      <Total>
        <div>
          <Selector>
            <option className="d1">All</option>
            <option className="d1">To be Shipped</option>
            <option className="d1">Draft</option>
            <option className="d1">Pending Approval</option>
            <option className="d1">Approved</option>
            <option className="d1">Confirmed</option>
            <option className="d1">For Packaging</option>
            <option className="d1">To be Shipped</option>
            <option className="d1">Shipped</option>
            <option className="d1">For Invoicing</option>
            <option className="d1">Drop Shipped</option>
            <option className="d1">Backorder</option>
            <option className="d1">Fulfilled</option>
            <option className="d1">Closed</option>
            <option className="d1">Marketplace</option>
            <option className="d1">Void</option>
            <option className="d1">Invoiced</option>
          </Selector>
        </div>
        <div className="btn1">
          <button>
            {" "}
            <Link class="labels" to="/addSalesorder">
              + New
            </Link>
          </button>
        </div>
      </Total>
      <Stats>
        <div>
          <p>Date</p>
        </div>
        <div>
          <p>Sales Order</p>
        </div>
        <div>
          <p>Refrence #</p>
        </div>
        <div>
          <p>Customer Name</p>
        </div>
        <div>
          <p>Order Status</p>
        </div>
        <div>
          <p>Invoiced</p>
        </div>
        <div>
          <p>PAYMENT</p>
        </div>
        <div>
          <p>PACKED</p>
        </div>
        <div>
          <p>SHIPPED</p>
        </div>
        <div>
          <p>AMOUNT</p>
        </div>
      </Stats>
      <Disp>
        <p>No Records Found</p>
      </Disp>
    </div>
  );
};
const Disp = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
  cursor: pointer;
`;
const Stats = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 10px 2px black;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .btn1 {
    padding: 1rem;
    button {
      padding: 0.5rem;
      color: white;
      background: #2fa3e6;
      border: none;
    }
  }
  box-shadow: 10px 2px black;
`;
const Selector = styled.select`
  border: none;
  padding: 1rem;
  &:focus {
    outline: none;
  }
  -webkit-appearance: none;
  .d1 {
    font-size: 12px !important;
  }
  font-size: 20px;
`;
export default DisplaySalesorder;
