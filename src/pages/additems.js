import React from "react";
import close from "../img/close.svg";
import styled from "styled-components";
const AddItems = () => {
  return (
    <ItemMaking>
      <Heading12>
        <h3>Items Making</h3>
        <span>
          <img src={close} alt="" />
        </span>
      </Heading12>
      <Flexer>
        <div class="fill">
          <form action="">
            <div>
              <Forming>
                <Naming12>
                  <label>Type</label>
                </Naming12>
                <Radios>
                  <Rady>
                    <input type="radio" name="item" id="Goods"></input>
                    <label for="Goods">Goods</label>
                    <input type="radio" name="item" id="Service"></input>
                    <label for="Service">Service</label>
                  </Rady>
                </Radios>
              </Forming>
            </div>
            <Naming>
              <label>Name*</label>
              <Bounce>
                <input></input>
              </Bounce>
            </Naming>
            <Naming>
              <label>SKU</label>
              <Bounce>
                <input></input>
              </Bounce>
            </Naming>
            <Naming>
              <label>Unit*</label>
              <Bounce>
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
              </Bounce>
            </Naming>
          </form>
        </div>
        <div className="picker">
          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile"></input>
        </div>
      </Flexer>
    </ItemMaking>
  );
};

const ItemMaking = styled.div`
  label {
    font-size: 13px;

    width: 100%;
    height: 100%;
  }
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
const Radios = styled.form`
  display: flex;
  padding: 0px 15px;
  flex-direction: row;
  justify-content: space-around;
`;
const Forming = styled.form`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
`;
const Rady = styled.form`
  margin: 0px 9.75px 0px 0px;
  display: flex;
  flex-direction: row !important;
  gap: 10px;
`;
const Naming = styled.div`
  display: flex;
  flex-direction: row;
  label {
    padding: 5.875px 15px;
  }
  input {
    padding: 5px 8px;
  }
  select {
    padding: 5px 30px 5px 8px;
  }
`;
const Naming12 = styled.div`
  label {
    padding: 0px 15px 5.875px;
  }
`;
const Bounce = styled.div`
  padding: 0px 15px;
  width: 100%;
  select {
    width: 100%;
  }
`;
const Flexer = styled.div`
  display: grid;
  .picker {
    justify-items: center;
    grid-area: b1;
  }
  .fill {
    padding: 0px 15px;
    grid-area: b2;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  grid-template-areas: "b2 . . b1";
`;
export default AddItems;
