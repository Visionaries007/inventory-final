import React from "react";
import styled from "styled-components";
const ProductDetail = () => {
  return (
    <ProductInfo>
      <Heading>
        <label className="head1">Product Detail</label>
      </Heading>
      <Line></Line>
      <Detailer>
        <ItemsCollection>
          <Item>
            <label className="special1">
              <span>Low Stock Items</span>
            </label>
            <a href="#">
              <label className="special3">0</label>
            </a>
          </Item>
          <Item>
            <label className="specs1">
              <span>All Item Groups</span>
            </label>
            <a href="#">
              <label className="special2">0</label>
            </a>
          </Item>
          <Item>
            <label className="specs1">
              <span>All Items</span>
            </label>
            <a href="#">
              <label className="special2">0</label>
            </a>
          </Item>
        </ItemsCollection>
        <Line></Line>
        <Section2>
          <label className="heading2">
            <span className="head2">Active Items</span>
          </label>
          <div className="heading3">
            <label className="head3">No Active Items</label>
          </div>
        </Section2>
      </Detailer>
    </ProductInfo>
  );
};
const ProductInfo = styled.div`
  .head1 {
    color: #212529;
    font-size: 13px;
    margin: 0px 0px 10px;
  }

  display: flex;
  flex-direction: column;
  border: 2px solid black;
  gap: 12px;
  width: 100%;
  height: 100%;
  padding: 15px 12px;
`;
const Heading = styled.div`
  padding: 0px 10px;
  font-size: 13px;
`;
const Detailer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ItemsCollection = styled.div`
  width: 100%;
  padding: 20px 10px 27px 25px;
  display: flex;
  flex-direction: column;
  .special1 {
    color: #db584b;
  }
  .special3 {
    color: #db584b;
    font-size: 18px;
    padding: 0rem 3rem;
    margin: 0 0 6.5px;
  }
  .special2 {
    color: #222222;
    padding: 0rem 3rem;
    margin: 0 0 6.5px;
    font-size: 18px;
  }
  a {
    text-decoration: none;
  }
`;
const Item = styled.div`
  .specs1 {
    color: #777777;
  }
  label {
    font-size: 17px;
  }
  padding: 12px 24px 4px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Section2 = styled.div`
  color: #777777;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items: center !important;
  width: 100%;
  gap: 30px;
  .heading2 {
    padding: 20px 0px 0px;
  }
  .heading3 {
    margin: 8px 19.5875px 8px 19.575px;
    padding: 37px 5px;
  }
  .head2 {
    font-size: 16px;
  }
  .head3 {
    font-size: 10px;
  }
`;
const Line = styled.div`
  color: grey;
  border: 1px solid grey;
`;

export default ProductDetail;
