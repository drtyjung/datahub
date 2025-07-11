import React from 'react';

// 차트 컴포넌트들 import
import HourlyChart from './charts/HourlyChart';
import DailyChart from './charts/DailyChart';
import MonthlyChart from './charts/MonthlyChart';
import GenderChart from './charts/GenderChart';
import QuarterlyChart from './charts/QuarterlyChart';
import StoreChart from './charts/StoreChart';
import SkinGroupChart from './charts/SkinGroupChart';
import AgeChart from './charts/AgeChart';
import AgeSkinChart from './charts/AgeSkinChart';

const Dashboard = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        <HourlyChart />
        <DailyChart />
        <MonthlyChart />
        <GenderChart />
        <QuarterlyChart />
        <StoreChart />
        <SkinGroupChart />
        <AgeChart />
        <AgeSkinChart />
      </div>
    </main>
  );
};

export default Dashboard;