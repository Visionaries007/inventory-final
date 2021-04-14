import React from "react";
import styled from "styled-components";
const DisplayPackages = () => {
  return (
    <div>
      <Disp>
        <h2>All Packages</h2>
        <button className="new-btn"><div>+</div> New</button>
      </Disp>
      <Packg>
        <VertBox>
          <div className="upbox1 box2"><span>Packages, Not Shipped</span></div>
          <div className="NotShip box1">
            <div className="inner-box box3"><label >No Records Found</label></div>
          </div>
        </VertBox>
        <VertBox>
          <div className="upbox2 box2"><span>Shipped Packages</span></div>
          <div className="Ship box1">
            <div className="inner-box box3">
              <label>No Records Found</label></div>
          </div>
        </VertBox>
        <VertBox>
          <div className="upbox3 box2"><span>Delivered Packages</span></div>
          <div className="Deli box1">
            <div className="inner-box box3">
              <label>No Records Found</label>
            </div>
          </div>
        </VertBox>
      </Packg>
    </div>
  );
};
const Packg = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  padding: 50px 100px 50px 100px;
  grid-gap: 3rem;
  .box1{
    border: none;
    background: #fafafa;
    height: 569px;
    padding: 10px 12px 12px;
  }
`;
const VertBox = styled.div`
.box2{
    border: none;
    padding: 28px 10px 25px 28px;
    span{
      font-size: 16px;
    }
  }
  .upbox1{
    background: #D9F3F9;
  }
  .upbox2{
    background: #FAF8CA;
  }
  .upbox3{
    background: #D4F1B4;
  }
  .box3{
    /* border: 3px solid black; */
    padding: 45px 0px;
    margin: 12px 0px 0px;
    background: #FFFFFF;
    text-align: center;
  }
  label{
    margin: 0px 0px 6.5px;
    font-size: 13px;
  }
`;
const Disp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 100px 0px 100px;
  h2{
   font-size: 24px;
   font-weight: normal;
  }
  .new-btn{
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #2FA3E6;
    padding: 2px 9px;
    color: white;
    border: none;
    border-radius: 3px;
    .plus{
      font-size: 17px;
      padding: 0px 5px 2px 0px;
    }
  }
`;
export default DisplayPackages;
