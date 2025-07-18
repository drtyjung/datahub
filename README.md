# 배치 아이디 생성 대시보드

세련된 디자인의 웹 대시보드로 배치 아이디 생성 데이터를 시각화합니다.

## 🎯 주요 기능

### 📊 차트 유형별 데이터 시각화

1. **시간대별 배치 아이디 생성 횟수** - 꺾은선 그래프
   - 24시간 기준 생성 패턴 분석
   - 피크 시간대 및 낮은 활동 시간대 확인

2. **일자별 배치 아이디 생성 횟수** - 꺾은선 그래프
   - 최근 30일 트렌드 분석
   - 일별 변화 패턴 모니터링

3. **월별 배치 아이디 생성 횟수** - 꺾은선 그래프
   - 연간 월별 트렌드 분석
   - 계절성 및 월별 특성 파악

4. **성별 배치 아이디 생성 횟수** - 도넛 차트
   - 성별 분포 비율 시각화
   - 백분율 표시로 직관적 이해

5. **분기별 배치 아이디 생성 횟수** - 가로형 막대 그래프
   - 분기별 실적 비교
   - 연간 성과 분석

6. **매장별 배치 아이디 생성 횟수** - 도넛 차트
   - 매장별 매칭 비율 분석
   - 지역별 성과 비교

7. **피부그룹별 배치 아이디 생성 횟수** - 도넛 차트
   - 피부타입별 분포 시각화
   - 색상별 구분으로 직관적 표현

8. **연령대별 배치 아이디 생성 횟수** - 세로 막대 그래프
   - 10세 단위 연령대 분포
   - 주요 고객층 파악

9. **연령대별 피부타입 수** - 누적 막대 그래프
   - 연령대와 피부타입 상관관계 분석
   - 다중 데이터 비교

## 🎨 디자인 특징

- **현대적인 UI/UX**: 그라데이션과 그림자 효과를 활용한 세련된 디자인
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **인터랙티브 차트**: 호버 효과와 툴팁으로 상세 정보 제공
- **실시간 업데이트**: 헤더 통계가 30초마다 자동 업데이트
- **부드러운 애니메이션**: 차트 로딩과 호버 효과에 자연스러운 애니메이션

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 현대적인 스타일링 (Flexbox, Grid, 변수 활용)
- **JavaScript (ES6+)**: 동적 기능 구현
- **Chart.js**: 차트 라이브러리
- **Font Awesome**: 아이콘
- **Google Fonts (Inter)**: 웹폰트

## 🚀 사용 방법

### 1. 로컬 환경에서 실행

```bash
# 파일을 다운로드 후 브라우저에서 index.html 열기
open index.html
```

### 2. 웹 서버에서 실행

```bash
# Python 간단 서버 (Python 3)
python -m http.server 8000

# Node.js 서버
npx http-server

# 브라우저에서 http://localhost:8000 접속
```

## 📱 반응형 지원

- **데스크톱** (1200px+): 2열 그리드 레이아웃으로 큰 차트 표시
- **태블릿** (768px~1199px): 1열 그리드로 조정된 레이아웃
- **모바일** (768px 미만): 스택형 레이아웃으로 최적화

## 🎯 주요 특징

### 헤더 통계
- 오늘 생성 수
- 이번 주 생성 수  
- 총 생성 수
- 실시간 업데이트 (30초마다)

### 차트 인터랙션
- 호버시 상세 정보 표시
- 애니메이션 효과
- 백분율 자동 계산 (도넛 차트)
- 반응형 크기 조정

### 시각적 효과
- 그라데이션 배경
- 박스 섀도우
- 호버 애니메이션
- 부드러운 전환 효과

## 🔧 커스터마이징

### 색상 변경
`styles.css`의 `:root` 변수를 수정하여 색상 테마 변경 가능:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

### 데이터 연동
`dashboard.js`의 데이터 생성 함수들을 실제 API 호출로 변경:

```javascript
// 예시: 실제 API 데이터 연동
async function generateHourlyData() {
    const response = await fetch('/api/hourly-data');
    const data = await response.json();
    return data;
}
```

## 📊 데이터 형식

각 차트는 다음과 같은 데이터 형식을 사용합니다:

```javascript
// 꺾은선/막대 차트
{
    labels: ['라벨1', '라벨2', ...],
    data: [값1, 값2, ...]
}

// 도넛 차트
{
    labels: ['라벨1', '라벨2', ...],
    data: [값1, 값2, ...],
    colors: ['#색상1', '#색상2', ...]
}
```

## 🎉 완료!

이제 브라우저에서 `index.html`을 열어 세련된 배치 아이디 생성 대시보드를 확인할 수 있습니다.

모든 차트가 인터랙티브하게 동작하며, 반응형 디자인으로 모든 기기에서 최적화된 경험을 제공합니다.