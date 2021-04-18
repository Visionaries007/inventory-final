import React from "react";
import styled from "styled-components";
const ItemsInfo = ({
  dimension1,
  dimension2,
  dimension3,
  setdimension1,
  setdimension2,
  setdimension3,
  manufacturer,
  setmanufacturer,
  upc,
  setupc,
  ean,
  setean,
  weight,
  setweight,
  brand,
  setbrand,
  mpn,
  setmpn,
  isbn,
  setisbn,
}) => {
  const updatedim1 = (e) => {
    setdimension1(e.target.value);
  };
  const updatedim2 = (e) => {
    setdimension2(e.target.value);
  };
  const updatedim3 = (e) => {
    setdimension3(e.target.value);
  };

  const ManufacterHandler = () => {
    var x = document.getElementById("myManufacter").selectedIndex;
    setmanufacturer(x);
  };
  const upchandler = (e) => {
    setupc(e.target.value);
  };
  const eanhandler = (e) => {
    setean(e.target.value);
  };
  const weighthandler = (e) => {
    setweight(e.target.value);
  };
  const BrandHandler = () => {
    var x = document.getElementById("myBrand").selectedIndex;
    setbrand(x);
  };
  const mpnhandler = (e) => {
    setmpn(e.target.value);
  };
  const isbnhandler = (e) => {
    setisbn(e.target.value);
  };
  return (
    <ItemMaking>
      <div className="dimension1">
        <label className="dim">
          Dimensions <br></br>(cm)
        </label>
        <label className="dim2">
          Length X Width<br></br>X Height
        </label>
      </div>
      <div className="dimension2">
        <div className="d33">
          <input
            value={dimension1}
            onChange={updatedim1}
            className="f1"
            type="text"
          ></input>
          <span>x</span>
          <input
            value={dimension2}
            onChange={updatedim2}
            className="f2"
            type="text"
          ></input>
          <span>x</span>
          <input
            value={dimension3}
            onChange={updatedim3}
            className="f3"
            type="text"
          ></input>
        </div>
      </div>
      <div className="dimension3">
        <label>Manufacturer</label>
      </div>
      <div className="dimension4">
        <select id="myManufacter" onChange={ManufacterHandler}>
          <option value="tel">Chanchal tel</option>
          <option value="Manage Manufacter">Manage Manufacter</option>
        </select>
      </div>
      <div className="dimension5">
        <label>UPC</label>
      </div>
      <div className="dimension6">
        <input value={upc} type="text" onChange={upchandler}></input>
      </div>
      <div className="dimension7">
        <label>EAN</label>
      </div>
      <div className="dimension8">
        <input value={ean} type="text" onChange={eanhandler}></input>
      </div>
      <div className="dimension9">
        <label>Weight</label>
      </div>
      <div className="dimension10">
        <div className="k12">
          <input value={weight} type="text" onChange={weighthandler}></input>
          <label>Kg</label>
        </div>
      </div>
      <div className="dimension11">
        <label>Brand</label>
      </div>
      <div className="dimension12">
        <select id="myBrand" onChange={BrandHandler}>
          <option value="tel">Chanchal tel</option>
          <option value="Manage Manufacter">Manage Manufacter</option>
        </select>
      </div>
      <div className="dimension13">
        <label>MPN</label>
      </div>
      <div className="dimension14">
        <input value={mpn} type="text" onChange={mpnhandler}></input>
      </div>
      <div className="dimension15">
        <label>ISBN</label>
      </div>
      <div className="dimension16">
        <input value={isbn} type="text" onChange={isbnhandler}></input>
      </div>
    </ItemMaking>
  );
};

const ItemMaking = styled.div`
  padding-top: 1rem;
  label {
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
  font-size: 13px;
  display: grid !important;
  grid-gap: 1rem;
  .dimension1 {
    grid-area: b1;
    display: flex;
    flex-direction: column;
    .dim2 {
      font-size: 10px;
    }
  }
  .dimension2 {
    grid-area: b2;

    .f1 {
      width: 70px;
      padding: 1rem;
    }
    .f2 {
      width: 70px;
      padding: 1rem;
    }
    .f3 {
      width: 70px;
      padding: 1rem;
    }
    span {
      padding: 0rem 0.2rem;
    }
  }
  .dimension3 {
    grid-area: b3;
  }
  .dimension4 {
    grid-area: b4;
    select {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  .dimension5 {
    grid-area: b5;
  }
  .dimension6 {
    grid-area: b6;
    input {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  .dimension7 {
    grid-area: b7;
  }
  .dimension8 {
    grid-area: b8;
    input {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  .dimension9 {
    grid-area: b9;
  }
  .dimension10 {
    grid-area: b10;

    input {
      border: none;
      &:focus {
        outline: none;
      }
      padding-left: 1rem;
    }
    label {
      border-left: 1px solid black;
    }
    .k12 {
      border: 1px solid black;
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 57%;
      display: grid;
      grid-template-columns: 15rem 2rem;

      label {
        padding-left: 0.5rem;
      }
    }
  }
  .dimension11 {
    grid-area: b11;
  }
  .dimension12 {
    grid-area: b12;

    select {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  .dimension13 {
    grid-area: b13;
  }
  .dimension14 {
    grid-area: b14;
    input {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  .dimension15 {
    grid-area: b15;
  }
  .dimension16 {
    grid-area: b16;
    input {
      padding: 0.5rem 0rem 0.5rem 1rem;
      width: 70%;
    }
  }
  grid-template-areas:
    ". b1  b2  b9   b10"
    ". b3  b4  b11  b12"
    ". b5  b6  b13  b14"
    ". b7  b8  b15  b16";
`;

export default ItemsInfo;
