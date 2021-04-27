import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image from "../img/girl.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ItemDetail = ({ pathId }) => {
  const history = useHistory();
  console.log(typeof pathId);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/displayItems");
    }
  };
  const [n, setn] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${pathId}`)
      .then((response) => {
        setn({ n: response.data });
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  console.log(n);
  if (n.n !== undefined) {
    return (
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutId={pathId}>
          <Grider>
            <div className="d1  de">
              <label>Type :</label>{" "}
            </div>
            <div className="d2 df">
              <label>{n.n.type}</label>{" "}
            </div>

            <div className="d5 de">
              <label>SKU :</label>{" "}
            </div>
            <div className="d6 df">
              <label>{n.n.sku}</label>{" "}
            </div>
            <div className="d7 de">
              <label>Quantity :</label>{" "}
            </div>
            <div className="d8 df">
              <label>{n.n.quantity}</label>{" "}
            </div>
            <div className="d9 de">
              <label>Unit :</label>{" "}
            </div>
            <div className="d10 df">
              <label>{n.n.unit}</label>{" "}
            </div>
            <div className="d11 de">
              <label>Returnable Item :</label>{" "}
            </div>
            <div className="d12 df">
              <label>{n.n.returnable}</label>{" "}
            </div>
            <div className="d13 de">
              <label>Dimension :</label>{" "}
            </div>
            <div className="dffg">
              <div className="d14 df">
                <label>
                  {n.n.dimension1}
                  <span> x </span>
                </label>{" "}
              </div>
              <div className="d16 df">
                <label>
                  {n.n.dimension2}
                  <span> x </span>
                </label>{" "}
              </div>
              <div className="d18 df">
                <label>{n.n.dimension3}</label>{" "}
              </div>
            </div>
            <div className="d19 de">
              <label>Manufacturer :</label>{" "}
            </div>
            <div className="d20 df">
              <label>{n.n.manufacturer}</label>{" "}
            </div>
            <div className="d21 de">
              <label>UPC :</label>{" "}
            </div>
            <div className="d22 df">
              <label>{n.n.upc}</label>{" "}
            </div>
            <div className="d23 de">
              <label>EAN :</label>{" "}
            </div>
            <div className="d24 df">
              <label>{n.n.ean}</label>{" "}
            </div>
            <div className="d25 de">
              <label>Weight :</label>{" "}
            </div>
            <div className="d26 df">
              <label>{n.n.weight}</label>{" "}
            </div>
            <div className="d27 de">
              <label>Brand :</label>{" "}
            </div>
            <div className="d28 df">
              <label>{n.n.brand}</label>{" "}
            </div>
            <div className="d29 de">
              <label>MPN :</label>{" "}
            </div>
            <div className="d30 df">
              <label>{n.n.mpn}</label>{" "}
            </div>
            <div className="d31 de">
              <label>ISBN :</label>{" "}
            </div>
            <div className="d32 df">
              <label>{n.n.isbn}</label>{" "}
            </div>
            <div className="d33">
              <label>Purchase Information</label>{" "}
            </div>
            <div className="d34 de">
              <label>Cost Price :</label>{" "}
            </div>
            <div className="d35 df">
              <label>{n.n.costprice}</label>{" "}
            </div>
            <div className="d36 de">
              <label>Account :</label>{" "}
            </div>
            <div className="d37 df">
              <label>{n.n.cpaccount}</label>{" "}
            </div>
            <div className="d38 de">
              <label>Description :</label>{" "}
            </div>
            <div className="d39 df">
              <label>{n.n.cpdescription}</label>{" "}
            </div>
            <div className="d40">
              <label>Sales Information</label>{" "}
            </div>
            <div className="d41 de">
              <label>Selling Price</label>{" "}
            </div>
            <div className="d42 df">
              <label>{n.n.sellingprice}</label>{" "}
            </div>
            <div className="d43 de">
              <label>Account :</label>{" "}
            </div>
            <div className="d44 df">
              <label>{n.n.spaccount} </label>{" "}
            </div>
            <div className="d45 de">
              <label>Description :</label>{" "}
            </div>
            <div className="d46 df">
              <label>{n.n.spdescription}</label>{" "}
            </div>
          </Grider>
          <div>
            <div className="d47">
              <img src={image} alt="" />
            </div>
            <div className="mainname">
              <div className="d3 de">
                <label>Name :</label>{" "}
              </div>
              <div className="d4 df">
                <label>{n.n.name}</label>{" "}
              </div>
            </div>
            <div className="nut">
              <button className="btn1">Edit</button>
              <button className="btn2">Delete</button>
            </div>
          </div>
        </Detail>
      </CardShadow>
    );
  } else return null;
};
const CardShadow = styled(motion.div)`
  button {
    padding: 1rem 2rem;
    border: none;
    background: #2fa3e6;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }
  font-size: 2rem;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Grider = styled(motion.div)`
  display: grid;
  .dffg {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    grid-area: d67;
  }
  .d1 {
    grid-area: d1;
  }
  .d2 {
    grid-area: d2;
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
    span {
      font-size: 2rem;
      color: grey;
    }
  }

  .d16 {
    grid-area: d16;
    span {
      font-size: 2rem;
      color: grey;
    }
  }
  .d17 {
    grid-area: d17;
  }
  .d18 {
    grid-area: d18;
  }
  .d19 {
    grid-area: d19;
  }
  .d20 {
    grid-area: d20;
  }
  .d21 {
    grid-area: d21;
  }
  .d22 {
    grid-area: d22;
  }
  .d23 {
    grid-area: d23;
  }
  .d24 {
    grid-area: d24;
  }
  .d25 {
    grid-area: d25;
  }
  .d26 {
    grid-area: d26;
  }
  .d27 {
    grid-area: d27;
  }
  .d28 {
    grid-area: d28;
  }
  .d29 {
    grid-area: d29;
  }
  .d30 {
    grid-area: d30;
  }
  .d31 {
    grid-area: d31;
  }
  .d32 {
    grid-area: d32;
  }
  .d33 {
    grid-area: d33;
  }
  .d34 {
    grid-area: d34;
  }
  .d35 {
    grid-area: d35;
  }
  .d36 {
    grid-area: d36;
  }
  .d37 {
    grid-area: d37;
  }
  .d38 {
    grid-area: d38;
  }
  .d39 {
    grid-area: d39;
  }
  .d40 {
    grid-area: d40;
  }
  .d41 {
    grid-area: d41;
  }
  .d42 {
    grid-area: d42;
  }
  .d43 {
    grid-area: d43;
  }
  .d44 {
    grid-area: d44;
  }
  .d45 {
    grid-area: d45;
  }
  .d46 {
    grid-area: d46;
  }
  .d47 {
    grid-area: d47;
  }
  grid-gap: 2rem;
  grid-template-areas:
    " .  d1  d2   .   ."
    " .  d5  d6   .   ."
    " .  d7  d8   .   ."
    " .  d9  d10  .   ."
    " .  d11 d12  .   ."
    " .  d13 d67  .   ."
    " .  d19 d20  .   ."
    " .  d21 d22  .   ."
    " .  d23 d24  .   ."
    " .  d25 d26  .   ."
    " .  d27 d28  .   ."
    " .  d29 d30  .   ."
    " .  d31 d32  .   ."
    " .  d33  .   .   ."
    " .  d34 d35  .   ."
    " .  d36 d37  .   ."
    " .  d38 d39  .   ."
    " .  d40  .   .   ."
    " .  d41 d42  .   ."
    " .  d43 d44  .   ."
    " .  d45 d46  .   .";
`;
const Detail = styled(motion.div)`
  border-radius: 1rem;
  padding: 4rem 5rem;
  margin-top: 3rem;
  background: white;
  position: absolute;
  left: 20%;
  color: black;
  img {
    width: 30rem;
  }

  .dd {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .de {
    color: grey;
  }
  .df {
    color: black;
  }
  display: flex;
  flex-direction: row;
  gap: 10rem;
  .d4 {
    max-width: 20rem;
    word-break: break-word;
  }
  .mainname {
    padding: 2rem 0rem 0rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    label {
      word-break: break-word;
    }
  }
  .nut {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export default ItemDetail;
