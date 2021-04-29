import React, { useEffect } from "react";

import styled from "styled-components";
const NameItems = ({
  type,
  settype,
  name,
  setname,
  sku,
  setsku,
  unit,
  setunit,
  returnable,
  setreturnable,
  quantity,
  setquantity,
}) => {
  let radio1 = document.querySelector(".radio1");
  let radio2 = document.querySelector(".radio2");
  useEffect(() => {
    if (returnable === true)
      document.querySelector(".returnableitem").checked = true;
    if (type === "Goods") document.querySelector(".radio1").checked = true;
    else if (type === "Service")
      document.querySelector(".radio2").checked = true;
  }, []);
  const typeHandler = () => {
    if (radio1 !== null && radio1.checked) {
      settype("Goods");
    } else if (radio2 !== null) {
      settype("Service");
    }
  };
  const nameHandler = (e) => {
    setname(e.target.value);
  };
  const skuHandler = (e) => {
    setsku(e.target.value);
  };

  const unitHandler = (e) => {
    setunit(e.target.value);
  };

  const returnableHandler = () => {
    if (document.getElementById("returnableitem").checked === true)
      setreturnable(true);
    else setreturnable(false);
  };
  const quantityHandler = (e) => {
    setquantity(e.target.value);
  };

  return (
    <ItemMaking>
      <Grider>
        <div className="d1">
          <label htmlFor="type">Type</label>
        </div>
        <div className="d2">
          <div className="dim2">
            <input
              className="radio1"
              onChange={typeHandler}
              type="radio"
              name="item"
              id="type1"
            ></input>
            <label htmlFor="Goods">Goods</label>
          </div>
          <div className="dim3">
            <input
              className="radio2"
              onChange={typeHandler}
              type="radio"
              name="item"
              id="type2"
            ></input>
            <label htmlFor="Service">Service</label>
          </div>
        </div>
        <div className="d3">
          <label htmlFor="name">Name*</label>
        </div>
        <div className="d4">
          <input
            onChange={nameHandler}
            id="name"
            value={name}
            type="text"
            placeholder="Name"
          ></input>
        </div>
        <div className="d5">
          <label htmlFor="sku">SKU</label>
        </div>
        <div className="d6">
          <input
            onChange={skuHandler}
            id="sku"
            value={sku}
            type="text"
            placeholder="SKU"
          ></input>
        </div>
        <div className="d7">
          <label htmlFor="mySelect">Unit*</label>
        </div>
        <div className="d8">
          <input
            selected={unit}
            onChange={unitHandler}
            id="mySelect"
            placeholder="Unit"
          ></input>
        </div>
        <div className="d9">
          <label htmlFor="quantity">Quantity</label>
        </div>
        <div className="d10">
          <input
            onChange={quantityHandler}
            id="quantity"
            value={quantity}
            type="text"
            placeholder="Quanity"
          ></input>
        </div>
        <div className="d11">
          <input
            type="checkbox"
            id="returnableitem"
            className="returnableitem"
            onChange={returnableHandler}
          ></input>
          <label htmlFor="returnableitem">Returnable Item</label>
        </div>
        <div className="d12">
          <label htmlFor="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile"></input>
        </div>
      </Grider>
    </ItemMaking>
  );
};

const ItemMaking = styled.div`
  font-size: 13px;
  label {
    width: 100%;
    height: 100%;
  }
  padding-bottom: 1rem;
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
    padding: 5.875px 15px;
    color: #e54643;
  }
  .d4 {
    grid-area: d4;
    padding: 0px 15px;
    input {
      padding: 5px 8px;
    }
  }
  .d5 {
    grid-area: d5;
    padding: 5.875px 15px;
  }
  .d6 {
    grid-area: d6;
    padding: 0px 15px;
    input {
      padding: 5px 8px;
    }
  }
  .d7 {
    grid-area: d7;
    padding: 5.875px 15px;
    color: #e54643;
  }
  .d8 {
    grid-area: d8;
    padding: 0px 15px;
    width: 100%;
    input {
      padding: 5px 8px;
    }
  }
  .d9 {
    grid-area: d9;
    padding: 5.875px 15px;
    color: #e54643;
  }
  .d10 {
    grid-area: d10;
    padding: 0px 15px;
    input {
      padding: 5px 8px;
    }
  }
  .d11 {
    grid-area: d11;
    input {
      margin: 0px 4.0625px 0px 0px;
    }
  }
  .d12 {
    grid-area: d12;
  }
  grid-template-areas:
    ". d3 d4  . d12"
    ". d5 d6  . ."
    ". d9 d10 . ."
    ". d7 d8  . ."
    ". d1 d2  . ."
    ". .  d11 . .";
`;

export default NameItems;
