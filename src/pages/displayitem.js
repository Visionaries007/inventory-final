import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CardItem from "../Cards/itemcard";
import image from "../img/girl.jpg";
const DisplayItems = ({ item, setitem }) => {
  return (
    <div>
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
        <Card>
          <div className="lim">
            <img src={image} alt="" />
            <strong>Abhinav</strong>
            <label>SKU : kslkflsdfk</label>
          </div>
          <div>
            <label>
              Stock On Hand : <span>0.0cm</span>
            </label>
          </div>
          <div className="prices">
            <div className="inner">
              <label>Selling Price : Rs.0.00</label>
            </div>
            <div className="inner">
              <label>Cost Price : Rs.0.00</label>
            </div>
          </div>
        </Card>
        {item.item !== undefined &&
          item.item.map((n) => <CardItem n={n} key={n._id} />)}
      </Cards>
    </div>
  );
};
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
  gap: 20px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: 20px;
  padding: 10px;

  font-size: 13px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 20px 1px #888888;
  gap: 12px;
  align-items: center;

  .lim {
    img {
      width: 20rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .inner {
    font-size: 14px;
  }
  .prices {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default DisplayItems;
