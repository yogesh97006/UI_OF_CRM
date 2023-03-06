import { CChart } from '@coreui/react-chartjs'
import React from 'react'

function Chart() {
  return (
    <div style={{width:'650px',height:'250px',margin:'-40px 0 0 80px'}}>
    <CChart
    type="bar"
    data={{
      labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct'],
      datasets: [
        {
          barThickness:10,
          backgroundColor: '#407AE2',
          data: [20,25,18,26,25,30,25,35,30],
        },
      ],
    }}
    labels="months"
  /></div>
  )
}

export default Chart