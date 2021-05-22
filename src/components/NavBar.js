import React from "react";
import styled from "styled-components";
import add from "../img/add_circle.svg";
import history from "../img/history-solid.svg";
import search from "../img/search-solid.svg";
import arrow from "../img/caret-down-solid.svg";
import bell from "../img/bell-regular.svg";
import settings from "../img/settings.svg";
import question from "../img/question-circle-regular.svg";
import me from "../img/me.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNav>
      <div className="box1">
        <Link to="/">
          {" "}
          <h1>Inventory</h1>{" "}
        </Link>
      </div>
      <div className="searchplusadd">
        <Image>
          <img src={add} alt="" />
        </Image>
        <Image>
          <img src={history} alt="" />
        </Image>
        <div className="search">
          <div className="arrow">
            <img src={search} alt="" />
            <img src={arrow} alt="" />
          </div>
          <div className="input12">
            <input type="text" placeholder="Search In Customers" />
          </div>
        </div>
      </div>
      <div className="threemain">
        <Image>
          <img src={bell} alt="" />
        </Image>
        <Image>
          <img src={settings} alt="" />
        </Image>
        <Image>
          <img src={question} alt="" />
        </Image>
      </div>
      <div className="userimage">
        <img src={me} alt="" />
      </div>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  display: grid;
  .search {
    border-radius: 20px;
    padding: 0px 20px 0px 20px;
    border: 2px solid black;
    background: white;
    display: flex;
    input {
      padding: 0px 2px;
      height: 33px;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
  .arrow {
    display: flex;
  }
  .box1 {
    grid-area: b1;
    padding: 0.5rem 0rem 0rem 1.5rem;
    h1 {
      font-size: 2rem;
      color: black;
    }
    a {
      color: black;
      &:focus {
        color: black;
      }
    }
  }
  .searchplusadd {
    display: flex;
    justify-content: space-between;
    grid-area: b2;
  }
  .threemain {
    display: flex;
    justify-content: space-between;
    grid-area: b3;
  }
  .userimage {
    cursor: pointer;
    grid-area: b4;
    padding-top: 0.2rem;
  }
  grid-template-areas: "b1 . . b2 . . . . . . . . . .  b3 .  b4";
`;
const Image = styled.div`
  img {
    padding-top: 0.5rem;
  }
  cursor: pointer;
`;
export default NavBar;
