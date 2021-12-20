import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

export default function ValueGraph(props) {
    return (
        <ResponsiveContainer width='100%' height={400} margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 55
        }}>
            <LineChart
                width={800}
                height={500}
                data={props.data}
                
            >
                <CartesianGrid strokeDasharray="7 7" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    activeDot={{ r: 5 }}
                    strokeWidth={5}
                    dot={{ stroke: '#11c0ff', strokeWidth: 8, r: 5, fill: 'blue'}}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}