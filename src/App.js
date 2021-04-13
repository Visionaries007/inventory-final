import React from "react";
import "./styles/app.scss";
import CombStatCards from "./components/CombStatCards";
import Items from "./pages/items";
import Invoice from "./pages/invoice";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import styled from "styled-components";
function App() {
  return (
    <Apple>
      <div className="naving">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact>
          <CombStatCards />
        </Route>
        <Route path="/items">
          <Items />
        </Route>
        <Route path="/invoice">
          <Invoice />
        </Route>
      </Switch>
    </Apple>
  );
}
const Apple = styled.div`
  .naving {
    border: 1px solid #b0efff;
    background: #b0efff;
    width: 100%;
  }
`;
export default App;
