import React from "react";
import styled from "styled-components";
import image from "../img/girl.jpg";
const itemcard = () => {
  return (
    <Card>
      <div className="lim">
        <img src={image} alt="" />
        <strong>Abhinav</strong>
        <label>SKU : kslkflsdfk</label>
      </div>
      <div>
        <label>
          Stock On Hand : <span>0.0cm</span>
        </label>
      </div>
      <div className="prices">
        <div className="inner">
          <label>Selling Price : Rs.0.00</label>
        </div>
        <div className="inner">
          <label>Cost Price : Rs.0.00</label>
        </div>
      </div>
    </Card>
  );
};
const Card = styled.div`
  margin: 20px;
  padding: 10px;

  font-size: 13px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 20px 1px #888888;
  gap: 12px;
  align-items: center;

  .lim {
    img {
      width: 20rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .inner {
    font-size: 14px;
  }
  .prices {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default itemcard;
