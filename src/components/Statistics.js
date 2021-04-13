import React from "react";
import styled from "styled-components";
import ProductDetails from "./ProductDetail";
import SalesOrder from "./SalesOrder";
import TopSellingitems from "./TopSellingItems";
import PurchaseOrder from "./PurchaseOrder";

const Statistics = () => {
  return (
    <TableRow1>
      <div className="box1">
        <ProductDetails />
      </div>
      <div className="box2">
        <TopSellingitems />
      </div>
      <div className="box3">
        <PurchaseOrder />
      </div>
      <div className="box4">
        <SalesOrder />
      </div>
    </TableRow1>
  );
};

const TableRow1 = styled.div`
  display: grid;
  .box1 {
    grid-column: 1/3;
  }
  .box2 {
    grid-column: 3/5;
  }
  .box3 {
    grid-column: 1/2;
  }
  .box4 {
    grid-column: 2/5;
  }
  grid-template-columns: repeat(4, 1fr);
  padding: 1em;
  grid-gap: 1em;
`;
export default Statistics;
