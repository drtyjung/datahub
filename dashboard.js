// 차트 설정을 위한 공통 스타일
const chartColors = {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#f093fb',
    success: '#48bb78',
    warning: '#ed8936',
    error: '#f56565',
    gradients: {
        purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        blue: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        green: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        orange: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
};

// 차트 색상 팔레트
const colorPalette = [
    '#667eea', '#764ba2', '#f093fb', '#48bb78', '#ed8936', 
    '#f56565', '#4facfe', '#43e97b', '#fa709a', '#38f9d7'
];

// 샘플 데이터 생성 함수들
function generateHourlyData() {
    const hours = Array.from({length: 24}, (_, i) => `${i.toString().padStart(2, '0')}:00`);
    const data = [45, 52, 38, 42, 35, 28, 22, 35, 65, 85, 95, 120, 145, 160, 155, 140, 125, 110, 95, 80, 75, 65, 58, 50];
    return { labels: hours, data };
}

function generateDailyData() {
    const dates = Array.from({length: 30}, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    });
    const data = Array.from({length: 30}, () => Math.floor(Math.random() * 200) + 800);
    return { labels: dates, data };
}

function generateMonthlyData() {
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const data = [2800, 3200, 3500, 4100, 4500, 4800, 5200, 5600, 5100, 4700, 4200, 3900];
    return { labels: months, data };
}

function generateGenderData() {
    return {
        labels: ['여성', '남성', '기타'],
        data: [65, 32, 3],
        colors: ['#f093fb', '#667eea', '#48bb78']
    };
}

function generateQuarterlyData() {
    return {
        labels: ['1분기', '2분기', '3분기', '4분기'],
        data: [12500, 16800, 18200, 15600]
    };
}

function generateStoreData() {
    return {
        labels: ['강남점', '홍대점', '명동점', '잠실점', '신촌점', '기타'],
        data: [28, 22, 18, 15, 12, 5],
        colors: ['#667eea', '#764ba2', '#f093fb', '#48bb78', '#ed8936', '#f56565']
    };
}

function generateSkinGroupData() {
    return {
        labels: ['건성', '지성', '복합성', '민감성', '중성'],
        data: [25, 30, 35, 7, 3],
        colors: ['#ffeaa7', '#fab1a0', '#fd79a8', '#74b9ff', '#81ecec']
    };
}

function generateAgeData() {
    return {
        labels: ['10대', '20대', '30대', '40대', '50대', '60대+'],
        data: [8, 45, 35, 20, 15, 7]
    };
}

function generateAgeSkinData() {
    return {
        labels: ['10대', '20대', '30대', '40대', '50대', '60대+'],
        datasets: [
            { label: '건성', data: [2, 8, 12, 8, 6, 3], backgroundColor: '#ffeaa7' },
            { label: '지성', data: [4, 15, 8, 5, 3, 1], backgroundColor: '#fab1a0' },
            { label: '복합성', data: [2, 18, 12, 5, 4, 2], backgroundColor: '#fd79a8' },
            { label: '민감성', data: [0, 3, 2, 1, 1, 1], backgroundColor: '#74b9ff' },
            { label: '중성', data: [0, 1, 1, 1, 1, 0], backgroundColor: '#81ecec' }
        ]
    };
}

// 차트 생성 함수들
function createLineChart(ctx, data, options = {}) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(102, 126, 234, 0.8)');
    gradient.addColorStop(1, 'rgba(102, 126, 234, 0.1)');

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: options.label || '생성 횟수',
                data: data.data,
                borderColor: chartColors.primary,
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.primary,
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: chartColors.primary,
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        color: '#718096',
                        font: {
                            size: 12
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
                            size: 12
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            elements: {
                point: {
                    hoverBackgroundColor: chartColors.accent
                }
            },
            ...options
        }
    });
}

function createDoughnutChart(ctx, data, options = {}) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [{
                data: data.data,
                backgroundColor: data.colors || colorPalette,
                borderWidth: 0,
                hoverBorderWidth: 3,
                hoverBorderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        color: '#1a202c',
                        font: {
                            size: 13,
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
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} (${percentage}%)`;
                        }
                    }
                }
            },
            ...options
        }
    });
}

function createBarChart(ctx, data, options = {}) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: options.label || '생성 횟수',
                data: data.data,
                backgroundColor: data.colors || colorPalette,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: chartColors.primary,
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        color: '#718096',
                        font: {
                            size: 12
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
                            size: 12
                        }
                    }
                }
            },
            ...options
        }
    });
}

function createHorizontalBarChart(ctx, data, options = {}) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [{
                label: options.label || '생성 횟수',
                data: data.data,
                backgroundColor: colorPalette,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: chartColors.primary,
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                x: {
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
                            size: 12
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        color: '#718096',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            ...options
        }
    });
}

function createStackedBarChart(ctx, data, options = {}) {
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: data.datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    ticks: {
                        color: '#718096',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    stacked: true,
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
                            size: 12
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        color: '#1a202c',
                        font: {
                            size: 13,
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
                    cornerRadius: 8
                }
            },
            ...options
        }
    });
}

// 대시보드 초기화
function initializeDashboard() {
    // 1. 시간대별 배치 아이디 생성 횟수 - 꺾은선
    const hourlyData = generateHourlyData();
    const hourlyCtx = document.getElementById('hourlyChart').getContext('2d');
    createLineChart(hourlyCtx, hourlyData, { label: '시간별 생성 횟수' });

    // 2. 일자별 배치 아이디 생성 횟수 - 꺾은선
    const dailyData = generateDailyData();
    const dailyCtx = document.getElementById('dailyChart').getContext('2d');
    createLineChart(dailyCtx, dailyData, { label: '일별 생성 횟수' });

    // 3. 월별 배치 아이디 생성 횟수 - 꺾은선
    const monthlyData = generateMonthlyData();
    const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
    createLineChart(monthlyCtx, monthlyData, { label: '월별 생성 횟수' });

    // 4. 성별 배치 아이디 생성 횟수 - 원
    const genderData = generateGenderData();
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    createDoughnutChart(genderCtx, genderData);

    // 5. 분기별 배치 아이디 생성 횟수 - 가로형 막대
    const quarterlyData = generateQuarterlyData();
    const quarterlyCtx = document.getElementById('quarterlyChart').getContext('2d');
    createHorizontalBarChart(quarterlyCtx, quarterlyData, { label: '분기별 생성 횟수' });

    // 6. 매장별 배치 아이디 생성 횟수 - 원(전체 매칭 비율)
    const storeData = generateStoreData();
    const storeCtx = document.getElementById('storeChart').getContext('2d');
    createDoughnutChart(storeCtx, storeData);

    // 7. 피부그룹별 배치 아이디 생성 횟수 - 원 그래프 색상별
    const skinGroupData = generateSkinGroupData();
    const skinGroupCtx = document.getElementById('skinGroupChart').getContext('2d');
    createDoughnutChart(skinGroupCtx, skinGroupData);

    // 8. 연령대별 배치 아이디 생성 횟수 10세 - 세로 막대
    const ageData = generateAgeData();
    const ageCtx = document.getElementById('ageChart').getContext('2d');
    createBarChart(ageCtx, ageData, { label: '연령대별 생성 횟수' });

    // 9. 연령대별 피부타입 수 - 막대 그래프
    const ageSkinData = generateAgeSkinData();
    const ageSkinCtx = document.getElementById('ageSkinChart').getContext('2d');
    createStackedBarChart(ageSkinCtx, ageSkinData, { label: '연령대별 피부타입' });

    // 헤더 통계 업데이트
    updateHeaderStats();
}

// 헤더 통계 업데이트
function updateHeaderStats() {
    const today = Math.floor(Math.random() * 2000) + 1000;
    const week = Math.floor(Math.random() * 10000) + 5000;
    const total = Math.floor(Math.random() * 100000) + 100000;

    document.getElementById('todayCount').textContent = today.toLocaleString();
    document.getElementById('weekCount').textContent = week.toLocaleString();
    document.getElementById('totalCount').textContent = total.toLocaleString();
}

// 실시간 데이터 업데이트 시뮬레이션
function simulateRealTimeUpdates() {
    setInterval(() => {
        updateHeaderStats();
    }, 30000); // 30초마다 업데이트
}

// 페이지 로드 시 대시보드 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    simulateRealTimeUpdates();
    
    // 부드러운 로딩 애니메이션
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 윈도우 리사이즈 시 차트 반응형 조정
window.addEventListener('resize', function() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
});