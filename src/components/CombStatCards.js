import React from "react";
import styled from "styled-components";
import Statistics from "./Statistics";
import CardCollection from "./cardCollection";
import Options from "./Options";
import DashBoard from "./Dashboard";
const CombStatCards = () => {
  return (
    <FullPage>
      <Dashy>
        <Options />
      </Dashy>
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
const Dashing = styled.div``;
const Dashy = styled.div``;
const PageMain = styled.div`
  margin-left: 1rem;
`;

export default CombStatCards;
