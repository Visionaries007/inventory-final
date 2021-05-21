import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image from "../img/girl.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import CustomerUpdate from "../Update/CustomerUpdate";
const CustomerDetail = ({
  pathId,
  customer,
  setcustomer,
  setupdate,
  update,
}) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/displaycustomer");
    }
  };

  const deleteItemHandler = () => {
    axios
      .delete(`http://localhost:5000/customers/${pathId}`)
      .then((response) => {
        setcustomer(customer.filter((t) => t._id !== pathId));
      })
      .catch((error) => {
        console.log({ error });
      });

    history.push("/displaycustomer");
    window.location.reload(false);
  };
  const [n, setn] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/customers/${pathId}`)
      .then((response) => {
        setn({ n: response.data });
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  const Updatehandler = () => {
    setupdate(!update);
  };
  if (n.n !== undefined) {
    return (
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <div className="upd">
          {update && (
            <CustomerUpdate pathId={pathId} n={n} setupdate={setupdate} />
          )}
        </div>
        <Detail layoutId={pathId}>
          <Grider>
            <Comb>
              <UpGrider>
                <div className="d1  de">
                  <label>Type :</label>{" "}
                </div>
                <div className="d2 df">
                  <label>{n.n.type}</label>{" "}
                </div>

                <div className="d11 de">
                  <label>Company Name :</label>{" "}
                </div>
                <div className="d12 df">
                  <label>{n.n.companyname}</label>{" "}
                </div>
                <div className="d13 de">
                  <label>Customer Display Name :</label>{" "}
                </div>
                <div className="d14 df">
                  <label>{n.n.customerdisplayname}</label>
                </div>
                <div className="d16 de">
                  <label>Customer Email :</label>
                </div>
                <div className="d18 df">
                  <label>{n.n.customeremail}</label>{" "}
                </div>
                <div className="d19 de">
                  <label>Customer Work Phone :</label>{" "}
                </div>
                <div className="d20 df">
                  <label>{n.n.cusworkphone}</label>{" "}
                </div>
                <div className="d21 de">
                  <label>Customer Mobile Phone :</label>{" "}
                </div>
                <div className="d22 df">
                  <label>{n.n.cusmobilephone}</label>{" "}
                </div>
                <div className="d23 de">
                  <label>Website :</label>{" "}
                </div>
                <div className="d24 df">
                  <label>{n.n.website}</label>{" "}
                </div>
                <div className="d63 de">
                  <label>Reciveable :</label>{" "}
                </div>
                <div className="d64 df">
                  <label>{n.n.reciveable}</label>{" "}
                </div>
                <div className="d65 de">
                  <label>Unusedcredit :</label>{" "}
                </div>
                <div className="d66 df">
                  <label>{n.n.unusedcredit}</label>{" "}
                </div>
              </UpGrider>
              <Image>
                <div className="d47">
                  <img src={image} alt="" />
                </div>
                <div className="mainname">
                  <div className="d3 de">
                    <label>Name :</label>{" "}
                  </div>
                  <div className="d6 df">
                    <div className="d67 df">
                      <label>{n.n.salu}</label>{" "}
                    </div>
                    <div className="d68 df">
                      <label>{n.n.firstname}</label>{" "}
                    </div>
                    <div className="d69 df">
                      <label>{n.n.lastname}</label>{" "}
                    </div>
                  </div>
                </div>
                <div className="nut">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={Updatehandler}
                    className="btn1"
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={deleteItemHandler}
                    className="btn2"
                  >
                    Delete
                  </motion.button>
                </div>
              </Image>
            </Comb>
            <DownGrider>
              <Bil>
                <div className="d27 df">
                  <label>Billing Address</label>
                </div>
                <div className="d28 de">
                  <label>Attention :</label>
                </div>
                <div className="d29 df">
                  <label>{n.n.biladdattension}</label>
                </div>
                <div className="d30 de">
                  <label>Country :</label>
                </div>
                <div className="d31 df">
                  <label>{n.n.bilcountry}</label>
                </div>
                <div className="d32 de">
                  <label>Address :</label>
                </div>
                <div className="d33 df">
                  <label>{n.n.biladdrestreet1}</label>
                </div>
                <div className="d34 df">
                  <label>{n.n.biladdrestreet2}</label>
                </div>
                <div className="d35 de">
                  <label>City :</label>
                </div>
                <div className="d36 df">
                  <label>{n.n.biladcity}</label>
                </div>
                <div className="d37 de">
                  <label>State :</label>
                </div>
                <div className="d38 df">
                  <label>{n.n.bilstate}</label>
                </div>
                <div className="d39 de">
                  <label>Zip Code :</label>
                </div>
                <div className="d40 df">
                  <label>{n.n.bilzipcode}</label>
                </div>
                <div className="d41 de">
                  <label>Phone :</label>
                </div>
                <div className="d42 df">
                  <label>{n.n.bilphone}</label>
                </div>
                <div className="d43 de">
                  <label>Fax :</label>
                </div>
                <div className="d44 df">
                  <label>{n.n.bilfax}</label>
                </div>
              </Bil>
              <Ship>
                <div className="d45 df">
                  <label>Shipping Address</label>
                </div>
                <div className="d46 de">
                  <label>Attension :</label>
                </div>
                <div className="d47 df">
                  <label>{n.n.shipaddattension}</label>
                </div>
                <div className="d48 de">
                  <label>Country :</label>
                </div>
                <div className="d49 df">
                  <label>{n.n.shipcountry}</label>
                </div>
                <div className="d50 de">
                  <label>Address :</label>
                </div>
                <div className="d51 df">
                  <label>{n.n.shipaddrestreet1}</label>
                </div>
                <div className="d52 df">
                  <label>{n.n.shipaddrestreet2}</label>
                </div>
                <div className="d53 de">
                  <label>City :</label>
                </div>
                <div className="d54 df">
                  <label>{n.n.shipadcity}</label>
                </div>
                <div className="d55 de">
                  <label>State :</label>
                </div>
                <div className="d56 df">
                  <label>{n.n.shipstate}</label>
                </div>
                <div className="d57 de">
                  <label>Zip Code :</label>
                </div>
                <div className="d58 df">
                  <label>{n.n.shipzipcode}</label>
                </div>
                <div className="d59 de">
                  <label>Phone :</label>
                </div>
                <div className="d60 df">
                  <label>{n.n.shipphone}</label>
                </div>
                <div className="d61 de">
                  <label>Fax :</label>
                </div>
                <div className="d62 df">
                  <label>{n.n.shipfax}</label>
                </div>
              </Ship>
            </DownGrider>
          </Grider>
        </Detail>
      </CardShadow>
    );
  } else return null;
};
const Grider = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  .de {
    color: grey !important;
    max-width: 25rem;
    word-wrap: break-word;
  }
  .df {
    color: black;
    max-width: 25rem;
    word-wrap: break-word;
  }
`;
const Image = styled(motion.div)`
  .d6 {
    grid-area: d6;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Comb = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20rem;
`;
const CardShadow = styled(motion.div)`
  button {
    padding: 1rem 2rem;
    border: none;
    background: #2fa3e6;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }
  font-size: 2rem;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const UpGrider = styled(motion.div)`
  display: grid;
  .dffg {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    grid-area: d67;
  }
  .d1 {
    grid-area: d1;
  }
  .d2 {
    grid-area: d2;
  }

  .d5 {
    grid-area: d5;
  }

  .d7 {
    grid-area: d7;
  }
  .d8 {
    grid-area: d8;
  }
  .d9 {
    grid-area: d9;
  }
  .d10 {
    grid-area: d10;
  }
  .d11 {
    grid-area: d11;
  }
  .d12 {
    grid-area: d12;
  }
  .d13 {
    grid-area: d13;
  }
  .d14 {
    grid-area: d14;
    span {
      font-size: 2rem;
      color: grey;
    }
  }

  .d16 {
    grid-area: d16;
    span {
      font-size: 2rem;
      color: grey;
    }
  }
  .d17 {
    grid-area: d17;
  }
  .d18 {
    grid-area: d18;
  }
  .d19 {
    grid-area: d19;
  }
  .d20 {
    grid-area: d20;
  }
  .d21 {
    grid-area: d21;
  }
  .d22 {
    grid-area: d22;
  }
  .d23 {
    grid-area: d23;
  }
  .d24 {
    grid-area: d24;
  }
  .d25 {
    grid-area: d25;
  }
  .d26 {
    grid-area: d26;
  }
  .d63 {
    grid-area: d63;
  }
  .d64 {
    grid-area: d64;
  }
  .d65 {
    grid-area: d65;
  }
  .d66 {
    grid-area: d66;
  }

  grid-gap: 2rem;
  grid-template-areas:
    " d1  d2   .    .   "
    " d11 d12  .    .   "
    " d13 d14  .    .   "
    " d16 d18  .    .   "
    " d19 d20  .    .   "
    " d21 d22  .    .   "
    " d23 d24  .    .   "
    " d23 d24  .    .   "
    " d63 d64  .    .   "
    " d65 d66  .    .   ";
`;
const DownGrider = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 25rem;
`;
const Bil = styled.div`
  display: grid;
  .d27 {
    grid-area: d27;
  }
  .d28 {
    grid-area: d28;
  }
  .d29 {
    grid-area: d29;
  }
  .d30 {
    grid-area: d30;
  }
  .d31 {
    grid-area: d31;
  }
  .d32 {
    grid-area: d32;
  }
  .d33 {
    grid-area: d33;
  }
  .d34 {
    grid-area: d34;
  }
  .d35 {
    grid-area: d35;
  }
  .d36 {
    grid-area: d36;
  }
  .d37 {
    grid-area: d37;
  }
  .d38 {
    grid-area: d38;
  }
  .d39 {
    grid-area: d39;
  }
  .d40 {
    grid-area: d40;
  }
  .d41 {
    grid-area: d41;
  }
  .d42 {
    grid-area: d42;
  }
  .d43 {
    grid-area: d43;
  }
  .d44 {
    grid-area: d44;
  }
  grid-template-areas:
    " d27  .  "
    "  .  .  "
    " d28 d29 "
    " d30 d31 "
    " d32 d33 "
    " .   d34 "
    " d35 d36 "
    " d37 d38 "
    " d39 d40 "
    " d41 d42 "
    " d43 d44 ";
`;
const Ship = styled(motion.div)`
  display: grid;

  .d45 {
    grid-area: d45;
  }
  .d46 {
    grid-area: d46;
  }
  .d47 {
    grid-area: d47;
  }
  .d48 {
    grid-area: d48;
  }
  .d49 {
    grid-area: d49;
  }
  .d50 {
    grid-area: d50;
  }
  .d51 {
    grid-area: d51;
  }
  .d52 {
    grid-area: d52;
  }
  .d53 {
    grid-area: d53;
  }
  .d54 {
    grid-area: d54;
  }
  .d55 {
    grid-area: d55;
  }
  .d56 {
    grid-area: d56;
  }
  .d57 {
    grid-area: d57;
  }
  .d58 {
    grid-area: d58;
  }
  .d59 {
    grid-area: d59;
  }
  .d60 {
    grid-area: d60;
  }
  .d61 {
    grid-area: d61;
  }
  .d62 {
    grid-area: d62;
  }

  grid-gap: 2rem;
  grid-template-areas:
    "  d45  .   "
    "  .    .  "
    "  d46  d47 "
    "  d48  d49 "
    "  d50  d51 "
    "   .   d52 "
    "  d53  d54 "
    "  d55  d56 "
    "  d57  d58 "
    "  d59  d60 "
    "  d61  d62 ";
`;

const Detail = styled(motion.div)`
  border-radius: 1rem;
  padding: 4rem 5rem;
  margin-top: 3rem;
  background: white;
  position: absolute;
  left: 15%;
  color: black;
  img {
    width: 30rem;
  }

  .dd {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .de {
    color: grey;
  }
  .df {
    color: black;
  }
  display: flex;
  flex-direction: row;
  gap: 10rem;
  .d4 {
    max-width: 20rem;
    word-break: break-word;
  }
  .mainname {
    padding: 2rem 0rem 0rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    label {
      word-break: break-word;
    }
  }
  .nut {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

export default CustomerDetail;
