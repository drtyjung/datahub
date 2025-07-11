import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateSkinGroupData, getCommonOptions } from '../../utils/chartConfig';

const SkinGroupChart = () => {
  const skinGroupData = generateSkinGroupData();

  const data = {
    labels: skinGroupData.labels,
    datasets: [{
      data: skinGroupData.data,
      backgroundColor: skinGroupData.colors,
      borderWidth: 0,
      hoverBorderWidth: 3,
      hoverBorderColor: '#ffffff'
    }]
  };

  const options = getCommonOptions('doughnut');

  return (
    <ChartContainer
      title="피부그룹별 생성 횟수"
      subtitle="피부타입별 분포"
      icon="fas fa-palette"
    >
      <Doughnut data={data} options={options} />
    </ChartContainer>
  );
};

export default SkinGroupChart;