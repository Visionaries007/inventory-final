import React from "react";

const InvoiceItemadder = (n) => {
  return (
    <tr>
      <td>{n.name} </td>
      <td>
        <input>{n.type}</input>
      </td>
      <td>{n.customeremail}</td>
      <td>{n.cusworkphone}</td>
      <td>Rs.{n.reciveable}.00</td>
      <td>Rs.{n.unusedcredit}.00</td>
    </tr>
  );
};

export default InvoiceItemadder;
