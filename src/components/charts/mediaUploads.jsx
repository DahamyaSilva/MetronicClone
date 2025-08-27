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
          
          const dataPoints = [
            { x: 0, y: 75 },
            { x: 10, y: 65 },
            { x: 20, y: 45 },
            { x: 30, y: 55 },
            { x: 40, y: 35 },
            { x: 50, y: 40 },
            { x: 60, y: 85 },
            { x: 70, y: 60 },
            { x: 80, y: 75 },
            { x: 90, y: 50 },
            { x: 100, y: 80 }
          ];

          chartInstance.current = new window.Chart(ctx, {
            type: 'line',
            data: {
              datasets: [{
                data: dataPoints,
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
                    title: function() {
                      return 'Media Uploads';
                    },
                    label: function(context) {
                      return `Value: ${context.parsed.y}`;
                    }
                  }
                }
              },
              scales: {
                x: {
                  type: 'linear',
                  display: false,
                  min: 0,
                  max: 100
                },
                y: {
                  display: true,
                  drawBorder: false,
                  min: 0,
                  max: 100
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