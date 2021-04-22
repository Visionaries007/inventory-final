import React from "react";
import styled from "styled-components";

const invoiceitemtable = () => {
  return (
    <Table>
      <table>
        <thead>
          <tr>
            <th>Item Details</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Type or Click to Select an Item Type"
              ></input>
            </td>
            <td>
              <input type="text" placeholder="Quantity"></input>
            </td>
            <td>
              <input type="text" placeholder="Rate"></input>
            </td>
            <td>
              <input type="text" placeholder="Amount"></input>
            </td>
          </tr>
        </tbody>
      </table>
    </Table>
  );
};
const Table = styled.div`
  table,
  th {
    border: 1px solid black;
  }
`;
export default invoiceitemtable;
