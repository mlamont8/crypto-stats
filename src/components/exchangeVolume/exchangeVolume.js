import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'


const exchangeVolume = (props) => {
  return (
    <div className="info-block">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={730} height={250}>
          <Pie data={props.data} dataKey="VOLUME24HOUR" nameKey="MARKET" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d"
            label={({ MARKET }) => `${MARKET}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

exchangeVolume.propTypes = {
  data: PropTypes.array
}

export default exchangeVolume
