import React, { useState } from "react";
import axios from "axios";
import close from "../img/close.svg";
import styled from "styled-components";
import ItemsInfo from "../ItemsCollection/itemsinfo";
import SalesPerInfo from "../ItemsCollection/salesperinfo";
import NameItem from "../ItemsCollection/nameitem";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
const ItemUpdate = ({ n, pathId, setupdate }) => {
  console.log(pathId);
  const history = useHistory();
  const [type, settype] = useState(n.n.type === null ? "" : n.n.type);
  const [name, setname] = useState(n.n.name === null ? "" : n.n.name);
  const [sku, setsku] = useState(n.n.sku === null ? "" : n.n.sku);
  const [unit, setunit] = useState(n.n.unit === null ? "" : n.n.unit);
  const [returnable, setreturnable] = useState(n.n.returnable);
  const [dimension1, setdimension1] = useState(
    n.n.dimension1 === null ? "" : n.n.dimension1
  );
  const [dimension2, setdimension2] = useState(
    n.n.dimension2 === null ? "" : n.n.dimension2
  );
  const [dimension3, setdimension3] = useState(
    n.n.dimension3 === null ? "" : n.n.dimension3
  );
  const [manufacturer, setmanufacturer] = useState(
    n.n.manufacturer === null ? "" : n.n.manufacturer
  );
  const [upc, setupc] = useState(n.n.upc === null ? "" : n.n.upc);
  const [ean, setean] = useState(n.n.ean === null ? "" : n.n.ean);
  const [weight, setweight] = useState(n.n.weight === null ? "" : n.n.weight);
  const [brand, setbrand] = useState(n.n.brand === null ? "" : n.n.brand);
  const [mpn, setmpn] = useState(n.n.mpn === null ? "" : n.n.mpn);
  const [isbn, setisbn] = useState(n.n.isbn === null ? "" : n.n.isbn);
  const [salesprice, setsalesprice] = useState(n.n.salesprice);
  const [purchaseInfo, setpurchaseinfo] = useState(n.n.purchaseInfo);
  const [sellingprice, setsellingprice] = useState(
    n.n.sellingprice === null ? "" : n.n.sellingprice
  );
  const [spaccount, setspaccount] = useState(
    n.n.spaccount === null ? "" : n.n.spaccount
  );
  const [spdescription, setspdescription] = useState(
    n.n.spdescription === null ? "" : n.n.spdescription
  );
  const [costprice, setcostprice] = useState(
    n.n.costprice === null ? "" : n.n.costprice
  );
  const [cpaccount, setcpaccount] = useState(
    n.n.cpaccount === null ? "" : n.n.cpaccount
  );
  const [cpdescription, setcpdescription] = useState(
    n.n.cpdescription === null ? "" : n.n.cpdescription
  );
  const [quantity, setquantity] = useState(
    n.n.quantity === null ? "" : n.n.quantity
  );
  const CancelHandler = () => {
    setupdate(false);
  };
  const inputhandler = (e) => {
    e.preventDefault();

    const itemstruct = {
      type,
      name,
      sku,
      unit,
      returnable,
      dimension1,
      dimension2,
      dimension3,
      manufacturer,
      upc,
      ean,
      weight,
      brand,
      mpn,
      isbn,
      salesprice,
      purchaseInfo,
      sellingprice,
      spaccount,
      spdescription,
      costprice,
      cpaccount,
      cpdescription,
      quantity,
    };
    console.log("hey form submited");

    axios
      .patch(`http://localhost:5000/items/${pathId}`, itemstruct)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });

    settype("");
    setname("");
    setsku("");
    setunit("");
    setreturnable("");
    setdimension1("");
    setdimension2("");
    setdimension3("");
    setmanufacturer("");
    setupc("");
    setean("");
    setweight("");
    setbrand("");
    setmpn("");
    setisbn("");
    setsalesprice("");
    setpurchaseinfo("");
    setsellingprice("");
    setspaccount("");
    setspdescription("");
    setcostprice("");
    setcpaccount("");
    setcpdescription("");
    setquantity("");

    history.push("/displayitems");
    window.location.reload(false);
  };
  return (
    <ItemMaking>
      <Heading12>
        <h3>Update Item</h3>
        <span onClick={CancelHandler}>
          <img src={close} alt="" />
        </span>
      </Heading12>
      <form>
        <Toper>
          <div className="hello1">
            <NameItem
              type={type}
              settype={settype}
              name={name}
              setname={setname}
              sku={sku}
              setsku={setsku}
              unit={unit}
              setunit={setunit}
              returnable={returnable}
              setreturnable={setreturnable}
              quantity={quantity}
              setquantity={setquantity}
            />
          </div>
          <div className="hello2">
            <ItemsInfo
              dimension1={dimension1}
              dimension2={dimension2}
              dimension3={dimension3}
              setdimension1={setdimension1}
              setdimension2={setdimension2}
              setdimension3={setdimension3}
              manufacturer={manufacturer}
              setmanufacturer={setmanufacturer}
              upc={upc}
              setupc={setupc}
              ean={ean}
              setean={setean}
              weight={weight}
              setweight={setweight}
              brand={brand}
              setbrand={setbrand}
              mpn={mpn}
              setmpn={setmpn}
              isbn={isbn}
              setisbn={setisbn}
            />
          </div>
          <div className="hello3">
            <SalesPerInfo
              salesprice={salesprice}
              setsalesprice={setsalesprice}
              purchaseInfo={purchaseInfo}
              setpurchaseinfo={setpurchaseinfo}
              sellingprice={sellingprice}
              setsellingprice={setsellingprice}
              spaccount={spaccount}
              setspaccount={setspaccount}
              spdescription={spdescription}
              setspdescription={setspdescription}
              costprice={costprice}
              setcostprice={setcostprice}
              cpaccount={cpaccount}
              setcpaccount={setcpaccount}
              cpdescription={cpdescription}
              setcpdescription={setcpdescription}
            />
          </div>
        </Toper>
        <Down>
          <div className="both">
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="btn1"
                onClick={inputhandler}
              >
                Update
              </motion.button>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn2"
                onClick={CancelHandler}
              >
                Cancel
              </motion.button>
            </div>
          </div>
        </Down>
      </form>
    </ItemMaking>
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
const ItemMaking = styled.div`
  label {
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
`;
const Toper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 3rem;
  padding-top: 3rem;
  .hello1 {
    border-bottom: 1px solid black;
  }
  .hello2 {
    border-bottom: 1px solid black;
  }
`;
const Down = styled.div`
  position: webkit-sticky;
  position: sticky;
  bottom: 0;
  margin-top: 6.5rem;
  background: white;
  border: none;
  box-shadow: 0px -5px 20px 1px #adadad;
  .both {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;
    padding: 0.5rem;
    button {
      padding: 1rem;
      border: none;
      cursor: pointer;
      border-radius: 1rem;
    }
  }

  .btn1 {
    background: #2fa3e6;
    color: #ffffff;
  }
  .btn2 {
    background: #2fa3e6;
    color: #ffffff;
  }
`;

export default ItemUpdate;
