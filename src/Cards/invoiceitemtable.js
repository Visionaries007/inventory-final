import React from "react";

const Invoiceitemtable = ({
  item,
  itemdetail,
  setitemdetail,
  quantity,
  setquantity,
  rate,
  setrate,
  amount,
  setamount,
  price,
  decidequantity,
  setdecidequantity,
}) => {
  const items = item.item;

  const listItems =
    items !== undefined &&
    items.map((n) => <option key={n._id}>{n.name}</option>);

  const itemdetailhandler = (e) => {
    setitemdetail(e.target.value);
    setquantity(
      parseInt(item.item[e.target.options.selectedIndex - 1].quantity)
    );
  };
  const decidequantityhandler = (e) => {
    setdecidequantity(e.target.value);
    setamount(parseInt(parseInt(rate) * parseInt(e.target.value)));
  };

  const ratehandler = (e) => {
    setrate(e.target.value);
    setamount(parseInt(parseInt(e.target.value) * parseInt(decidequantity)));
  };

  return (
    <tr>
      <td className="det">
        <select
          className="detail"
          required
          id="detail"
          onChange={itemdetailhandler}
          value={itemdetail}
          defaultValue={1}
        >
          <option key={1} value="1" disabled>
            Select
          </option>
          {listItems}
        </select>
      </td>
      <td>
        <label>{quantity}</label>
      </td>
      <td>
        <input
          className="inpu"
          value={decidequantity}
          type="number"
          placeholder="Quantity"
          onChange={decidequantityhandler}
          min="0"
          max={quantity}
        ></input>
      </td>
      <td>
        <input
          onChange={ratehandler}
          type="number"
          value={rate}
          placeholder="Rate"
          min="0"
        ></input>
      </td>
      <td>
        <label className="he">Rs. {amount}</label>
      </td>
    </tr>
  );
};

export default Invoiceitemtable;
