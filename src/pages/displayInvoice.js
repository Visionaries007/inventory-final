import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const DisplayInvoice = () => {
  return (
    <div>
      <Total>
        <div>
          <Selector className="inv">
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

      <Data>
        <table>
          <tr id="header">
            <th>Date</th>
            <th>Invoice #</th>
            <th>Order #</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Balance Due</th>
          </tr>
          <tr>
            <td>21/04/2021</td>
            <td>SO-24452 </td>
            <td>1128822</td>
            <td>Jeet Sharma</td>
            <td>Confirmed</td>
            <td>25/04/2021</td>
            <td>Rs 32300</td>
            <td>Rs 2300</td>
          </tr>
        </table>
      </Data>
    </div>
  );
};

const Data = styled.div`
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
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .inv {
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
const Selector = styled.select`
  border: none;
  width: auto;
  &:focus {
    outline: none;
  }
  .d1 {
    font-size: 12px !important;
  }
  font-size: 20px;
`;
export default DisplayInvoice;
