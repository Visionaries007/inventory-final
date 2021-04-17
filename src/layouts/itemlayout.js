import React from "react";
import styled from "styled-components";
function itemlayout() {
  return (
    <div>
      <Card>
        <div className="lim">
          <img src="" alt="" />
          <strong>Abhinav</strong>
          <label>SKU : kslkflsdfk</label>W
        </div>
        <div className="stock">
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
    </div>
  );
}
const Card = styled.div`
  margin: 20px;
  padding: 10px;

  font-size: 13px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 20px 1px #888888;
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
  .stock {
    padding: 20px 0px 0px;
  }
  .prices {
    padding: 20px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default itemlayout;
