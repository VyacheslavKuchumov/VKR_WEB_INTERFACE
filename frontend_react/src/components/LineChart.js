// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Регистрация компонентов Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

const LineChart = () => {
  // Данные для графика
  const data = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'], // Метки по оси X
    datasets: [
      {
        label: 'Продажи за полгода',
        data: [12, 19, 3, 5, 2, 3], // Значения по оси Y
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Параметры графика
  const options = {
    responsive: true,
    plugins: {
      legend: {
       
      },
      title: {
        display: true,
        text: 'Линейный график продаж',
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default LineChart;