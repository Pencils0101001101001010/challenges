"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../styles/createYourOwnChartComponent.css";

//set up type to handle previous data
type ChartData = {
  data: { name: string; percentage: number }[];
};

export default function CreateYourOwnChart({ data }: ChartData) {
  return (
    <div className="mainContainer">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="percentage" fill="#59ebba" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
