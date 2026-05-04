"use client";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
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
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#7f7373fe" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#f70521"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <RadarChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
        outerRadius="80%"
        data={data}
        margin={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
        }}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="percentage"
          stroke="#0c0203ed"
          fill="#fb08089d"
          fillOpacity={0.6}
        />
        {/* <RechartsDevtools /> */}
      </RadarChart>
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        onContextMenu={(_, e) => e.preventDefault()}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" niceTicks="snap125" />
        <YAxis width="auto" niceTicks="snap125" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="percentage"
          stroke="#101d0f91"
          fill="#8cd88491"
        />
      </AreaChart>
    </div>
  );
}
