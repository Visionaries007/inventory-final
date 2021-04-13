import React from "react";
import styled from "styled-components";

const DashBoard = () => {
  return (
    <Navigation>
      <Navuser>
        <ul>
          <li>Dashboard</li>
          <li className="Li2">Recent Updates</li>
        </ul>
      </Navuser>
      <GST>
        <h2>GST Number: +91 8433837399</h2>
        <p>Mon - Fri 9:00 AM -7:00PM</p>
      </GST>
    </Navigation>
  );
};
const Navigation = styled.div`
  margin: 0.5rem 0rem 0rem 0rem;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Navuser = styled.div`
  ul {
    list-style: none;
    display: inline-flex;
    .Li2 {
      color: #2485e8;
    }
  }
  li {
    font-size: 2.5rem;
    width: 200px;
    height: 5px;
  }
`;
const GST = styled.div`
  h2 {
    font-size: 1.5rem;
  }
`;
export default DashBoard;
