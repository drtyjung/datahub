import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateHourlyData, chartColors, getCommonOptions } from '../../utils/chartConfig';

const HourlyChart = () => {
  const hourlyData = generateHourlyData();

  const data = {
    labels: hourlyData.labels,
    datasets: [{
      label: '시간별 생성 횟수',
      data: hourlyData.data,
      borderColor: chartColors.primary,
      backgroundColor: `${chartColors.primary}20`,
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: chartColors.primary,
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const options = getCommonOptions('line');

  return (
    <ChartContainer
      title="시간대별 생성 횟수"
      subtitle="24시간 기준 패턴"
      icon="fas fa-clock"
    >
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default HourlyChart;