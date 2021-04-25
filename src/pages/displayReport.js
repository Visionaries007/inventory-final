import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import styled from "styled-components";
const DisplayReport = ({ item }) => {
  const [itemdata, setitemdata] = useState(
    item.item !== undefined && item.item.map((n) => n.quantity)
  );
  const [itemlabels, setitemlabels] = useState(
    item.item !== undefined && item.item.map((n) => n.name)
  );
  const [backgroundColor, setbackgroundColor] = useState([]);
  useEffect(() => {
    /* setdata(["617594", "181045", "153060", "106519", "105162", " 95072"]);

    setlabels([
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
    ]); */
    setbackgroundColor([
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(75, 192, 192, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 159, 64, 0.6)",
      "rgba(255, 99, 132, 0.6)",
    ]);
  }, []);
  /*  useEffect(() => {
    for (let i = 0; item.item !== undefined && i < item.item.length; i++) {
      setnames([...names, item.item[i].name]);
    }
    console.log(names);
  }, []); */

  return (
    <Charts>
      <div className="piechart">
        <h2>Items and Thier Quantity</h2>
        <Pie
          data={{
            labels: itemlabels,
            datasets: [
              {
                label: "Items",
                data: itemdata,
                backgroundColor: backgroundColor,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  /* ticks: {
                    beginAtZero: true,
                  }, */
                },
              ],
            },
          }}
        />
      </div>
      <div className="barchart">
        <h2>Invoice and amount sold</h2>
        <Bar
          data={{
            labels: itemlabels,
            datasets: [
              {
                label: "Invoice",
                data: itemdata,
                backgroundColor: backgroundColor,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  /* ticks: {
                    beginAtZero: true,
                  }, */
                },
              ],
            },
          }}
        />
      </div>
    </Charts>
  );
};
const Charts = styled.div`
  display: flex;
  flex-direction: column;
  .piechart {
    padding: 3rem 0rem 0rem 3rem;
    width: 45%;
  }
  .barchart {
    width: 70%;
    padding: 10rem 0rem 0rem 3rem;
  }
`;
export default DisplayReport;
