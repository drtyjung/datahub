import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateAgeData, colorPalette, getCommonOptions } from '../../utils/chartConfig';

const AgeChart = () => {
  const ageData = generateAgeData();

  const data = {
    labels: ageData.labels,
    datasets: [{
      label: '연령대별 생성 횟수',
      data: ageData.data,
      backgroundColor: colorPalette,
      borderRadius: 8,
      borderSkipped: false
    }]
  };

  const options = getCommonOptions('bar');

  return (
    <ChartContainer
      title="연령대별 생성 횟수"
      subtitle="10세 단위 분포"
      icon="fas fa-users"
    >
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default AgeChart;