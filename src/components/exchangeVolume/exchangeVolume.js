import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend, Cell } from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#3c4eba', '#fffefb', '#3cddf1', '#1b6ff3'];

const exchangeVolume = (props) => {
  const { data } = props;
  return !data
    ? null
    :
    <div className="info-block">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={730} height={250}>
          <Legend layout="vertical" align="right" verticalAlign="middle" height={36} />
          <Pie
            data={data}
            dataKey="VOLUME24HOUR"
            nameKey="MARKET"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
          >
            {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>;
};

exchangeVolume.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default exchangeVolume;
