import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartContainer from '../ChartContainer';
import { generateStoreData, getCommonOptions } from '../../utils/chartConfig';

const StoreChart = () => {
  const storeData = generateStoreData();

  const data = {
    labels: storeData.labels,
    datasets: [{
      data: storeData.data,
      backgroundColor: storeData.colors,
      borderWidth: 0,
      hoverBorderWidth: 3,
      hoverBorderColor: '#ffffff'
    }]
  };

  const options = getCommonOptions('doughnut');

  return (
    <ChartContainer
      title="매장별 생성 횟수"
      subtitle="매장별 매칭 비율"
      icon="fas fa-store"
    >
      <Doughnut data={data} options={options} />
    </ChartContainer>
  );
};

export default StoreChart;