import React from "react";
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
  // const timelabel = [];
  // if (props.type === "time") {
  //   Object.keys(props.data).forEach((item) => {
  //     if (item >= 0 && item <= 23) {
  //       const ampm = item >= 12 ? "PM" : "AM";
  //       const formattedHours = item % 12 || 12; // Convert 0 to 12
  //       const minutes = new Date().getMinutes();
  //       const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  //       timelabel.push(`${formattedHours}:${formattedMinutes} ${ampm}`);
  //     }
  //   });
  // }
  // console.log(timelabel);

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
  return <Bar options={options} data={data} />;
}
