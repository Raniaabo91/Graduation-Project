import React,  { useEffect, useState } from "react";
import MyBarChart from "./MyBarChart1";
import { getCO2Emissionsdata } from "./CO2Emission";


const FetchData1 = () => {
  const [Co2Emission, setCo2Emission] = useState([]);
  const [indexYear1, setIndexYear1] = useState(0);
  const [indexYear2, setIndexYear2] = useState(0);

  useEffect(() => {

    setCo2Emission(getCO2Emissionsdata());


  }, []);
  const handleYearFilter = (chartName, Year) => {

    let index = Co2Emission.findIndex(
      co2 => co2.Year === parseInt(Year),
    );
    if (index !== -1) {
      switch (chartName) {
        case "Pie1":
          setIndexYear1(index);
          break;
          case "Pie2":
            setIndexYear2(index);
            break;
      }
    } else {
      alert("Year could not be found.");
    }
  };

  return (
    <div className="App">
      <MyBarChart
        chartName="Pie1"
        Co2Emission={Co2Emission[indexYear1]}
        onYearFilter={handleYearFilter}
      />
      <MyBarChart
        chartName="Pie2"
        Co2Emission={Co2Emission[indexYear2]}
        onYearFilter={handleYearFilter}
      />
    </div>
  );

}


export default FetchData1;
