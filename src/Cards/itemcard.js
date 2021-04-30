import React, { useEffect } from "react";
import styled from "styled-components";
import image from "../img/girl.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { popup } from "../animations";
const ItemCard = ({ n }) => {
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <ItemStyle>
      <Link to={`/displayItems/${n._id}`}>
        <Card
          layoutId={n._id}
          onClick={loadDetailHandler}
          variants={popup}
          initial="hidden"
          animate="show"
        >
          <div className="lim">
            <img src={image} alt="" />
            <strong>{n.name}</strong>
            <label>SKU : {n.sku}</label>
          </div>
          <div>
            <label>
              Stock On Hand : <span>0.0cm</span>
            </label>
          </div>
          <div className="prices">
            <div className="inner">
              <label>Selling Price : Rs. {n.sellingprice}.00</label>
            </div>
            <div className="inner">
              <label>Cost Price : Rs. {n.costprice}.00</label>
            </div>
          </div>
        </Card>
      </Link>
    </ItemStyle>
  );
};
const ItemStyle = styled(motion.div)`
  a {
    text-decoration: none;
  }
  label,
  strong {
    padding-top: 0.5rem;
    color: black;
    word-wrap: break-word;
    max-width: 20rem;
  }
`;
const Card = styled(motion.div)`
  background: white;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 20px 1px #888888;
  gap: 12px;
  align-items: center;
  &:hover {
    transform: scale(1.1);
    transition: 0.1s ease;
  }
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
    font-size: 13px;
  }
  .prices {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
export default ItemCard;
