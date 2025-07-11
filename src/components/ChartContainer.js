import React from 'react';

const ChartContainer = ({ title, subtitle, icon, children }) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>
          <i className={icon}></i> {title}
        </h3>
        <p className="chart-subtitle">{subtitle}</p>
      </div>
      <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;