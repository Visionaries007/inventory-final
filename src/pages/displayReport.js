import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
const DisplayReport = () => {
  const [data, setdata] = useState([]);
  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};
export default DisplayReport;
