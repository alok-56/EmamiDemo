import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

export function Lines(props) {
  const labels =
    props.type === "day"
      ? ["sunday", "monday", "tuesday", "thursday", "Friday", "satarday"]
      : props.type === "date"
      ? ""
      : props.type === "browser"
      ? "":props.type==="os"?"":props.type === "time"
      ? ""
      : [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "aug",
          "sept",
          "oct",
          "nov",
          "dec",
        ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: props.data,
        borderColor: "rgba(99, 89, 233, 1)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        pointBorderColor: "rgba(99, 89, 233, 1)",
        pointBackgroundColor: "rgba(99, 89, 233, 1)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
