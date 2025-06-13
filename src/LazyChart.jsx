import React, { Suspense, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bar = React.lazy(() =>
  import('react-chartjs-2').then(module => ({ default: module.Bar }))
);

export default function LazyChart() {
  const [data,setData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
    ],
  });

  const handleClick=()=>{
    setData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [60,20,40,10,80],
            backgroundColor: 'rgba(75,192,192,0.4)',
          },
        ],
    })
  }

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Suspense fallback={<div>Loading chart...</div>}>
        <Bar data={data} />
        <button onClick={handleClick}>New Stat</button>
      </Suspense>
    </div>
  );
}
