import React from "react";
import styled from "styled-components";
const TopSellingitems = () => {
  return (
    <Top>
      <SellingSection>
        <Rowing>
          <label>Top Selling Items</label>
        </Rowing>
        <div>
          <label>This Month</label>
        </div>
      </SellingSection>
      <Line></Line>
      <Columning>
        <Rowing2>
          <label>No items were invoiced in this time frame</label>
        </Rowing2>
      </Columning>
    </Top>
  );
};

const Top = styled.div`
  border: 2px solid black;
  padding: 15px 12px;
  label {
    font-size: 13px;
  }
  width: 100%;
`;
const SellingSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
  label {
    color: #212529;
  }
`;
const Rowing = styled.div``;
const Rowing2 = styled.div`
  padding: 79px;
  label {
    color: #777777;
  }
`;
const Columning = styled.div`
  text-align: center !important;
`;
const Line = styled.div`
  color: grey;
  border: 1px solid grey;
  margin-top: 1.5rem;
`;
export default TopSellingitems;
