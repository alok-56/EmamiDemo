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
          color:"rgba(140, 137, 180, 0.35)"
        },
      },
    },
  
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  label: false,
  labels,
  datasets: [
    {
      fill: true,
      data: [20, 40, 60, 80],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(99, 89, 233, 1)",
      label: '',
      
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
