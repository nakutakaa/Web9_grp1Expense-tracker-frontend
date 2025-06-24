// src/components/Charts/CategorySpendingBarChart.jsx
/**
 * @file CategorySpendingBarChart.jsx
 * @description Reusable bar chart component to visualize spending by category.
 */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * CategorySpendingBarChart Component
 * Displays a bar chart showing spending amount for different categories.
 */
const CategorySpendingBarChart = ({ data }) => {
  // Prepare chart data
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: 'Spending',
        data: data.map((item) => item.amount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(75, 192, 192, 0.6)', // Green
          'rgba(153, 102, 255, 0.6)', // Purple
          'rgba(255, 159, 64, 0.6)', // Orange
          'rgba(199, 199, 199, 0.6)', // Grey
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to resize freely within its container
    plugins: {
      legend: {
        position: 'top',
        labels: {
            color: 'rgb(229 231 235)', // Tailwind 'text-text-primary' like color
        },
      },
      title: {
        display: true,
        text: 'Spending by Category',
        color: 'rgb(229 231 235)', // Tailwind 'text-text-primary' like color
        font: {
            size: 18
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              // UPDATED: Currency format for tooltips
              label += new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(100, 100, 100, 0.2)', // Lighter grid lines
        },
        ticks: {
          color: 'rgb(229 231 235)', // Label color
        }
      },
      y: {
        grid: {
          color: 'rgba(100, 100, 100, 0.2)', // Lighter grid lines
        },
        ticks: {
          color: 'rgb(229 231 235)', // Label color
          // UPDATED: Currency prefix for y-axis labels
          callback: function(value) {
            return 'Ksh ' + value;
          }
        }
      },
    },
  };

  return (
    <div className="h-96"> {/* Set a fixed height for the chart container */}
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default CategorySpendingBarChart;