import React, { useState, useEffect } from "react";
import close from "../img/close.svg";
import styled from "styled-components";
import CustomerAddress from "../customerCollection/customeraddress";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
const CustomerUpdate = ({
  n,
  customer,
  setcustomer,
  country,
  pathId,
  setupdate,
}) => {
  const history = useHistory();
  const [type, settype] = useState(n.n.type === null ? "" : n.n.type);
  const [salu, setsalu] = useState(n.n.salu === null ? "" : n.n.salu);
  const [firstname, setfirstname] = useState(
    n.n.firstname === null ? "" : n.n.firstname
  );
  const [lastname, setlastname] = useState(
    n.n.lastname === null ? "" : n.n.lastname
  );
  const [companyname, setcompanyname] = useState(
    n.n.companyname === null ? "" : n.n.companyname
  );
  const [customerdisplayname, setcustomerdisplayname] = useState(
    n.n.customerdisplayname === null ? "" : n.n.customerdisplayname
  );
  const [customeremail, setcustomeremail] = useState(
    n.n.customeremail === null ? "" : n.n.customeremail
  );
  const [cusworkphone, setcusworkphone] = useState(
    n.n.cusworkphone === null ? "" : n.n.cusworkphone
  );
  const [cusmobilephone, setcusmobilephone] = useState(
    n.n.cusmobilephone === null ? "" : n.n.cusmobilephone
  );
  const [website, setwebsite] = useState(
    n.n.website === null ? "" : n.n.website
  );
  const [biladdattension, setbiladdattension] = useState(
    n.n.biladdattension === null ? "" : n.n.biladdattension
  );
  const [bilcountry, setbilcountry] = useState(
    n.n.bilcountry === null ? "" : n.n.bilcountry
  );
  const [biladdrestreet1, setbiladdrestreet1] = useState(
    n.n.biladdrestreet1 === null ? "" : n.n.biladdrestreet1
  );
  const [biladdrestreet2, setbiladdrestreet2] = useState(
    n.n.biladdrestreet2 === null ? "" : n.n.biladdrestreet2
  );
  const [biladcity, setbiladcity] = useState(
    n.n.biladcity === null ? "" : n.n.biladcity
  );
  const [bilstate, setbilstate] = useState(
    n.n.bilstate === null ? "" : n.n.bilstate
  );
  const [bilzipcode, setbilzipcode] = useState(
    n.n.bilzipcode === null ? "" : n.n.bilzipcode
  );
  const [bilphone, setbilphone] = useState(
    n.n.bilphone === null ? "" : n.n.bilphone
  );
  const [bilfax, setbilfax] = useState(n.n.bilfax === null ? "" : n.n.bilfax);
  const [shipaddattension, setshipaddattension] = useState(
    n.n.shipaddattension === null ? "" : n.n.shipaddattension
  );
  const [shipcountry, setshipcountry] = useState(
    n.n.shipcountry === null ? "" : n.n.shipcountry
  );
  const [shipaddrestreet1, setshipaddrestreet1] = useState(
    n.n.shipaddrestreet1 === null ? "" : n.n.shipaddrestreet1
  );
  const [shipaddrestreet2, setshipaddrestreet2] = useState(
    n.n.shipaddrestreet2 === null ? "" : n.n.shipaddrestreet2
  );
  const [shipadcity, setshipadcity] = useState(
    n.n.shipadcity === null ? "" : n.n.shipadcity
  );
  const [shipstate, setshipstate] = useState(
    n.n.shipstate === null ? "" : n.n.shipstate
  );
  const [shipzipcode, setshipzipcode] = useState(
    n.n.shipzipcode === null ? "" : n.n.shipzipcode
  );
  const [shipphone, setshipphone] = useState(
    n.n.shipphone === null ? "" : n.n.shipphone
  );
  const [shipfax, setshipfax] = useState(
    n.n.shipfax === null ? "" : n.n.shipfax
  );
  const [reciveable, setreciveable] = useState(
    n.n.reciveable === null ? "" : n.n.reciveable
  );
  const [unusedcredit, setunusedcredit] = useState(
    n.n.unusedcredit === null ? "" : n.n.unusedcredit
  );
  const salutation = ["Mr.", "Mrs.", "Ms.", "Miss.", "Dr."];

  const sal = salutation.map((n) => <option key={n}>{n}</option>);

  let radio1 = document.querySelector(".radio1");
  let radio2 = document.querySelector(".radio2");
  const typeHandler = () => {
    if (radio1 !== null && radio1.checked) {
      settype("Business");
    } else if (radio2 !== null) {
      settype("Individual");
    }
  };
  useEffect(() => {
    if (n.n.type === "Business")
      document.querySelector(".radio1").checked = true;
    else if (n.n.type === "Individual")
      document.querySelector(".radio2").checked = true;
  }, []);
  const salutationHandler = (e) => {
    setsalu(e.target.value);
  };
  const nameHandler = (e) => {
    setfirstname(e.target.value);
  };
  const lastnameHandler = (e) => {
    setlastname(e.target.value);
  };
  const companyHandler = (e) => {
    setcompanyname(e.target.value);
  };
  const customerdisplaynameHandler = (e) => {
    setcustomerdisplayname(e.target.value);
  };
  const customeremailHandler = (e) => {
    setcustomeremail(e.target.value);
  };
  const cusworkphoneHandler = (e) => {
    setcusworkphone(e.target.value);
  };
  const cusmobilephoneHandler = (e) => {
    setcusmobilephone(e.target.value);
  };
  const websitehandler = (e) => {
    setwebsite(e.target.value);
  };

  const inputhandler = (e) => {
    e.preventDefault();
    const custostruct = {
      type,
      salu,
      firstname,
      lastname,
      companyname,
      customerdisplayname,
      customeremail,
      cusworkphone,
      cusmobilephone,
      website,
      biladdattension,
      bilcountry,
      biladdrestreet1,
      biladdrestreet2,
      biladcity,
      bilstate,
      bilzipcode,
      bilphone,
      bilfax,
      shipaddattension,
      shipcountry,
      shipaddrestreet1,
      shipaddrestreet2,
      shipadcity,
      shipstate,
      shipzipcode,
      shipphone,
      shipfax,
      reciveable,
      unusedcredit,
    };
    axios
      .patch(
        `https://inventory-management-vision.herokuapp.com/customers/${pathId}`,
        custostruct
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });

    settype("");
    setsalu("");
    setfirstname("");
    setlastname("");
    setcompanyname("");
    setcustomerdisplayname("");
    setcustomeremail("");
    setcusworkphone("");
    setcusmobilephone("");
    setbiladdattension("");
    setbilcountry("");
    setwebsite("");
    setbiladdrestreet1("");
    setbiladdrestreet2("");
    setbiladcity("");
    setbilstate("");
    setbilzipcode("");
    setbilphone("");
    setbilfax("");
    setshipaddattension("");
    setshipcountry("");
    setshipaddrestreet1("");
    setshipaddrestreet2("");
    setshipadcity("");
    setshipstate("");
    setshipzipcode("");
    setshipphone("");
    setshipfax("");
    history.push("/displaycustomer");
    window.location.reload(false);
  };
  const CancelHandler = () => {
    setupdate(false);
  };
  return (
    <ItemMaking1>
      <Heading12>
        <h3>Update Customer</h3>
        <span onClick={CancelHandler}>
          <img src={close} alt="" />
        </span>
      </Heading12>
      <div>
        <form onSubmit={inputhandler}>
          <Top>
            <Grider>
              <div className="d1">
                <label htmlFor="type">Customer Type</label>
              </div>
              <div className="d2">
                <div className="dim2">
                  <input
                    className="radio1"
                    onChange={typeHandler}
                    type="radio"
                    name="item"
                    id="type1"
                  ></input>
                  <label htmlFor="Business">Business</label>
                </div>
                <div className="dim3">
                  <input
                    className="radio2"
                    onChange={typeHandler}
                    type="radio"
                    name="item"
                    id="type2"
                  ></input>
                  <label htmlFor="Individual">Individual</label>
                </div>
              </div>
              <div className="d3">
                <label htmlFor="name">Primary Contact</label>
              </div>
              <div className="d4">
                <div>
                  <select
                    className="salu"
                    id="namesalu"
                    placeholder="Salutation"
                    onChange={salutationHandler}
                    value={salu}
                  >
                    <option key={1} value="1" disabled>
                      Select
                    </option>
                    {sal}
                  </select>
                </div>
                <div>
                  <input
                    className="first"
                    onChange={nameHandler}
                    id="name1"
                    value={firstname}
                    type="text"
                    placeholder="First Name"
                  ></input>
                </div>
                <div>
                  <input
                    className="Last"
                    onChange={lastnameHandler}
                    id="name2"
                    value={lastname}
                    type="text"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>

              <div className="d7">
                <label htmlFor="companyname">Company Name </label>
              </div>
              <div className="d8">
                <input
                  onChange={companyHandler}
                  id="companyname"
                  value={companyname}
                  type="text"
                ></input>
              </div>
              <div className="d9">
                <label htmlFor="customerdisplayname">
                  Customer Display Name*
                </label>
              </div>
              <div className="d10">
                <input
                  id="customerdisplayname"
                  onChange={customerdisplaynameHandler}
                  value={customerdisplayname}
                ></input>
              </div>
              <div className="d11">
                <label htmlFor="customeremail">Customer Email </label>
              </div>
              <div className="d12">
                <input
                  onChange={customeremailHandler}
                  id="customeremail"
                  value={customeremail}
                  type="text"
                ></input>
              </div>
              <div className="d13">
                <label htmlFor="customerphone">Customer Phone </label>
              </div>
              <div className="d14">
                <div>
                  <input
                    className="phone"
                    onChange={cusworkphoneHandler}
                    id="customerphone"
                    value={cusworkphone}
                    type="text"
                    placeholder="Work Phone"
                  ></input>
                </div>
                <div>
                  <input
                    className="mobile"
                    onChange={cusmobilephoneHandler}
                    id="customermobile"
                    value={cusmobilephone}
                    type="text"
                    placeholder="Mobile"
                  ></input>
                </div>
              </div>
              <div className="d16">
                <label htmlFor="website">Website</label>
              </div>
              <div className="d17">
                <input
                  onChange={websitehandler}
                  id="website"
                  value={website}
                  type="text"
                ></input>
              </div>
            </Grider>
            <div>
              <CustomerAddress
                country={country}
                biladdattension={biladdattension}
                bilcountry={bilcountry}
                biladdrestreet1={biladdrestreet1}
                biladdrestreet2={biladdrestreet2}
                biladcity={biladcity}
                bilstate={bilstate}
                bilzipcode={bilzipcode}
                bilphone={bilphone}
                bilfax={bilfax}
                shipaddattension={shipaddattension}
                shipcountry={shipcountry}
                shipaddrestreet1={shipaddrestreet1}
                shipaddrestreet2={shipaddrestreet2}
                shipadcity={shipadcity}
                shipstate={shipstate}
                shipzipcode={shipzipcode}
                shipphone={shipphone}
                shipfax={shipfax}
                setbiladdattension={setbiladdattension}
                setbilcountry={setbilcountry}
                setbiladdrestreet1={setbiladdrestreet1}
                setbiladdrestreet2={setbiladdrestreet2}
                setbiladcity={setbiladcity}
                setbilstate={setbilstate}
                setbilzipcode={setbilzipcode}
                setbilphone={setbilphone}
                setbilfax={setbilfax}
                setshipaddattension={setshipaddattension}
                setshipcountry={setshipcountry}
                setshipaddrestreet1={setshipaddrestreet1}
                setshipaddrestreet2={setshipaddrestreet2}
                setshipadcity={setshipadcity}
                setshipstate={setshipstate}
                setshipzipcode={setshipzipcode}
                setshipphone={setshipphone}
                setshipfax={setshipfax}
              />
            </div>
          </Top>
          <Down>
            <div className="both">
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="btn1"
                  onClick={inputhandler}
                >
                  Update
                </motion.button>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn2"
                onClick={CancelHandler}
              >
                Cancel
              </motion.button>
            </div>
          </Down>
        </form>
      </div>
    </ItemMaking1>
  );
};
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Heading12 = styled.div`
  position: webkit-sticky;
  position: sticky;
  top: 0;
  background: white;
  border: none;
  box-shadow: 1px 1px #888888;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  h3 {
    margin: 20px 0px 10px;
  }
  span {
    margin: 15px 0px 0px;
    padding: 8px 0px 0px;
  }
  font-size: 13px;
`;
const ItemMaking1 = styled.div`
  label {
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: white;
`;
const Grider = styled.div`
  display: grid !important;
  grid-gap: 2rem;
  .d1 {
    grid-area: d1;
    label {
      border-bottom: 1px dashed green;
    }
  }
  .d2 {
    grid-area: d2;
    display: flex;
    flex-direction: row;

    .dim2 {
      input {
        margin: 0px 4.0625px 0px 0px;
      }
      margin: 0px 9.75px 0px 0px;
    }
    .dim3 {
      input {
        margin: 0px 4.0625px 0px 0px;
      }
      margin: 0px 9.75px 0px 0px;
    }
  }
  .d3 {
    grid-area: d3;
    label {
      border-bottom: 1px dashed green;
    }
  }
  .d4 {
    grid-area: d4;
    display: flex;
    flex-direction: row;
    gap: 2rem !important ;
    .salu {
      padding: 5px 30px 5px 8px;
    }
    .first {
      padding: 5px 8px;
    }
    .Last {
      padding: 5px 8px;
    }
  }

  .d7 {
    grid-area: d7;
  }
  .d8 {
    grid-area: d8;
    input {
      padding: 5px 8px;
    }
  }
  .d9 {
    grid-area: d9;
    color: #e54643;
  }
  .d10 {
    grid-area: d10;
    input {
      padding: 5px 8px;
    }
  }
  .d11 {
    grid-area: d11;
  }
  .d12 {
    grid-area: d12;
    input {
      padding: 5px 8px;
    }
  }
  .d13 {
    grid-area: d13;
  }
  .d14 {
    grid-area: d14;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    .phone {
      padding: 5px 8px;
    }
    .mobile {
      padding: 5px 8px;
    }
  }

  .d16 {
    grid-area: d16;
  }
  .d17 {
    grid-area: d17;
    input {
      padding: 5px 8px;
    }
  }
  grid-template-areas:
    ".  d3   d4    .  .  . . . . "
    ".  d7   d8    .  .  . . . . "
    ".  d9  d10    .  .  . . . . "
    ". d11  d12    .  .  . . . . "
    ". d13  d14    .  .  . . . . "
    ". d16  d17    .  .  . . . . "
    ".  d1   d2    .  .  . . . . ";
`;
const Down = styled.div`
  position: webkit-sticky;
  position: sticky;
  bottom: 0;
  margin-top: 6.5rem;
  background: white;
  border: none;
  box-shadow: 0px -5px 20px 1px #adadad;
  .both {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;
    padding: 0.5rem;
    button {
      padding: 1rem;
      border: none;
      cursor: pointer;
      border-radius: 1rem;
    }
  }

  .btn1 {
    background: #2fa3e6;
    color: #ffffff;
  }
  .btn2 {
    background: #2fa3e6;
    color: #ffffff;
  }
`;
export default CustomerUpdate;
