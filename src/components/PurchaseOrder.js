import React from "react";
import styled from "styled-components";
const PurchaseOrder = () => {
  return (
    <DMain>
      <Detailer>
        <Det1>
          <label>PURCHASE ORDER</label>
        </Det1>
        <div>
          <label>This Month</label>
        </div>
      </Detailer>
      <Line></Line>
      <DetUser>
        <Detu2>
          <label>Quantity Ordered</label>
          <p>0</p>
        </Detu2>
        <Detu2>
          <label>Total Cost</label>
          <p>Rs.0.00</p>
        </Detu2>
      </DetUser>
    </DMain>
  );
};
const DMain = styled.div`
  padding: 15px 12px;
  border: 2px solid black;
  width: 100%;
  flex: 1;
`;

const Detailer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    font-size: 13px;
  }
  flex-wrap: wrap;
`;

const Det1 = styled.div``;
const DetUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const Detu2 = styled.div`
  padding: 37px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin: 0px 0px 6.5px;
    font-size: 14px;
  }
  p {
    font-size: 24px;
    margin: 0px 0px 13px;
    color: #2485e8;
  }
`;
const Line = styled.div`
  color: grey;
  border: 1px solid grey;
  margin-top: 1.5rem;
`;

export default PurchaseOrder;
