import React from "react";
import styled from "styled-components";

const invoiceitemtable = () => {
  return (
    <Table>
      <table>
        <thead>
          <tr>
            <th className="th1">Item Details</th>
            <th className="th2">Quantity</th>
            <th className="th3">Rate</th>
            <th className="th4">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <textarea
                type="text"
                placeholder="Type or Click to Select an Item Type"
              ></textarea>
            </td>
            <td>
              <textarea type="text" placeholder="Quantity"></textarea>
            </td>
            <td>
              <textarea type="text" placeholder="Rate"></textarea>
            </td>
            <td>
              <textarea type="text" placeholder="Rs 0.00"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </Table>
  );
};
const Table = styled.div`
  padding: 2rem 22rem 0rem 8rem;
  table,
  th {
    width: 100%;
    padding: 8px 10px;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
  }
  .th2 {
    padding: 0rem 10rem 0rem 10rem;
  }
  .th3 {
    padding: 0rem 5rem 0rem 5rem;
  }
  .th4 {
    padding: 0rem 3rem 0rem 3rem;
  }
  th,
  td {
    height: auto;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    word-wrap: break-word;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
  }
  textarea {
    padding: 5px 8px;
    width: 100%;
    height: 100%;
    border-style: none;
    border-color: Transparent;
    resize: none;
    &:focus {
      outline: 1px solid #1ea3c4;
    }
  }
`;
export default invoiceitemtable;
