import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart(props) {
  const data = {
    datasets: [
      {
        label: Object.keys(props.data),
        data: Object.values(props.data),
        backgroundColor: ["rgba(99, 89, 233, 1)", "rgba(100, 207, 246, 1)"],
        borderColor: ["rgba(99, 89, 233, 1)", "rgba(100, 207, 246, 1)"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  return (
    <div
      style={{
        height: 200,
        width: 200,
        display: "flex",
        margin: "auto",
        marginTop: -10,
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}
