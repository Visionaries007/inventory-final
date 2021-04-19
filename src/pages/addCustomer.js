import React from "react";
import close from "../img/close.svg";
import styled from "styled-components";
import CustomerAddress from "../customerCollection/customeraddress";
const AddCustomer = ({
  type,
  firstname,
  lastname,
  companyname,
  customerdisplayname,
  customeremail,
  cusworkphone,
  cusmobilephone,
}) => {
  const typeHandler = () => {};
  const nameHandler = () => {};
  const lastnameHandler = () => {};
  const companyHandler = () => {};
  const customerdisplaynameHandler = () => {};
  const customeremailHandler = () => {};
  const cusworkphoneHandler = () => {};
  const cusmobilephoneHandler = () => {};

  return (
    <ItemMaking1>
      <Heading12>
        <h3>New Customer</h3>
        <span>
          <a className="labels" href="/displayItems">
            <img src={close} alt="" />
          </a>
        </span>
      </Heading12>
      <form>
        <Grider>
          <div className="d1">
            <label htmlFor="type">Customer Type</label>
          </div>
          <div className="d2">
            <div className="dim2">
              <input
                className="radio1"
                onChange={typeHandler}
                type="radio"
                name="item"
                id="type"
              ></input>
              <label htmlFor="Goods">Goods</label>
            </div>
            <div className="dim3">
              <input
                className="radio2"
                onChange={typeHandler}
                type="radio"
                name="item"
                id="type"
              ></input>
              <label htmlFor="Service">Service</label>
            </div>
          </div>
          <div className="d3">
            <label htmlFor="name">Primary Contact</label>
          </div>
          <div className="d4">
            <select id="name">
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
              <option>Miss.</option>
              <option>Dr.</option>
            </select>
          </div>
          <div className="d5">
            <input
              onChange={nameHandler}
              id="name"
              value={firstname}
              type="text"
            ></input>
          </div>
          <div className="d6">
            <input
              onChange={lastnameHandler}
              id="name"
              value={lastname}
              type="text"
            ></input>
          </div>
          <div className="d7">
            <label htmlFor="companyname">Company Name </label>
          </div>
          <div className="d8">
            <input
              onChange={companyHandler}
              id="companyname"
              value={companyname}
              type="text"
            ></input>
          </div>
          <div className="d9">
            <label htmlFor="customerdisplayname">Customer Display Name </label>
          </div>
          <div className="d10">
            <input
              onChange={customerdisplaynameHandler}
              id="customerdisplayname"
              value={customerdisplayname}
              type="text"
            ></input>
          </div>
          <div className="d11">
            <label htmlFor="customeremail">Customer Email </label>
          </div>
          <div className="d12">
            <input
              onChange={customeremailHandler}
              id="customeremail"
              value={customeremail}
              type="text"
            ></input>
          </div>
          <div className="d13">
            <label htmlFor="customerphone">Customer Phone </label>
          </div>
          <div className="d14">
            <input
              onChange={cusworkphoneHandler}
              id="customerphone"
              value={cusworkphone}
              type="text"
            ></input>
          </div>
          <div className="d15">
            <input
              onChange={cusmobilephoneHandler}
              id="customerphone"
              value={cusmobilephone}
              type="text"
            ></input>
          </div>
          <div className="d16">
            <label htmlFor="website">Website</label>
          </div>
          <div className="d17">
            <input
              onChange={customeremailHandler}
              id="website"
              value={customeremail}
              type="text"
            ></input>
          </div>
        </Grider>
      </form>
    </ItemMaking1>
  );
};
const Heading12 = styled.div`
  position: webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
  border: none;
  box-shadow: 1px 1px #888888;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  h3 {
    margin: 20px 0px 10px;
  }
  span {
    margin: 15px 0px 0px;
    padding: 8px 0px 0px;
  }
`;
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
