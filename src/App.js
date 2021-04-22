import React, { useState, useEffect } from "react";

import axios from "axios";
import "./styles/app.scss";
import CombStatCards from "./components/CombStatCards";
import AddItems from "./pages/additems";
import DisplayItems from "./pages/displayitem";
import AddCustomer from "./pages/addCustomer";
import DisplayCustomer from "./pages/displayCustomer";
import AddSalesOrder from "./pages/addSalesorder";
import DisplaySalesOrder from "./pages/displaySalesorder";
import AddPackages from "./pages/addPackages";
import DisplayPackages from "./pages/displayPackages";
import AddDeliveryChallans from "./pages/addDelivery";
import DisplayDeliveryChallans from "./pages/displayDelivery";
import AddInvoice from "./pages/addInvoice";
import DisplayInvoice from "./pages/displayInvoice";
import AddPaymentRecieved from "./pages/addPayRec";
import DisplayPaymentRecieved from "./pages/displayPayRec";
import AddPurchaseOrder from "./pages/addPurchaseorder";
import DisplayPurchaseOrder from "./pages/displayPurchaseOrder";
import AddPaymentMade from "./pages/addPayMade";
import DisplayPaymentMade from "./pages/displayPaymentMade";
import DisplayReport from "./pages/displayReport";
import AddDocuments from "./pages/addDocuments";
import DisplayDocuments from "./pages/displayDocuments";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import styled from "styled-components";
import Options from "./components/Options";
function App() {
  //Collection of All the states
  const [item, setitem] = useState([]);
  const [customer, setcustomer] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/items/")
      .then((response) => {
        setitem({ item: response.data });
      })
      .catch((error) => {
        console.log({ error });
      });

    axios
      .get("http://localhost:5000/customers/")
      .then((response) => {
        setcustomer({ customer: response.data });
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  useEffect(() => {
    console.log(customer.customer);
  });

  return (
    <Apple>
      <div className="naving">
        <Navbar />
      </div>
      <BottomPage>
        <Dashy>
          <Options />
        </Dashy>
        <Hashy>
          <Switch>
            <Route path="/" exact>
              <CombStatCards />
            </Route>
            <Route path="/additems">
              <AddItems item={item} setitem={setitem} />
            </Route>
            <Route path="/displayItems">
              <DisplayItems item={item} setitem={setitem} />
            </Route>
            <Route path="/addcustomer">
              <AddCustomer
                item={item}
                customer={customer}
                setcustomer={setcustomer}
              />
            </Route>
            <Route path="/displaycustomer">
              <DisplayCustomer customer={customer} setcustomer={setcustomer} />
            </Route>
            <Route path="/addsalesorder">
              <AddSalesOrder />
            </Route>
            <Route path="/displaysalesorder">
              <DisplaySalesOrder />
            </Route>
            <Route path="/addpackages">
              <AddPackages />
            </Route>
            <Route path="/displaypackages">
              <DisplayPackages />
            </Route>
            <Route path="/addDeliverychallans">
              <AddDeliveryChallans />
            </Route>
            <Route path="/displayDeliverychallans">
              <DisplayDeliveryChallans />
            </Route>
            <Route path="/addinvoice">
              <AddInvoice />
            </Route>
            <Route path="/displayinvoice">
              <DisplayInvoice />
            </Route>
            <Route path="/addpaymentrecieved">
              <AddPaymentRecieved />
            </Route>
            <Route path="/displaypaymentrecieved">
              <DisplayPaymentRecieved />
            </Route>
            <Route path="/addpurchaseorder">
              <AddPurchaseOrder />
            </Route>
            <Route path="/displaypurchaseorder">
              <DisplayPurchaseOrder />
            </Route>
            <Route path="/addpaymentmade">
              <AddPaymentMade />
            </Route>
            <Route path="/displaypaymentmade">
              <DisplayPaymentMade />
            </Route>
            <Route path="/displayreport">
              <DisplayReport />
            </Route>
            <Route path="/adddocuments">
              <AddDocuments />
            </Route>
            <Route path="/displaydocuments">
              <DisplayDocuments />
            </Route>
          </Switch>
        </Hashy>
      </BottomPage>
    </Apple>
  );
}
const Apple = styled.div`
  .naving {
    border: 1px solid #b0efff;
    width: 100%;
    padding: 0.5rem 0rem;
    background: linear-gradient(
      45deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 255, 252, 1) 0%,
      rgba(0, 155, 255, 1) 100%
    );
  }
`;
const BottomPage = styled.div`
  display: flex;
  flex-direction: row;
`;
const Dashy = styled.div`
  min-height: 120vh;
`;
const Hashy = styled.div`
  width: 100%;
`;
export default App;
