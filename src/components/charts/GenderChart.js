import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateGenderData, getCommonOptions } from '../../utils/chartConfig';

const GenderChart = () => {
  const genderData = generateGenderData();

  const data = {
    labels: genderData.labels,
    datasets: [{
      data: genderData.data,
      backgroundColor: genderData.colors,
      borderWidth: 0,
      hoverBorderWidth: 3,
      hoverBorderColor: '#ffffff'
    }]
  };

  const options = getCommonOptions('doughnut');

  return (
    <ChartContainer
      title="성별 생성 횟수"
      subtitle="성별 분포"
      icon="fas fa-venus-mars"
    >
      <Doughnut data={data} options={options} />
    </ChartContainer>
  );
};

export default GenderChart;