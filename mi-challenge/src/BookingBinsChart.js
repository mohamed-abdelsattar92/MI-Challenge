import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const prepareData = rawData => {
  console.log(rawData);
  const data = [
    { name: "From 0->1km", value: rawData.bins["From 0->1km"] },
    { name: "From 1->2km", value: rawData.bins["From 1->2km"] },
    { name: "From 2->3km", value: rawData.bins["From 2->3km"] },
    { name: "From 3->4km", value: rawData.bins["From 3->4km"] }
  ];
  return data;
};

const BookingBinsChart = props => {
  return (
    <div className="booking-bins-container">
      <div className="chart-title">
        <h4>How many bookings happened for every kilometer bin </h4>
      </div>
      <PieChart width={800} height={400}>
        <Pie data={prepareData(props)} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" label>
          {prepareData(props).map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconSize={10} width={150} height={140} layout="vertical" verticalAlign="middle" />
      </PieChart>
    </div>
  );
};

export default BookingBinsChart;
