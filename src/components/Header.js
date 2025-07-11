import React, { useState, useEffect } from 'react';

const Header = () => {
  const [stats, setStats] = useState({
    today: 1234,
    week: 8967,
    total: 125678
  });

  // 30초마다 통계 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        today: Math.floor(Math.random() * 2000) + 1000,
        week: Math.floor(Math.random() * 10000) + 5000,
        total: Math.floor(Math.random() * 100000) + 100000
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>
          <i className="fas fa-chart-bar"></i> 
          배치 아이디 생성 대시보드
        </h1>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-label">오늘 생성</span>
            <span className="stat-value">{stats.today.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">이번 주</span>
            <span className="stat-value">{stats.week.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">총 생성</span>
            <span className="stat-value">{stats.total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;