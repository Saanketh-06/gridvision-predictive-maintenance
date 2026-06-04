import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function FaultTrendChart({
  data
}) {

  return (

    <ResponsiveContainer
      width="100%"
      height={300}
    >

      <LineChart data={data}>

        <CartesianGrid
          strokeDasharray="3 3"
        />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="faults"
        />

      </LineChart>

    </ResponsiveContainer>
  );
}