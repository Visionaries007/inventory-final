import React from "react";
import styled from "styled-components";
import ProductDetails from "./ProductDetail";
import SalesOrder from "./SalesOrder";
import TopSellingitems from "./TopSellingItems";
import PurchaseOrder from "./PurchaseOrder";

const Statistics = () => {
  return (
    <TableRow1>
      <Row1>
        <ProductDetails />
        <TopSellingitems />
      </Row1>
      <Row1>
        <PurchaseOrder />
        <SalesOrder />
      </Row1>
    </TableRow1>
  );
};

const TableRow1 = styled.div`
  min-height: 100vh;
  float: right;
  width: 100%;
`;
const Row1 = styled.div`
  margin: 40px 0px 0px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
export default Statistics;
