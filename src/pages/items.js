import React from "react";
import close from "../img/close.svg";
import styled from "styled-components";
const Items = () => {
  return (
    <ItemMaking>
      <Heading12>
        <h3>Items Making</h3>
        <span>
          <img src={close} alt="" />
        </span>
      </Heading12>
      <div>
        <form action="">
          <div>
            <form>
              <label>Type</label>
              <input type="radio" id="Goods"></input>
              <label for="Goods">Goods</label>
              <input type="radio" id="Service"></input>
              <label for="Service">Service</label>
            </form>
          </div>
          <div>
            <label>Name*</label>
            <input></input>
          </div>
          <div>
            <label>SKU</label>
            <input></input>
          </div>
          <div>
            <label>Unit*</label>
            <select>
              <option value="box">box</option>
              <option value="cm">cm</option>
              <option value="dz">dz</option>
              <option value="ft">ft</option>
              <option value="g">g</option>
              <option value="in">in</option>
              <option value="kg">kg</option>
              <option value="km">km</option>
              <option value="lb">lb</option>
              <option value="mg">mg</option>
              <option value="m">m</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
        </form>
      </div>
    </ItemMaking>
  );
};
const ItemMaking = styled.div`
  width: 100%;
`;
const Heading12 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  h3 {
    margin: 20px 0px 10px;
  }
  span {
    margin: 20px 0px 0px;
    padding: 8px 0px 0px;
  }
`;
export default Items;
