import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import image from "../img/girl.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import InvoiceDetailTable from "../Cards/invoicedetailtable";
import InvoiceUpdate from "../Update/InvoiceUpdate";
const InvoiceDetail = ({
  pathId,
  invoice,
  setinvoice,
  setupdate,
  update,
  customer,
  item,
}) => {
  const history = useHistory();
  console.log(typeof pathId);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setupdate(false);
      history.push("/displayinvoice");
    }
  };

  const deleteItemHandler = () => {
    axios
      .delete(`http://localhost:5000/invoices/${pathId}`)
      .then((response) => {
        setinvoice(invoice.filter((t) => t._id !== pathId));
      })
      .catch((error) => {
        console.log({ error });
      });

    history.push("/displayinvoice");
    window.location.reload(false);
  };
  const [n, setn] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/invoices/${pathId}`)
      .then((response) => {
        setn({ n: response.data });
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  console.log(n);
  const Updatehandler = () => {
    setupdate(!update);
  };
  if (n.n !== undefined) {
    return (
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <div className="upd">
          {update && (
            <InvoiceUpdate
              pathId={pathId}
              n={n}
              setupdate={setupdate}
              customer={customer}
              item={item}
            />
          )}
        </div>
        <Detail layoutId={pathId}>
          <Grider>
            <UpGrid>
              <div className="d5 de">
                <label>Invoice Number :</label>
              </div>
              <div className="d6 df">
                <label>{n.n.invoicenumber}</label>
              </div>
              <div className="d7 de">
                <label>Price :</label>
              </div>
              <div className="d8 df">
                <label>{n.n.price}</label>
              </div>
              <div className="d9 de">
                <label>Discount :</label>
              </div>
              <div className="d10 df">
                <label>{n.n.discount}</label>
              </div>
              <div className="d11 de">
                <label>Tax :</label>
              </div>
              <div className="d12 df">
                <label>{n.n.tax} %</label>
              </div>
              <div className="d13 de">
                <label>Subtotal :</label>
              </div>
              <div className="d14 df">
                <label>{n.n.subtotal}</label>
              </div>
              <div className="d15 de">
                <label>Total :</label>{" "}
              </div>
              <div className="d18 df">
                <label>{n.n.total}</label>
              </div>
              <div className="d19 de">
                <label>Order Number :</label>
              </div>
              <div className="d20 df">
                <label>{n.n.ordernumber}</label>
              </div>
              <div className="d21 de">
                <label>Invoice Date :</label>
              </div>
              <div className="d22 df">
                <label>{n.n.invoicedate}</label>
              </div>
              <div className="d23 de">
                <label>Terms :</label>
              </div>
              <div className="d24 df">
                <label>{n.n.terms}</label>
              </div>
              <div className="d25 de">
                <label>Due Date :</label>
              </div>
              <div className="d26 df">
                <label>{n.n.duedate}</label>
              </div>
              <div className="d27 de">
                <label>SalesPerson:</label>
              </div>
              <div className="d28 df">
                <label>{n.n.salesperson}</label>
              </div>
              <div className="d29 de">
                <label>Status :</label>
              </div>
              <div className="d30 df">
                <label>{n.n.status}</label>
              </div>
              <div className="d31 de">
                <label>Balance Due :</label>
              </div>
              <div className="d32 df">
                <label>{n.n.balancedue}</label>
              </div>
            </UpGrid>
            <DownGrid>
              <Data>
                <table>
                  <tbody>
                    <tr id="header">
                      <th>Item</th>
                      <th>Quantity #</th>
                      <th>Rate #</th>
                      <th>Price</th>
                    </tr>
                    {n.n.itemcoll !== undefined &&
                      n.n.itemcoll.map((n) => (
                        <InvoiceDetailTable n={n} key={n._id} />
                      ))}
                  </tbody>
                </table>
              </Data>
            </DownGrid>
          </Grider>
          <Image>
            <div className="d47">
              <img src={image} alt="" />
            </div>
            <div className="mainname">
              <div className="d3 de">
                <label>Customer Name: :</label>
              </div>
              <div className="d2 df">
                <label>{n.n.customername}</label>
              </div>
            </div>
            <div className="nut">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.9 }}
                className="btn1"
                onClick={Updatehandler}
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
        </Detail>
      </CardShadow>
    );
  } else return null;
};
const Image = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
const Data = styled(motion.div)`
  padding: 2rem;
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #bdc3c7;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
      -1px -1px 8px rgba(0, 0, 0, 0.2);
  }
  tr {
    transition: all 0.2s ease-in;
    cursor: pointer;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    font-size: 20px;
    border-bottom: 1px solid #ddd;
    word-wrap: break-word;
  }
  #header {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      45deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 255, 252, 1) 0%,
      rgba(0, 155, 255, 1) 100%
    );
    color: #fff;
  }
  tr:hover {
    background-color: #f5f5f5;
    transform: scale(1.02);
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2),
      -1px -1px 8px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 768px) {
    table {
      width: 90%;
    }
  }
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
const Grider = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const UpGrid = styled(motion.div)`
  padding: 2rem;
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
  .d6 {
    grid-area: d6;
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
  }
  .d15 {
    grid-area: d15;
  }

  .d16 {
    grid-area: d16;
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
  .d45 {
    grid-area: d45;
  }
  .d46 {
    grid-area: d46;
  }
  .d47 {
    grid-area: d47;
  }
  grid-gap: 2rem;
  grid-template-areas:
    " d5  d6   .   ."
    " d7  d8   .   ."
    " d9  d10  .   ."
    " d11 d12  .   ."
    " d13 d14  .   ."
    " d15 d18  .   ."
    " d19 d20  .   ."
    " d21 d22  .   ."
    " d23 d24  .   ."
    " d25 d26  .   ."
    " d27 d28  .   ."
    " d29 d30  .   ."
    " d31 d32  .   .";
`;
const DownGrid = styled.div``;
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

export default InvoiceDetail;
