import React from "react";
import styled from "styled-components";
const SalesOrder = () => {
  return (
    <SellDet>
      <Selling>
        <div className="hero">
          <label>SALES ORDER</label>
        </div>
        <Sectionsell>
          <label>This Month</label>
        </Sectionsell>
      </Selling>
      <Line></Line>
      <MainDivi>
        <Aligning>
          <label>Channel</label>
          <label>Draft</label>
          <label>Confirmed</label>
          <label>Packed</label>
          <label>Shipped</label>
          <label>Invoiced</label>
        </Aligning>
        <Pra>
          <Para>
            <h5>No sales were made in this time frame</h5>
          </Para>
        </Pra>
      </MainDivi>
    </SellDet>
  );
};
const SellDet = styled.div`
  border: 2px solid black;
  padding: 15px 12px;
  width: 100%;
  flex: 2;
`;
const Selling = styled.div`
  display: flex;
  padding: 0px 10px;
  flex-direction: row;
  justify-content: space-between;
  label {
    font-size: 13px;
  }
  .hero {
    label {
      padding: 0px 0px 10px;
    }
  }
`;
const Aligning = styled.div`
  background: #f7f9fb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 8px 8px 12px;
  label {
    font-size: 14px;
    color: #777777;
  }
`;
const MainDivi = styled.div``;
const Para = styled.div`
  margin: 10px 0px;
  padding: 75px 0px 0px;
  align-items: center;
  h5 {
    font-size: 13px;
    color: #777777;
  }
`;
const Pra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Sectionsell = styled.div``;

const Line = styled.div`
  color: grey;
  border: 1px solid grey;
  margin-top: 1.6rem;
`;
export default SalesOrder;
