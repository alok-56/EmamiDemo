import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Delhi", 200],
  ["Jharkhand", 300],
  ["Bihar", 400],
  ["Ranchi", 500],
  ["Delhi", 600],
  ["Bhopal", 700],
];

export const options = {
    region: "IN", // Africa
    displayMode: "regions",
     resolution: "provinces",
    colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
    backgroundColor: "black",
    datalessRegionColor: "grey",
    defaultColor: "grey",
    borderRadius:20,
    height:200
  };

export function Geo() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1][0]; // Corrected this line
            console.log("Selected: " + region);
          },
        },
      ]}
      chartType="GeoChart"
     options={options}
     height="100%"
      data={data}
    />
  );
}

// import React from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["State", "Scans"],
//   ["Andaman and Nicobar Islands", 1],
//   ["karnataka", 3575013],
//   [],
// ];

// const options = {
//   region: "IN",
//   displayMode: "regions",
//   resolution: "provinces",
//   colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
//   backgroundColor: "black",
//   datalessRegionColor: "grey",
//   defaultColor: "grey",
// };

// export function Geo() {
//   return (
//     <Chart
//       chartEvents={[
//         {
//           eventName: "select",
//           callback: ({ chartWrapper }) => {
//             const chart = chartWrapper.getChart();
//             const selection = chart.getSelection();
//             if (selection.length === 0) return;
//             const region = data[selection[0].row + 1];
//           },
//         },
//       ]}
//       chartType="GeoChart"
//       width="100%"
//       height="200px"
//       options={options}
//       data={data}
//     />
//   );
// }
