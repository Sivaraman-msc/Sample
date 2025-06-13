import React from 'react'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import {Bar} from 'react-chartjs-2'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
)

export default function NewChartJs() {

    const data={
        labels:["Jan","Feb","Mar","Apr","May"],
        datasets:[{
            label:'Sales',
            data:[30,10,40,60,20],
            backgroundColor:'rgba(75,192,192,0.2)',
            borderColor:'blue',
            tension:0.3
        }]
    }
    const Options={
        responsive:true,
        plugins:{
            legend:{display:true},
            title:{display:true,text:"Large Sales"}
        }
    }
  return (
    <Bar data={data} options={Options} />
  )
}
