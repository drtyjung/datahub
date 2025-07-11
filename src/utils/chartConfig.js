// Chart.js 등록
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

// 차트 색상 팔레트
export const chartColors = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f093fb',
  success: '#48bb78',
  warning: '#ed8936',
  error: '#f56565'
};

export const colorPalette = [
  '#667eea', '#764ba2', '#f093fb', '#48bb78', '#ed8936', 
  '#f56565', '#4facfe', '#43e97b', '#fa709a', '#38f9d7'
];

// 샘플 데이터 생성 함수들
export const generateHourlyData = () => {
  const hours = Array.from({length: 24}, (_, i) => `${i.toString().padStart(2, '0')}:00`);
  const data = [45, 52, 38, 42, 35, 28, 22, 35, 65, 85, 95, 120, 145, 160, 155, 140, 125, 110, 95, 80, 75, 65, 58, 50];
  return { labels: hours, data };
};

export const generateDailyData = () => {
  const dates = Array.from({length: 30}, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  });
  const data = Array.from({length: 30}, () => Math.floor(Math.random() * 200) + 800);
  return { labels: dates, data };
};

export const generateMonthlyData = () => {
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const data = [2800, 3200, 3500, 4100, 4500, 4800, 5200, 5600, 5100, 4700, 4200, 3900];
  return { labels: months, data };
};

export const generateGenderData = () => ({
  labels: ['여성', '남성', '기타'],
  data: [65, 32, 3],
  colors: ['#f093fb', '#667eea', '#48bb78']
});

export const generateQuarterlyData = () => ({
  labels: ['1분기', '2분기', '3분기', '4분기'],
  data: [12500, 16800, 18200, 15600]
});

export const generateStoreData = () => ({
  labels: ['강남점', '홍대점', '명동점', '잠실점', '신촌점', '기타'],
  data: [28, 22, 18, 15, 12, 5],
  colors: ['#667eea', '#764ba2', '#f093fb', '#48bb78', '#ed8936', '#f56565']
});

export const generateSkinGroupData = () => ({
  labels: ['건성', '지성', '복합성', '민감성', '중성'],
  data: [25, 30, 35, 7, 3],
  colors: ['#ffeaa7', '#fab1a0', '#fd79a8', '#74b9ff', '#81ecec']
});

export const generateAgeData = () => ({
  labels: ['10대', '20대', '30대', '40대', '50대', '60대+'],
  data: [8, 45, 35, 20, 15, 7]
});

export const generateAgeSkinData = () => ({
  labels: ['10대', '20대', '30대', '40대', '50대', '60대+'],
  datasets: [
    { label: '건성', data: [2, 8, 12, 8, 6, 3], backgroundColor: '#ffeaa7' },
    { label: '지성', data: [4, 15, 8, 5, 3, 1], backgroundColor: '#fab1a0' },
    { label: '복합성', data: [2, 18, 12, 5, 4, 2], backgroundColor: '#fd79a8' },
    { label: '민감성', data: [0, 3, 2, 1, 1, 1], backgroundColor: '#74b9ff' },
    { label: '중성', data: [0, 1, 1, 1, 1, 0], backgroundColor: '#81ecec' }
  ]
});

// 공통 차트 옵션
export const getCommonOptions = (type = 'default') => {
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: type === 'doughnut' || type === 'stacked',
        position: 'bottom',
        labels: {
          padding: 15,
          usePointStyle: true,
          color: '#1a202c',
          font: {
            size: 11,
            weight: '500'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: chartColors.primary,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: type !== 'line'
      }
    }
  };

  if (type === 'line' || type === 'bar') {
    baseOptions.scales = {
      x: {
        grid: {
          display: type === 'bar',
          color: 'rgba(226, 232, 240, 0.5)',
          drawBorder: false
        },
        border: {
          display: false
        },
        ticks: {
          color: '#718096',
          font: {
            size: 10
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(226, 232, 240, 0.5)',
          drawBorder: false
        },
        border: {
          display: false
        },
        ticks: {
          color: '#718096',
          font: {
            size: 10
          }
        }
      }
    };
  }

  if (type === 'stacked') {
    baseOptions.scales.x.stacked = true;
    baseOptions.scales.y.stacked = true;
  }

  if (type === 'horizontal') {
    baseOptions.indexAxis = 'y';
  }

  if (type === 'doughnut') {
    baseOptions.cutout = '60%';
    baseOptions.plugins.tooltip.callbacks = {
      label: function(context) {
        const total = context.dataset.data.reduce((a, b) => a + b, 0);
        const percentage = ((context.raw / total) * 100).toFixed(1);
        return `${context.label}: ${context.raw} (${percentage}%)`;
      }
    };
  }

  return baseOptions;
};