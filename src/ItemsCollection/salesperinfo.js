import React from "react";
import styled from "styled-components";
const ItemsInfo = ({
  salesprice,
  setsalesprice,
  purchaseInfo,
  setpurchaseinfo,
  sellingprice,
  setsellingprice,
  spaccount,
  setspaccount,
  spdescription,
  setspdescription,
  costprice,
  setcostprice,
  cpaccount,
  setcpaccount,
  cpdescription,
  setcpdescription,
}) => {
  const sellingpricehandler = (e) => {
    setsellingprice(e.target.value);
  };
  const Costpricehandler = (e) => {
    setcostprice(e.target.value);
  };
  const salespricehandler = () => {
    if (document.getElementById("salesprice").checked === true)
      setsalesprice(true);
    else setsalesprice(false);
  };
  const purchaseInfohandler = () => {
    if (document.getElementById("purchaseinformation").checked === true)
      setpurchaseinfo(true);
    else setpurchaseinfo(false);
  };
  const accountsphandler = () => {
    var x = document.getElementById("accountsp").selectedIndex;
    setspaccount(x);
  };
  const accountcphandler = () => {
    var x = document.getElementById("accountcp").selectedIndex;
    setcpaccount(x);
  };
  const cpdescriphandler = (e) => {
    setcpdescription(e.target.value);
  };
  const spdescriphandler = (e) => {
    setspdescription(e.target.value);
  };
  return (
    <ItemMaking>
      <div className="d1">
        <input
          type="checkbox"
          id="salesprice"
          name="salesprice"
          onChange={salespricehandler}
        ></input>
        <label htmlFor="salesprice">Sales Price</label>
      </div>
      <div className="d2">
        <label htmlFor="sellingprice" className="dm">
          Selling Price*
        </label>
      </div>
      <div className="d3">
        <div className="j12">
          <label htmlFor="inr">INR</label>
          <input
            id="sellingprice"
            onChange={sellingpricehandler}
            value={sellingprice}
            type="text"
          ></input>
        </div>
      </div>
      <div className="d4">
        <label htmlFor="accountsp">Acount*</label>
      </div>
      <div className="d5">
        <select id="accountsp" onChange={accountsphandler}>
          <option value="tel">Chanchal tel</option>
          <option value="Manage Manufacter">Manage Manufacter</option>
        </select>
      </div>
      <div className="d6">
        <label htmlFor="description">Description</label>
      </div>
      <div className="d7">
        <textarea
          id="description"
          value={spdescription}
          onChange={spdescriphandler}
          name="review"
          rows="5"
          cols="30"
        ></textarea>
      </div>
      <div className="d8">
        <input
          type="checkbox"
          id="purchaseinformation"
          name="purchaseinformation"
          onChange={purchaseInfohandler}
        ></input>
        <label htmlFor="purchaseinformation">Purchase Information</label>
      </div>
      <div className="d9">
        <label htmlFor="costprice" className="dm">
          Cost Price*
        </label>
      </div>
      <div className="d10">
        <div className="j13">
          <label>INR</label>
          <input
            id="costprice"
            onChange={Costpricehandler}
            value={costprice}
            type="text"
          ></input>
        </div>
      </div>
      <div className="d11">
        <label htmlFor="accountcp">Account*</label>
      </div>
      <div className="d12">
        <select id="accountcp" onChange={accountcphandler}>
          <option value="tel">Chanchal tel</option>
          <option value="Manage Manufacter">Manage Manufacter</option>
        </select>
      </div>
      <div className="d13">
        <label htmlFor="description1">Description</label>
      </div>
      <div className="d14">
        <textarea
          id="description1"
          value={cpdescription}
          onChange={cpdescriphandler}
          name="review"
          rows="5"
          cols="30"
        ></textarea>
      </div>
    </ItemMaking>
  );
};

const ItemMaking = styled.div`
  padding-top: 1rem;
  label {
    width: 100%;
    height: 100%;
  }
  display: grid !important;
  grid-gap: 1rem;
  .d1 {
    grid-area: b1;
    margin: 0px 0px 13px;
    input {
      margin: 0px 4.0625px 0px 0px;
    }
    label {
      font-size: 16px;
    }
  }
  .d2 {
    grid-area: b2;

    .dm {
      color: #e54643;
    }
    label {
      border-bottom: 1px dashed red;
    }
  }
  .d3 {
    grid-area: b3;
    width: 60%;
    input {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
      border: none;
      &:focus {
        outline: none;
      }
    }
    .j12 {
      border: 1px solid black;
      label {
        padding: 0px 10px;
        border-right: 1px solid black;
      }
    }
  }
  .d4 {
    grid-area: b4;
    color: #e54643;
    label {
      border-bottom: 1px dashed red;
    }
  }
  .d5 {
    grid-area: b5;
    select {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  .d6 {
    grid-area: b6;
  }
  .d7 {
    grid-area: b7;
    textarea {
      padding: 0.5rem 0rem 0rem 0.5rem;
    }
  }
  .d8 {
    grid-area: b8;
    margin: 0px 0px 13px;
    font-size: 16px !important;
    input {
      margin: 0px 4.0625px 0px 0px;
    }
    label {
      font-size: 16px;
    }
  }
  .d9 {
    grid-area: b9;
    color: #e54643;
    label {
      border-bottom: 1px dashed red;
    }
  }
  .d10 {
    grid-area: b10;
    width: 60%;
    input {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
      border: none;
      &:focus {
        outline: none;
      }
    }
    .j13 {
      border: 1px solid black;
      label {
        padding: 0px 10px;
        border-right: 1px solid black;
      }
    }
  }
  .d11 {
    grid-area: b11;
    color: #e54643;
    label {
      border-bottom: 1px dashed red;
    }
  }
  .d12 {
    grid-area: b12;
    select {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  .d13 {
    grid-area: b13;
  }
  .d14 {
    grid-area: b14;
    textarea {
      padding: 0.5rem 0rem 0rem 0.5rem;
    }
  }

  grid-template-areas:
    ". b1 . b8 ."
    ". b2 b3 b9 b10"
    ". b4 b5 b11 b12"
    ". b6 b7 b13 b14";
`;

export default ItemsInfo;
