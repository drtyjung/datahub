import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateAgeSkinData, getCommonOptions } from '../../utils/chartConfig';

const AgeSkinChart = () => {
  const ageSkinData = generateAgeSkinData();

  const data = {
    labels: ageSkinData.labels,
    datasets: ageSkinData.datasets.map(dataset => ({
      ...dataset,
      borderRadius: 4,
      borderSkipped: false
    }))
  };

  const options = getCommonOptions('stacked');

  return (
    <ChartContainer
      title="연령대별 피부타입"
      subtitle="연령대와 피부타입 관계"
      icon="fas fa-user-tag"
    >
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default AgeSkinChart;