import React from "react";

const Invoicedisplaytable = ({ n }) => {
  return (
    <tr>
      <td>{n.invoicedate} </td>
      <td>{n.invoicenumber} </td>
      <td>{n.ordernumber}</td>
      <td>{n.customername}</td>
      <td>{n.status}</td>
      <td>{n.duedate}</td>
      <td>Rs. {n.subtotal}.00</td>
      <td>Rs. {n.balanceddue}.00</td>
    </tr>
  );
};

export default Invoicedisplaytable;
