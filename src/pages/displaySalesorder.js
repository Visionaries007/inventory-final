import React from "react";
import styled from "styled-components";
const DisplaySalesorder = () => {
  return (
    <div>
      <Total>
        <div className="sales">
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
            <a className="labels" href="/addSalesOrder">
              + New
            </a>
          </button>
        </div>
      </Total>
      <Data>
        <table>
          <tr id="header">
            <th>Date</th>
            <th>Sales Order</th>
            <th>Refrence #</th>
            <th>Customer Name</th>
            <th>Order Status</th>
            <th>Invoiced</th>
            <th>PAYMENT</th>
            <th>PACKED</th>
            <th>SHIPPED</th>
            <th>AMOUNT</th>
          </tr>
          <tr>
            <td>21/04/2021</td>
            <td>SO-24452 </td>
            <td>1128822</td>
            <td>Jeet Sharma</td>
            <td>Confirmed</td>
            <td>2</td>
            <td>Paid</td>
            <td>yes</td>
            <td>Not Yet</td>
            <td>Rs 2300000</td>
          </tr>
          <tr>
            <td>21/04/2021</td>
            <td>SO-24452 </td>
            <td>1128822</td>
            <td>Jeet Sharma</td>
            <td>Confirmed</td>
            <td>2</td>
            <td>Paid</td>
            <td>yes</td>
            <td>Not Yet</td>
            <td>Rs 2300000</td>
          </tr>
          <tr>
            <td>21/04/2021</td>
            <td>SO-24452 </td>
            <td>1128822</td>
            <td>Jeet Sharma</td>
            <td>Confirmed</td>
            <td>2</td>
            <td>Paid</td>
            <td>yes</td>
            <td>Not Yet</td>
            <td>Rs 2300000</td>
          </tr>
          <tr>
            <td>21/04/2021</td>
            <td>SO-24452 </td>
            <td>1128822</td>
            <td>Jeet Sharma</td>
            <td>Confirmed</td>
            <td>2</td>
            <td>Paid</td>
            <td>yes</td>
            <td>Not Yet</td>
            <td>Rs 2300000</td>
          </tr>
          <tr>
            <td>21/04/2021</td>
            <td>SO-24452 </td>
            <td>1128822</td>
            <td>Jeet Sharma</td>
            <td>Confirmed</td>
            <td>2</td>
            <td>Paid</td>
            <td>yes</td>
            <td>Not Yet</td>
            <td>Rs 2300000</td>
          </tr>
          <tr>
            <td>21/04/2021</td>
            <td>SO-24452 </td>
            <td>1128822</td>
            <td>Jeet Sharma</td>
            <td>Confirmed</td>
            <td>2</td>
            <td>Paid</td>
            <td>yes</td>
            <td>Not Yet</td>
            <td>Rs 2300000</td>
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
  .sales {
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
  width: 70%;
  &:focus {
    outline: none;
  }
  .d1 {
    font-size: 12px !important;
  }
  font-size: 20px;
`;
export default DisplaySalesorder;
