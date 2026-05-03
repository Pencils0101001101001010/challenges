"use client";

import { useState } from "react";
import CreateYourOwnChart from "../components/(createYourOwnChart)/CreateYourOwnChart";
import "../styles/createYourOwnChart.css";

function page() {
  //~ Array to hold all entries
  const [chartData, setChartData] = useState<
    { name: string; percentage: number }[]
  >([]);
  //~ tempory states for the inputs:
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState(0);
  //~ add items handler
  const addItem = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop page from refreshing

    //~ dont enter value if the field is empty
    if (!name) return;

    //~ update the array by spreading the existing data
    setChartData([...chartData, { name, percentage }]);

    //~ Reset entriers for next entry
    setName("");
    setPercentage(0);
  };

  return (
    <div className="mainContainer1">
      <div className="containerGrid">
        <form onSubmit={addItem}>
          <h1>Create your Chart here</h1>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Field Name..."
          />
          <br />
          <label htmlFor="value">Percentage:</label>
          <br />
          <input
            value={percentage}
            onChange={(e) => setPercentage(Number(e.target.value))}
            type="number"
          />
          <br />
          <button className="submitButton" type="submit">
            Add to chart
          </button>
        </form>

        <div className="chartContainer">
          {/*Pass the whole array to the chart component */}
          <CreateYourOwnChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default page;
