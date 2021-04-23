import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
const DisplayReport = ({ item }) => {
  var [data, setdata] = useState([]);
  const [dataset, setdataset] = useState([]);
  const [label, setlabel] = useState("");
  const [labels, setlabels] = useState([]);
  const [backgroundColor, setbackgroundColor] = useState([]);
  const numbers = item.item;
  const listItems =
    numbers !== undefined &&
    numbers.map((numbers) => <option>{numbers.name}</option>);
  useEffect(() => {
    setdata(["617594", "181045", "153060", "106519", "105162", " 95072"]);
    setlabel("Population");
    setlabels([
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
    ]);
    setbackgroundColor([
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(75, 192, 192, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 159, 64, 0.6)",
      "rgba(255, 99, 132, 0.6)",
    ]);
    setdataset([label, data, labels, backgroundColor]);
  }, []);
  const InputHanndler = () => {
    /*  data = data.map((n) => n * 2);
    console.log(data); */
  };

  return (
    <div>
      <div className="chart">
        <h1>Welcome</h1>
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: label,
                data: data,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <button onClick={InputHanndler}>Make Lowell Zero</button>
      <select>{listItems}</select>,
    </div>
  );
};
export default DisplayReport;
