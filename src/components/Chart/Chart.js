import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

console.log ('In Chart.js');

const Chart = (props) => {
const dataPointValues = props.dataPoints.map (dataPoint => dataPoint.value);
const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {
        props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))

        // Below code is same as above
        //{props.dataPoints.map{
        //     (function (dataPoint) {
        //         return <ChartBar value={dataPoint.value} />;
        //     })
        // }
      }
    </div>
  );
};

export default Chart;
