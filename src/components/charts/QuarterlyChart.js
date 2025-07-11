import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateQuarterlyData, colorPalette, getCommonOptions } from '../../utils/chartConfig';

const QuarterlyChart = () => {
  const quarterlyData = generateQuarterlyData();

  const data = {
    labels: quarterlyData.labels,
    datasets: [{
      label: '분기별 생성 횟수',
      data: quarterlyData.data,
      backgroundColor: colorPalette,
      borderRadius: 8,
      borderSkipped: false
    }]
  };

  const options = {
    ...getCommonOptions('horizontal'),
    indexAxis: 'y'
  };

  return (
    <ChartContainer
      title="분기별 생성 횟수"
      subtitle="분기별 실적"
      icon="fas fa-chart-line"
    >
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default QuarterlyChart;