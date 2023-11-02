import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(140, 137, 180, 0.35)",
      },
    },
  },
};

export function BarChart(props) {
 
 
  const labels =
    props.type === "day"
      ? ["sunday", "monday", "tuesday", "thursday", "Friday", "satarday"]
      : props.type === "date"
      ? ""
      : props.type === "os"
      ? ""
      : props.type === "browser"
      ? ""
      : props.type === "time"
      ? ""
      : [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ];
  const data = {
    label: false,
    labels,
    datasets: [
      {
        fill: true,
        data: props.data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(99, 89, 233, 1)",
        label: "",
      },
    ],
  };
  return (
    <div>
      <Bar id="bar" options={options} data={data} />
    </div>
  );
}
