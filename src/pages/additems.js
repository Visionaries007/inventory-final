import React, { useState } from "react";
import close from "../img/close.svg";
import styled from "styled-components";
import ItemsInfo from "../ItemsCollection/itemsinfo";
import SalesPerInfo from "../ItemsCollection/salesperinfo";
import NameItem from "../ItemsCollection/nameitem";
import { Link } from "react-router-dom";
const AddItems = ({ item, setitem }) => {
  let unitval = 0;
  const [type, settype] = useState("");
  const [name, setname] = useState("");
  const [sku, setsku] = useState("");
  const [unit, setunit] = useState(unitval);
  const [returnable, setreturnable] = useState(false);
  const [dimension1, setdimension1] = useState("");
  const [dimension2, setdimension2] = useState("");
  const [dimension3, setdimension3] = useState("");
  const [manufacturer, setmanufacturer] = useState(unitval);
  const [upc, setupc] = useState("");
  const [ean, setean] = useState("");
  const [weight, setweight] = useState("");
  const [brand, setbrand] = useState(unitval);
  const [mpn, setmpn] = useState("");
  const [isbn, setisbn] = useState("");
  const [salesprice, setsalesprice] = useState(false);
  const [purchaseInfo, setpurchaseinfo] = useState(false);
  const [sellingprice, setsellingprice] = useState("");
  const [spaccount, setspaccount] = useState(unitval);
  const [spdescription, setspdescription] = useState("");
  const [costprice, setcostprice] = useState("");
  const [cpaccount, setcpaccount] = useState(unitval);
  const [cpdescription, setcpdescription] = useState("");
  return (
    <ItemMaking>
      <Heading12>
        <h3>New Item</h3>
        <span>
          <Link className="labels" to="/displayItems">
            <img src={close} alt="" />
          </Link>
        </span>
      </Heading12>
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

export default AddItems;
