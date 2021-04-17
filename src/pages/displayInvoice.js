import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const DisplayInvoice = () => {
  return (
    <div>
      <Total>
        <div>
          <Selector>
            <option className="d1">All</option>
            <option className="d1">Unpaid Invoices</option>
            <option className="d1">Draft</option>
            <option className="d1">Pending Approval</option>
            <option className="d1">Approved</option>
            <option className="d1">Client Viewed</option>
            <option className="d1">partially Paid</option>
            <option className="d1">Unpaid</option>
            <option className="d1">Overdue</option>
            <option className="d1">Payment Initiated</option>
            <option className="d1">Paid</option>
            <option className="d1">Void</option>
            <option className="d1">Debit Note</option>
            <option className="d1">Write Off</option>
          </Selector>
        </div>
        <div className="btn1">
          <button>
            <Link className="labels" to="/addInvoice">
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
          <p>Invoice</p>
        </div>
        <div>
          <p>Order Number</p>
        </div>
        <div>
          <p>Customer Name</p>
        </div>
        <div>
          <p>Status</p>
        </div>
        <div>
          <p>Due Date</p>
        </div>
        <div>
          <p>Amount</p>
        </div>
        <div>
          <p>Balance Due</p>
        </div>
      </Stats>
      <Disp>
        <p>There are no approved Invoices</p>
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
export default DisplayInvoice;
