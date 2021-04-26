import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CardItem from "../Cards/itemcard";
import ItemDetail from "../Detail/Itemdetail";
import { useLocation } from "react-router-dom";
const DisplayItems = ({ item, setitem }) => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);
  return (
    <ItemMaking>
      {pathId && <ItemDetail pathId={pathId} />}
      <Total>
        <div>
          <Selector>
            <option className="d1">All items</option>
            <option className="d1">Active Items</option>
            <option className="d1">Ungrouped Items</option>
            <option className="d1">Low Stock Items</option>
            <option className="d1">Sales</option>
            <option className="d1">Purchases</option>
            <option className="d1">Inventory Items</option>
            <option className="d1">Non-Inventory Items</option>
            <option className="d1">Services</option>
            <option className="d1">Inactive Items</option>
            <option className="d1">Returnable Items</option>
            <option className="d1">Non Returnable Items</option>
          </Selector>
        </div>
        <div className="btn1">
          <button>
            <Link className="labels" to="/additems">
              + New
            </Link>
          </button>
        </div>
      </Total>
      <Cards>
        {item.item !== undefined &&
          item.item.map((n) => <CardItem n={n} key={n._id} />)}
      </Cards>
    </ItemMaking>
  );
};

const ItemMaking = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .btn1 {
    padding: 1rem;
    button {
      padding: 0.5rem;
      color: white;
      background: #2fa3e6;
      border: none;
      &:hover {
        transform: scale(1.1);
        transition: 0.5s ease;
      }
      border-radius: 3px;
    }
    .labels {
      text-decoration: none;
      color: white;
    }
  }
  box-shadow: 10px 2px black;
`;

const Selector = styled.select`
  border: none;
  padding: 1rem;
  &:focus {
    outline: none;
  }
  -webkit-appearance: none;
  .d1 {
    font-size: 12px !important;
  }
  font-size: 20px;
`;
const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default DisplayItems;
