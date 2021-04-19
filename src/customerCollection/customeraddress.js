import React from "react";
import close from "../img/close.svg";
import styled from "styled-components";
import CustomerAddress from "../customerCollection/customeraddress";
const AddCustomer = ({
  biladdattension,
  bilcountry,
  biladdrestreet1,
  biladdrestreet2,
  biladcity,
  bilstate,
  bilzipcode,
  bilphone,
  bilfax,
  shipaddattension,
  shipcountry,
  shipaddrestreet1,
  shipaddrestreet2,
  shipadcity,
  shipstate,
  shipzipcode,
  shipphone,
  shipfax,
}) => {
  const biladdattensionHandler = () => {};
  const bilcountryHandler = () => {};
  const biladdrestreet1Handler = () => {};
  const biladdrestreet2Handler = () => {};
  const biladcityHandler = () => {};
  const bilstateHandler = () => {};
  const bilzipcodeHandler = () => {};
  const bilfaxHandler = () => {};
  const shipaddattensionHandler = () => {};
  const shipcountryHandler = () => {};
  const shipaddrestreet1Handler = () => {};
  const shipaddrestreet2Handler = () => {};
  const shipadcityHandler = () => {};
  const shipstateHandler = () => {};
  const shipzipcodeHandler = () => {};
  const shipphoneHandler = () => {};
  const shipfaxHandler = () => {};

  return (
    <ItemMaking1>
      <form>
        <Grider>
          <div className="d1">
            <label htmlFor="attention">Attention</label>
          </div>
          <div className="d2">
            <input
              onChange={biladdattensionHandler}
              id="attention"
              value={biladdattension}
              type="text"
            ></input>
          </div>

          <div className="d3">
            <label htmlFor="country">Country</label>
          </div>
          <div className="d4">
            <input
              onChange={bilcountryHandler}
              id="country"
              value={bilcountry}
              type="text"
            ></input>
          </div>

          <div className="d5">
            <label htmlFor="address">Address</label>
          </div>
          <div className="d6">
            <input
              onChange={biladdrestreet1Handler}
              id="adress"
              value={biladdrestreet1}
              type="text"
            ></input>
          </div>
          <div className="d7">
            <input
              onChange={biladdrestreet2Handler}
              id="adress"
              value={biladdrestreet2}
              type="text"
            ></input>
          </div>

          <div className="d8">
            <label htmlFor="city">City</label>
          </div>
          <div className="d9">
            <input
              onChange={biladcityHandler}
              id="city"
              value={biladcity}
              type="text"
            ></input>
          </div>

          <div className="d10">
            <label htmlFor="state">State</label>
          </div>
          <div className="d11">
            <select onChange={bilstateHandler} id="state">
              <option value="1">Andaman and Nicobar Islands</option>
              <option value="2">Andhra Pradesh</option>
              <option value="3">Arunachal Pradesh</option>
              <option value="4">Assam</option>
              <option value="5">Bihar</option>
              <option value="6">Chandigarh</option>
              <option value="7">Chhattisgarh</option>
              <option value="8">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="9">Daman and Diu</option>
              <option value="10">Delhi</option>
              <option value="11">Goa</option>
              <option value="12">Gujarat</option>
              <option value="13">Haryana</option>
              <option value="14">Himachal Pradesh</option>
              <option value="15">Jammu and Kashmir</option>
              <option value="16">Jharkhand</option>
              <option value="17">Karnataka</option>
              <option value="18">Kerala</option>
              <option value="19">Ladakh</option>
              <option value="20">Lakshadweep</option>
              <option value="21">Madhya Pradesh</option>
              <option value="22">Maharashtra</option>
              <option value="23">Manipur</option>
              <option value="24">Meghalaya</option>
              <option value="25">Mizoram</option>
              <option value="26">Nagaland</option>
              <option value="27">Odisha</option>
              <option value="28">Puducherry</option>
              <option value="29">Punjab</option>
              <option value="30">Rajasthan</option>
              <option value="31">Sikkim</option>
              <option value="32">Tamil Nadu</option>
              <option value="33">Telangana</option>
              <option value="34">Tripura</option>
              <option value="35">Uttar Pradesh</option>
              <option value="36">West Bengal</option>
            </select>
          </div>

          <div className="d12">
            <label htmlFor="zipcode">Zip Code</label>
          </div>
          <div className="d13">
            <input
              onChange={bilzipcodeHandler}
              id="zipcode"
              value={bilzipcode}
              type="text"
            ></input>
          </div>

          <div className="d14">
            <label htmlFor="fax">Fax</label>
          </div>
          <div className="d15">
            <input
              onChange={bilfaxHandler}
              id="fax"
              value={bilfax}
              type="text"
            ></input>
          </div>

          <div className="d16">
            <label htmlFor="attention1">Attention</label>
          </div>
          <div className="d17">
            <input
              onChange={shipaddattensionHandler}
              id="attention1"
              value={shipaddattension}
              type="text"
            ></input>
          </div>

          <div className="d18">
            <label htmlFor="country1">Country</label>
          </div>
          <div className="d19">
            <input
              onChange={shipcountryHandler}
              id="country1"
              value={shipcountry}
              type="text"
            ></input>
          </div>

          <div className="d20">
            <label htmlFor="address1">Address</label>
          </div>
          <div className="d21">
            <input
              onChange={shipaddrestreet1Handler}
              id="adress1"
              value={shipaddrestreet1}
              type="text"
            ></input>
          </div>
          <div className="d22">
            <input
              onChange={shipaddrestreet2Handler}
              id="adress1"
              value={shipaddrestreet2}
              type="text"
            ></input>
          </div>

          <div className="d23">
            <label htmlFor="city1">City</label>
          </div>
          <div className="d24">
            <input
              onChange={shipadcityHandler}
              id="city1"
              value={shipadcity}
              type="text"
            ></input>
          </div>

          <div className="d25">
            <label htmlFor="state1">State</label>
          </div>
          <div className="d26">
            <select onChange={shipstateHandler} id="state1">
              <option value="1">Andaman and Nicobar Islands</option>
              <option value="2">Andhra Pradesh</option>
              <option value="3">Arunachal Pradesh</option>
              <option value="4">Assam</option>
              <option value="5">Bihar</option>
              <option value="6">Chandigarh</option>
              <option value="7">Chhattisgarh</option>
              <option value="8">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="9">Daman and Diu</option>
              <option value="10">Delhi</option>
              <option value="11">Goa</option>
              <option value="12">Gujarat</option>
              <option value="13">Haryana</option>
              <option value="14">Himachal Pradesh</option>
              <option value="15">Jammu and Kashmir</option>
              <option value="16">Jharkhand</option>
              <option value="17">Karnataka</option>
              <option value="18">Kerala</option>
              <option value="19">Ladakh</option>
              <option value="20">Lakshadweep</option>
              <option value="21">Madhya Pradesh</option>
              <option value="22">Maharashtra</option>
              <option value="23">Manipur</option>
              <option value="24">Meghalaya</option>
              <option value="25">Mizoram</option>
              <option value="26">Nagaland</option>
              <option value="27">Odisha</option>
              <option value="28">Puducherry</option>
              <option value="29">Punjab</option>
              <option value="30">Rajasthan</option>
              <option value="31">Sikkim</option>
              <option value="32">Tamil Nadu</option>
              <option value="33">Telangana</option>
              <option value="34">Tripura</option>
              <option value="35">Uttar Pradesh</option>
              <option value="36">West Bengal</option>
            </select>
          </div>

          <div className="d27">
            <label htmlFor="zipcode">Zip Code</label>
          </div>
          <div className="d28">
            <input
              onChange={shipzipcodeHandler}
              id="zipcode"
              value={bilzipcode}
              type="text"
            ></input>
          </div>

          <div className="d29">
            <label htmlFor="fax">Fax</label>
          </div>
          <div className="d30">
            <input
              onChange={bilfaxHandler}
              id="fax"
              value={bilfax}
              type="text"
            ></input>
          </div>
        </Grider>
      </form>
      <CustomerAddress />
    </ItemMaking1>
  );
};

const ItemMaking1 = styled.div`
  label {
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
`;
const Grider = styled.div`
  display: grid !important;
  grid-gap: 2rem;
  .d1 {
    grid-area: d1;
    padding: 0px 15px 5.875px;
  }
  .d2 {
    grid-area: d2;
    padding: 0px 15px;
    display: flex;
    flex-direction: row;
    .dim2 {
      input {
        margin: 0px 4.0625px 0px 0px;
      }
      margin: 0px 9.75px 0px 0px;
    }
    .dim3 {
      input {
        margin: 0px 4.0625px 0px 0px;
      }
      margin: 0px 9.75px 0px 0px;
    }
  }
  .d3 {
    grid-area: d3;
  }
  .d4 {
    grid-area: d4;
  }
  .d5 {
    grid-area: d5;
  }
  .d6 {
    grid-area: d6;
  }
  .d7 {
    grid-area: d7;
  }
  .d8 {
    grid-area: d8;
  }
  .d9 {
    grid-area: d9;
  }
  .d10 {
    grid-area: d10;
  }
  .d11 {
    grid-area: d11;
  }
  .d12 {
    grid-area: d12;
  }
  .d13 {
    grid-area: d13;
  }
  .d14 {
    grid-area: d14;
  }
  .d15 {
    grid-area: d15;
  }
  .d16 {
    grid-area: d16;
  }
  .d17 {
    grid-area: d17;
  }
  grid-template-areas:
    ".  d1   d2    .  .  "
    ".  d3   d4   d5 d6  "
    ".  d7   d8    .  .  "
    ".  d9  d10    .  .  "
    ". d11  d12    .  .  "
    ". d13  d14  d15  .  "
    ". d16  d17    .  .  ";
`;
export default AddCustomer;
