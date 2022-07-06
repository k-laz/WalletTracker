import { Line } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function daysOfWeek(input) {
  var curr = new Date(); // get current date
  var first = curr.getDate(); // First day is the day of the month - the day of the week
  var date = new Date(curr.setDate(first + input)).toLocaleDateString("en-US");
  return date;
}

const LineChart = () => {
  const labels = [
    daysOfWeek(-6),
    daysOfWeek(-5),
    daysOfWeek(-4),
    daysOfWeek(-3),
    daysOfWeek(-2),
    daysOfWeek(-1),
    daysOfWeek(0),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "ETH",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Daily Transaction Volume",
      },
    },
  };

  return (
    <div className="">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
