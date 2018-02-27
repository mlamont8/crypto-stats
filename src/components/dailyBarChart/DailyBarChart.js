import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip, Legend } from 'recharts';

class DailyBarChart extends React.Component {

   render () {
     	return (
       	<BarChart width={600} height={300} data={this.props.data}
               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="high" fill="#8884d8" />
          <Bar dataKey="low" fill="#82ca9d" />
         </BarChart>
       );
     }
}
export default DailyBarChart
