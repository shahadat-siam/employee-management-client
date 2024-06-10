import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
 
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const Chart = ({ email }) => { 
  const axiosSecure = useAxiosSecure(); 

  const { data: paid = [] } = useQuery({
    queryKey: ["paid", email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/paid/${email}`);
      return data;
    },
  });
  console.log(paid);

  return (
    <div>
      <BarChart
        width={600}
        height={330}
        data={paid}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Bar
          dataKey="salary"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {paid.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
