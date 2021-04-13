import React from "react";
import styled from "styled-components";
import add from "../img/plus-circle.svg";
import history from "../img/history-solid.svg";
import search from "../img/search-solid.svg";
import arrow from "../img/caret-down-solid.svg";
import friends from "../img/refer-earn.svg";
import bell from "../img/bell-regular.svg";
import settings from "../img/settings.svg";
import question from "../img/question-circle-regular.svg";
import me from "../img/me.svg";

const NavBar = () => {
  return (
    <StyledNav>
      <MainHead1>
        <h1>Inventory</h1>
      </MainHead1>
      <Row11>
        <Row12345>
          <div>
            <img src={add} alt="" />
          </div>
          <div>
            <img src={history} alt="" />
          </div>
        </Row12345>
        <Searched>
          <span>
            <img src={search} alt="" />
            <img src={arrow} alt="" />
          </span>
          <div>
            <input type="text" placeholder="Search In Customers" />
          </div>
        </Searched>
      </Row11>
      <Clo11>
        <Coling112>
          <div>
            <label>Upgrade</label>
          </div>
          <div>
            <label>Vision</label>
          </div>
          <div>
            <img src={friends} alt="" />
          </div>
        </Coling112>
        <Coling12>
          <div>
            <img src={bell} alt="" />
          </div>
          <div>
            <img src={settings} alt="" />
          </div>
          <div>
            <img src={question} alt="" />
          </div>
        </Coling12>
        <Roling12>
          <img src={me} alt="" />
        </Roling12>
      </Clo11>
    </StyledNav>
  );
};
const MainHead1 = styled.div``;
const StyledNav = styled.nav`
  background: red;
`;
const Row12345 = styled.div``;

const Row11 = styled.div``;

const Searched = styled.div``;

const Roling12 = styled.div``;
const Clo11 = styled.div``;
const Coling112 = styled.div``;
const Coling12 = styled.div``;
export default NavBar;
