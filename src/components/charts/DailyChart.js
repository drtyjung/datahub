import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateDailyData, chartColors, getCommonOptions } from '../../utils/chartConfig';

const DailyChart = () => {
  const dailyData = generateDailyData();

  const data = {
    labels: dailyData.labels,
    datasets: [{
      label: '일별 생성 횟수',
      data: dailyData.data,
      borderColor: chartColors.secondary,
      backgroundColor: `${chartColors.secondary}20`,
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: chartColors.secondary,
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const options = getCommonOptions('line');

  return (
    <ChartContainer
      title="일자별 생성 횟수"
      subtitle="최근 30일 트렌드"
      icon="fas fa-calendar-day"
    >
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default DailyChart;