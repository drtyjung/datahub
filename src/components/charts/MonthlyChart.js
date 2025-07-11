import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateMonthlyData, chartColors, getCommonOptions } from '../../utils/chartConfig';

const MonthlyChart = () => {
  const monthlyData = generateMonthlyData();

  const data = {
    labels: monthlyData.labels,
    datasets: [{
      label: '월별 생성 횟수',
      data: monthlyData.data,
      borderColor: chartColors.accent,
      backgroundColor: `${chartColors.accent}20`,
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: chartColors.accent,
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const options = getCommonOptions('line');

  return (
    <ChartContainer
      title="월별 생성 횟수"
      subtitle="월간 트렌드"
      icon="fas fa-calendar-alt"
    >
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default MonthlyChart;