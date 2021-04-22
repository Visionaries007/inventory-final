import React from "react";
const CustomerTable = ({ n }) => {
  return (
    <tr>
      <td>{n.firstname} </td>
      <td>{n.companyname} </td>
      <td>{n.customeremail}</td>
      <td>{n.cusworkphone}</td>
      <td>Rs.{n.reciveable}.00</td>
      <td>Rs.{n.unusedcredit}.00</td>
    </tr>
  );
};
export default CustomerTable;
