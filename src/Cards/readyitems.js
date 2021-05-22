import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Readyitems = ({
  p,
  setitemcoll,
  itemcoll,
  price,
  setprice,
  setsubtotal,
  tax,
  discount,
  item,
  setitem,
}) => {
  const history = useHistory();
  useEffect(() => {
    for (let i = 0; i < item.item.length; i++) {
      if (p.iden === item.item[i]._id) {
        setcur(item.item[i].quantity);
        break;
      }
    }
  }, [item.item, itemcoll, p.iden]);
  const [cur, setcur] = useState("");
  const deletehandler = (e) => {
    e.preventDefault();
    console.log("cur is:");
    console.log(cur);
    setprice(price - p.amount);
    setsubtotal(
      parseInt(price - p.amount) +
        parseInt((tax * (price - p.amount)) / 100) -
        parseInt(discount)
    );
    axios.put(
      `https://inventory-management-vision.herokuapp.com/items/${p.iden}`,
      {
        type: p.itemn.type,
        name: p.itemn.name,
        sku: p.itemn.sku,
        quantity: parseInt(cur) + parseInt(p.decidequantity),
        unit: p.itemn.unit,
        returnable: p.itemn.returnable,
        dimension1: p.itemn.dimension1,
        dimension2: p.itemn.dimension2,
        dimension3: p.itemn.dimension3,
        manufacturer: p.itemn.manufacturer,
        upc: p.itemn.upc,
        ean: p.itemn.ean,
        weight: p.itemn.weight,
        brand: p.itemn.brand,
        mpn: p.itemn.mpn,
        isbn: p.itemn.isbn,
        salesprice: p.itemn.salesprice,
        purchaseInfo: p.itemn.purchaseInfo,
        sellingprice: p.itemn.sellingprice,
        spaccount: p.itemn.spaccount,
        spdescription: p.itemn.spdescription,
        costprice: p.itemn.costprice,
        cpaccount: p.itemn.cpaccount,
        cpdescription: p.itemn.cpdescription,
      }
    );

    setitemcoll(itemcoll.filter((state) => state.iden !== p.iden));
  };
  return (
    <Trr>
      <td className="det">
        <label>{p.itemdetail}</label>
      </td>
      <td>
        <label>{p.quantity}</label>
      </td>
      <td>
        <label>{p.decidequantity}</label>
      </td>
      <td>
        <label>{p.rate}</label>
      </td>
      <td>
        <label>Rs. {p.amount}</label>
      </td>
      <td className="del">
        <button value={p.iden} onClick={deletehandler}>
          Delete
        </button>
      </td>
    </Trr>
  );
};
const Trr = styled.tr`
  height: 3rem;
  label {
    width: 10rem;
  }
`;
export default Readyitems;
