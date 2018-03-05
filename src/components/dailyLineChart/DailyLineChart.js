import React from 'react'
import { AreaChart,
      XAxis,
       YAxis,
        CartesianGrid,
         Area,
          Tooltip,
           Legend,
         ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types';

  const DailyLineChart = (props)  => {

      	return (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={props.data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="high" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="low" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
         </ResponsiveContainer>
       );
     }


DailyLineChart.propTypes = {
  data: PropTypes.array
}

export default DailyLineChart
