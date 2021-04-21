import React from "react";
import styled from "styled-components";
import Statistics from "./Statistics";
import CardCollection from "./cardCollection";
import DashBoard from "./Dashboard";
const CombStatCards = () => {
  return (
    <FullPage>
      <PageMain>
        <Dashing>
          <DashBoard />
        </Dashing>
        <div>
          <CardCollection />
        </div>
        <div>
          <Statistics />
        </div>
      </PageMain>
    </FullPage>
  );
};
const FullPage = styled.div`
  display: flex;
  flex-direction: row;
`;
const Dashing = styled.div`
  position: webkit-sticky;
  position: sticky;
  top: 1;
  background: white;
  border: none;
  box-shadow: 1px 1px #888888;
`;
const PageMain = styled.div`
  margin-left: 1rem;
`;

export default CombStatCards;
