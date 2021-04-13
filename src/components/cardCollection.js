import React from "react";
import styled from "styled-components";
const CardCollection = () => {
  return (
    <Description>
      <Closing>
        <Head1>
          <label>Sales Activity</label>
        </Head1>
        <Cards>
          <Card>
            <h2 className="one">10000</h2>
            <div className="inside">
              <span>Qty</span>
              <label>TO BE PACKED</label>
            </div>
          </Card>
          <Card>
            <h2 className="two">10000</h2>
            <div className="inside">
              <span>Pkgs</span>
              <label>TO BE SHIPPED</label>
            </div>
          </Card>
          <Card>
            <h2 className="three">10000</h2>
            <div className="inside">
              <span>Pkgs</span>
              <label>TO BE DELIVERED</label>
            </div>
          </Card>
          <Card>
            <h2 className="four">10000</h2>
            <div className="inside">
              <span>Qty</span>
              <label>TO BE INVOICE</label>
            </div>
          </Card>
        </Cards>
      </Closing>
      <Line></Line>
      <Summary>
        <label>Inventory Summary</label>
        <Cardy>
          <Car>
            <label>QUANTITY IN HAND</label>
            <label className="help">
              <span>1000000000</span>
            </label>
          </Car>
          <Car>
            <label>QUANTITY TO BE RECEIVED</label>
            <label className="help">
              <span>1000000000</span>
            </label>
          </Car>
        </Cardy>
      </Summary>
    </Description>
  );
};
const Description = styled.div`
  background: #d9f4ff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 20vh;
  column-gap: 2rem;
  overflow: hidden;
  padding: 0rem 1rem 0rem 1rem;
  width: 100%;
  flex-wrap: wrap;
`;
const Cards = styled.div`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 12px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  border-radius: 1rem;
  border: 1px solid black;
  span {
    font-size: 1.2rem;
    display: block;
  }
  .one {
    color: #2485e8;
  }
  .two {
    color: #db584b;
  }
  .three {
    color: #28a745;
  }
  .four {
    color: #ddb630;
  }
  h2 {
    font-size: 36px;
  }
  label {
    margin-top: 2rem;
  }
  .inside {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Summary = styled.div`
  padding: 1rem;
  label {
    margin-left: 2rem;
    font-size: 2rem;
  }
`;
const Cardy = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
const Car = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0rem 1rem 0rem;
  border-radius: 1rem;
  border: 1px solid black;
  label {
    padding: 0rem 3rem 0rem 0rem;
    font-size: 1.2rem;
  }
`;
const Closing = styled.div`
  padding: 0.5rem;
`;
const Head1 = styled.div`
  label {
    margin-left: 2rem;
    font-size: 2rem;
  }
`;
const Line = styled.div`
  color: grey;
  border: 1px solid grey;
  @media screen and (max-width: 1401px) {
    display: none;
  }
`;

export default CardCollection;
