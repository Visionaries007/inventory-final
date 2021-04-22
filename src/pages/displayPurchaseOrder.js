import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const DisplayPurchaseOrder = () => {
  return (
    <div>
      <Total>
        <div>
          <Selector className="inv">
            <option className="d1">All Payments</option>
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
        <table className="t1">
          <tbody>
            <tr id="header">
              <th>Date</th>
              <th>Vendor Name</th>
              <th>Bill#</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>21/04/2021</td>
              <td>Jeet Sharma</td>
              <td>31121</td>
              <td>Bitcoin</td>
              <td>Rs 32300</td>
              <td>Rs 2300</td>
            </tr>

            <tr>
              <td>21/04/2021</td>
              <td>Jeet Sharma</td>
              <td>31121</td>
              <td>Bitcoin</td>
              <td>Rs 32300</td>
              <td>Rs 2300</td>
            </tr>

            <tr>
              <td>21/04/2021</td>
              <td>Jeet Sharma</td>
              <td>31121</td>
              <td>Bitcoin</td>
              <td>Rs 32300</td>
              <td>Rs 2300</td>
            </tr>
          </tbody>
        </table>
        <table className="t2">
          <tbody>
            <tr id="header">
              <th>Date</th>
              <th>Payment #</th>
              <th>Reference #</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>21/04/2021</td>
              <td>SO-24452 </td>
              <td>1128822</td>

              <td>Bitcoin</td>
              <td>Rs 32300</td>
              <td>Rs 2300</td>
            </tr>
          </tbody>
        </table>
        <table className="t3">
          <tbody>
            <tr id="header">
              <th>Date</th>
              <th>Payment #</th>
              <th>Reference #</th>
              <th>Vendor Name</th>
              <th>Bill#</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>21/04/2021</td>
              <td>SO-24452 </td>
              <td>1128822</td>
              <td>Jeet Sharma</td>
              <td>31121</td>
              <td>Bitcoin</td>
              <td>Rs 32300</td>
              <td>Rs 2300</td>
            </tr>
            <tr>
              <td>21/04/2021</td>
              <td>SO-24452 </td>
              <td>1128822</td>
              <td>Jeet Sharma</td>
              <td>31121</td>
              <td>Bitcoin</td>
              <td>Rs 32300</td>
              <td>Rs 2300</td>
            </tr>
          </tbody>
        </table>
        <table className="t4">
          <tbody>
            <tr id="header">
              <th>Date</th>
              <th>Payment </th>
              <th>Reference </th>
              <th>Vendor Name</th>
              <th>Bill#</th>
              <th>Mode</th>
              <th>Amount</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>21/04/2021</td>
              <td>SO-24452 </td>
              <td>1128822</td>
              <td>Jeet Sharma</td>
              <td>31121</td>
              <td>Bitcoin</td>
              <td>Rs 32300</td>
              <td>Rs 2300</td>
            </tr>
          </tbody>
        </table>
      </Data>
    </div>
  );
};
const Data = styled.div`
  padding: 10rem 0rem 0rem 1rem;
  margin-right: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  grid-gap: 1rem;
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
export default DisplayPurchaseOrder;
