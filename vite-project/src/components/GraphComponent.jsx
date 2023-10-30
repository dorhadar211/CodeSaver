import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  // Tooltip,
  // Legend
);

const options = {
  scales: {
    x: {
      type: 'linear',
      // barPercentage: 1.0, // Center the bars on the X-axis
      // categoryPercentage: 1.0, // Ensure bars cover the entire X-axis
      // stepSize:5,
      position:'center'
    },
    y: {
      type: 'linear',
      // position: 'left',
      // beginAtZero: false,
      suggestedMin: -1000, // Set the minimum value for the Y-axis
      suggestedMax: 1000, // Set the maximum value for the Y-axis
    },
  },
};

const labels = [-0.4,-0.3,-0.2,-0.1,0,0.1,0.2,0.3,0.4];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: ['rgba(255, 99, 132,0.7)','rgba(255, 99, 132,0.7)','rgba(255, 99, 132,0.7)','rgba(255, 99, 132,0.7)',
                        'rgba(2, 2, 2,0.7)','rgba(2, 2, 2,0.7)','rgba(2, 2, 2,0.7)','rgba(2, 2, 2,0.7)','rgba(2, 2, 2,0.7)',
                        'rgba(2, 2, 2,0.7)'],
    }
  ],
};

const CustomBarChart= ()=> {
  return <Bar options={options} data={data} />;
}

export default CustomBarChart
