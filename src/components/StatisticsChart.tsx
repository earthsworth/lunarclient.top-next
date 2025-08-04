"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import { Button } from "./ui/button";
import { ChartContainer } from "./ui/chart";

interface DataPoint {
  userCount: number;
  onlineCount: number;
  timestamp: number;
}

const getAxisYDomain = (
  from: number,
  to: number,
  data: DataPoint[],
  ref: keyof DataPoint,
  offset: number
): [number, number] => {
  const filteredData = data.filter(
    (d) => d.timestamp >= from && d.timestamp <= to
  );

  if (filteredData.length === 0) return [0, 100];

  let [bottom, top] = [filteredData[0][ref], filteredData[0][ref]];

  filteredData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

type ChartState = {
  data: DataPoint[];
  left: number | "dataMin";
  right: number | "dataMax";
  refAreaLeft: string;
  refAreaRight: string;
  top: "dataMax+100" | number;
  bottom: "dataMin" | number;
  top2: "dataMax+5" | number;
  bottom2: "dataMin" | number;
  animation: boolean;
};

export type StatisticsChartProps = {
  dataPoints: DataPoint[];
};

export function StatisticsChart({ dataPoints }: StatisticsChartProps) {
  const [state, setState] = useState<ChartState>({
    data: dataPoints,
    left: "dataMin",
    right: "dataMax",
    refAreaLeft: "",
    refAreaRight: "",
    top: "dataMax+100" as const,
    bottom: "dataMin" as const,
    top2: "dataMax+5" as const,
    bottom2: "dataMin" as const,
    animation: true,
  });

  const zoom = () => {
    let { refAreaLeft, refAreaRight } = state;
    const { data } = state;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      setState((prevState) => ({
        ...prevState,
        refAreaLeft: "",
        refAreaRight: "",
      }));
      return;
    }

    if (parseFloat(refAreaLeft) > parseFloat(refAreaRight))
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    const leftNum = parseFloat(refAreaLeft);
    const rightNum = parseFloat(refAreaRight);

    const [bottom, top] = getAxisYDomain(
      leftNum,
      rightNum,
      data,
      "userCount",
      100
    );
    const [bottom2, top2] = getAxisYDomain(
      leftNum,
      rightNum,
      data,
      "onlineCount",
      5
    );

    setState((prevState) => ({
      ...prevState,
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: leftNum,
      right: rightNum,
      bottom,
      top,
      bottom2,
      top2,
    }));
  };

  const zoomOut = () => {
    const { data } = state;
    setState((prevState) => ({
      ...prevState,
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+100",
      bottom: "dataMin",
      top2: "dataMax+5",
      bottom2: "dataMin",
    }));
  };

  const {
    data,
    refAreaLeft,
    refAreaRight,
    left,
    right,
    top,
    bottom,
    top2,
    bottom2,
  } = state;

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className="highlight-bar-charts"
      style={{ userSelect: "none", width: "100%" }}
    >
      <Button type="button" className="btn update" onClick={zoomOut}>
        Zoom Out
      </Button>

      <ChartContainer config={{}}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={800}
            height={400}
            data={data}
            onMouseDown={(e) => {
              if (e && e.activeLabel) {
                setState((prevState) => ({
                  ...prevState,
                  refAreaLeft: e.activeLabel || "",
                }));
              }
            }}
            onMouseMove={(e) => {
              if (state.refAreaLeft && e && e.activeLabel) {
                setState((prevState) => ({
                  ...prevState,
                  refAreaRight: e.activeLabel || "",
                }));
              }
            }}
            onMouseUp={zoom}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              allowDataOverflow
              dataKey="timestamp"
              domain={[left, right]}
              type="number"
              tickFormatter={formatTimestamp}
            />
            <YAxis
              allowDataOverflow
              domain={[bottom, top]}
              type="number"
              yAxisId="1"
              label={{
                value: "User Count",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              orientation="right"
              allowDataOverflow
              domain={[bottom2, top2]}
              type="number"
              yAxisId="2"
              label={{
                value: "Online Count",
                angle: 90,
                position: "insideRight",
              }}
            />
            <Tooltip
              labelFormatter={(value) =>
                `Time: ${formatTimestamp(Number(value))}`
              }
              formatter={(value, name) => [
                value,
                name === "userCount" ? "User Count" : "Online Count",
              ]}
            />
            <Line
              yAxisId="1"
              type="natural"
              dataKey="userCount"
              stroke="#8884d8"
              animationDuration={300}
              name="userCount"
            />
            <Line
              yAxisId="2"
              type="natural"
              dataKey="onlineCount"
              stroke="#82ca9d"
              animationDuration={300}
              name="onlineCount"
            />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea
                yAxisId="1"
                x1={refAreaLeft}
                x2={refAreaRight}
                strokeOpacity={0.3}
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
