import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";
import "../App.css";

import LinearGradient from "./LinearGradient.js";

/**
 * Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
 * Looking topojson for other countries/world?
 * Visit: https://github.com/markmarkoh/datamaps
 */
const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 1150,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
  width: "100%",
};

// will generate random heatmap data on every call

const GeoGraph = (props) => {
  const resultArray = Object.entries(props.data).map(([key, value]) => ({
    id: key,
    value,
  }));

  
  const cityArray = Object.entries(props.map).map(([key, value]) => ({
    id: key,
    value,
  }));
  console.log(cityArray);

  const getHeatMapData = () => {
    return resultArray;
  };

  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current, value, city = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name} :- ${value} Scans`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };

  return (
    <div>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //console.log(geo.id);
              const current = resultArray.find((s) => s.id === geo.id);
              let value;
              resultArray.map((item) => {
                if (geo.id === item.id) {
                  value = item.value;
                }
              });
              let city;
              cityArray.map((item) => {
                if (value === item.value) {
                  city = item.id;
                }
              });
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current, value, city)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {/* <LinearGradient data={gradientData} />  */}
      {/* <div className="center">
          <button className="mt16" onClick={onChangeButtonClick}>Change</button>
        </div>  */}
      <p
        style={{
          color: "#fff",
          textAlign: "center",
          marginTop: 10,
          fontWeight: "500",
        }}
      >
        {tooltipContent}
      </p>
    </div>
  );
};

export default GeoGraph;

// import React from "react";
// import { Chart } from "react-google-charts";

// export function Geo(props) {
//   console.log(props)

//   const data = [["City", "Scans"],
//   ["Ranchi",34546],
//   ["Mangalore", 54321890]
// ];

//   const options = {
//     region: "IN", // Africa
//     displayMode: "regions",
//     resolution: "provinces",
//     colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
//     backgroundColor: "black",
//     datalessRegionColor: "grey",
//     defaultColor: "grey",
//     borderRadius: 20,
//     height: 200,
//   };

//   console.log(props);
//   return (
//     <Chart
//       chartEvents={[
//         {
//           eventName: "select",
//           callback: ({ chartWrapper }) => {
//             const chart = chartWrapper.getChart();
//             const selection = chart.getSelection();
//             if (selection.length === 0) return;
//             const region = data[selection[0].row + 1][0]; // Corrected this line
//             console.log("Selected: " + region);
//           },
//         },
//       ]}
//       chartType="GeoChart"
//       options={options}
//       height="100%"
//       data={data}
//     />
//   );
// }

// // import React from "react";
// // import { Map, TileLayer, Marker, Popup } from "react-leaflet";

// // export const Geo = () => {
// //   const cities = [
// //     { name: "Ranchi", position: [23.3441, 85.3096] },
// //     { name: "Delhi", position: [28.6139, 77.2090] },
// //     // Add more cities with their coordinates here
// //   ];

// //   return (
// //     <div className="map-container">
// //       <Map center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px", width: "100%" }}>
// //         <TileLayer
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         />
// //         {cities.map((city, index) => (
// //           <Marker key={index} position={city.position}>
// //             <Popup>{city.name}</Popup>
// //           </Marker>
// //         ))}
// //       </Map>
// //     </div>
// //   );
// // };

// // export default Geo;
