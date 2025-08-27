import React, { useEffect, useRef } from 'react';

const MediaUploadsChart = ({ height = '256px', className = '' }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Load Chart.js
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js';
      script.onload = () => {
        if (window.Chart && chartRef.current) {
          
          const ctx = chartRef.current.getContext('2d');
          
          // Monthly data with proper values
          const monthlyData = [75, 25, 45, 15, 85, 35, 70, 25, 35, 15, 45, 30];
          const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

          chartInstance.current = new window.Chart(ctx, {
            type: 'line',
            data: {
              labels: monthLabels,
              datasets: [{
                data: monthlyData,
                borderColor: '#2563eb',
                backgroundColor: 'transparent',
                borderWidth: 3,
                fill: false,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#2563eb',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                intersect: false,
                mode: 'index'
              },
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  titleColor: '#ffffff',
                  bodyColor: '#ffffff',
                  cornerRadius: 6,
                  displayColors: false,
                  callbacks: {
                    title: function(context) {
                      return monthLabels[context[0].dataIndex];
                    },
                    label: function(context) {
                      return `$${context.parsed.y}K`;
                    }
                  }
                }
              },
              scales: {
                x: {
                  display: true,
                  grid: {
                    display: false
                  },
                  ticks: {
                    color: '#9CA3AF',
                    font: {
                      size: 12
                    }
                  }
                },
                y: {
                  display: true,
                  position: 'left',
                  min: 0,
                  max: 100,
                  grid: {
                    color: '#F3F4F6',
                    drawBorder: false
                  },
                  ticks: {
                    color: '#9CA3AF',
                    font: {
                      size: 12
                    },
                    callback: function(value) {
                      return '$' + value + 'K';
                    },
                    stepSize: 20
                  }
                }
              }
            }
          });
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <canvas ref={chartRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default MediaUploadsChart;