import React from "react";
import close from "../img/close.svg";
import styled from "styled-components";
import ItemsInfo from "../ItemsCollection/itemsinfo";
import SalesPerInfo from "../ItemsCollection/salesperinfo";
import NameItem from "../ItemsCollection/nameitem";
import { Link } from "react-router-dom";
const AddItems = () => {
  return (
    <ItemMaking>
      <Heading12>
        <h3>New Item</h3>
        <span>
          <Link class="labels" to="/displayItems">
            <img src={close} alt="" />
          </Link>
        </span>
      </Heading12>
      <Toper>
        <div className="hello1">
          <NameItem />
        </div>
        <div className="hello2">
          <ItemsInfo />
        </div>
        <div className="hello3">
          <SalesPerInfo />
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
