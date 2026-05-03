"use client";

import "../../styles/chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Area,
  AreaChart,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
};

const data: ChartData[] = [
  { name: "Sunlight", value: 200 },
  { name: "HandyAndy", value: 250 },
  { name: "Dometos", value: 350 },
  { name: "Mac", value: 120 },
  { name: "Q", value: 210 },
];

const data1: ChartData[] = [
  { name: "Coalway", value: 120 },
  { name: "MintyFresh", value: 300 },
  { name: "Charcoal", value: 85 },
  { name: "NoYellow", value: 170 },
  { name: "MethWash", value: 400 },
];

const data2: ChartData[] = [
  { name: "Search", value: 120 },
  { name: "QCB", value: 240 },
  { name: "Loot", value: 65 },
  { name: "Survive", value: 170 },
  { name: "Deaths", value: 180 },
];

const data3: ChartData[] = [
  { name: "A", value: 450 },
  { name: "B", value: 230 },
  { name: "C", value: 198 },
  { name: "D", value: 320 },
  { name: "E", value: 180 },
];

const Chart: React.FC = () => {
  return (
    <div className="mainContainer">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#59ebba" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data1}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#ccc" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
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
        data={data2}
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
          dataKey="value"
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
        data={data3}
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
          dataKey="value"
          stroke="#101d0f91"
          fill="#8cd88491"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;

//~ Fetching data Asynchronously
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const DataFetchingChart: React.FC = () => {
//   const [data, setData] = useState<ChartData[]>([]);

//   useEffect(() => {
//     axios.get('/api/data').then((response) => {
//       setData(response.data);
//     });
//   }, []);

//   return <BarChartComponent data={data} xAxisKey="name" yAxisKey="value" />;
// };
