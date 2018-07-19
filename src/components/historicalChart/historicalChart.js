import React from "react";
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";

const HistoricalChart = props => (
    <div>
        <h1>HISTORICAL</h1>
        <div className="row">
            <ResponsiveContainer width="80%" height={200}>
                <LineChart
                    data={props.data}
                    margin={{
                        top: 15,
                        right: 20,
                        left: 25,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" stroke="none" />
                    <XAxis dataKey="time" tick={{ fill: "#F7FDFF" }} />
                    <YAxis tick={{ fill: "#F7FDFF" }} domain={["dataMin", "dataMax"]} />
                    <Tooltip />
                    <Line type="linear" dataKey="open" stroke="#82ca9d" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);

HistoricalChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HistoricalChart;

