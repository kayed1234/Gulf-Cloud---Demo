import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Titles";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  // createData("2019 Sep", 0),
  // createData("Oct 19", 300),
  // createData("Nov 19", 600),
  createData("Apr 19", 20),
  createData("May 19", 40),
  createData("Jun 19", 90),
  createData("Jul 19", 150),
  createData("Aug 19", 210),
  createData("Sep 19", 250)
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>حركة التسجيل</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 16
          }}
        >
          <XAxis dataKey='time' />
          <YAxis>
            <Label
              angle={270}
              position='left'
              style={{ textAnchor: "middle" }}
            ></Label>
          </YAxis>
          <Line type='monotone' dataKey='amount' stroke='#556CD6' dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
