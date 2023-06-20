import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";


const MyBarChart = (props) => {

  const handleYear = e => {
    if (e.key === "Enter") {
      props.onYearFilter(props.chartName, e.target.value);
      console.log(e.target.value);
    }
  };

  let co2 = props.Co2Emission;
  if (co2 === undefined) return <p>There is no data.</p>;

  //object array eller Arrays of object
  const dataBarChart = [
    { name: "Cem", CO2: co2["Cement"] }
    
    
    
  ];

  console.log(co2);

  return (
    <div style={{ width: "350px", height: "400px", float: "left" }}>
      <input
        type="text"
        placeholder="Year..."
        onKeyDown={e => handleYear(e)}
      />

      <BarChart
        width={350}
        height={450}
        data={dataBarChart}
        margin={{
          top: 170,
          right: 30,
          left: 20,
          bottom: 7
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Bar dataKey="CO2" fill="green">
         
        </Bar>
      </BarChart>
    </div>
  );
}


export default MyBarChart

