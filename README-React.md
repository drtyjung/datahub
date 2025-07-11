# 배치 아이디 생성 대시보드 - React 버전

React와 Chart.js로 구현된 세련된 디자인의 웹 대시보드로 배치 아이디 생성 데이터를 시각화합니다.

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 브라우저에서 http://localhost:3000 자동 열림
```

## 🎯 주요 기능

### 📊 차트 유형별 데이터 시각화 (3x3 그리드 레이아웃)

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
- **3x3 그리드 레이아웃**: 9개 차트가 정사각형으로 균등 배치
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **컴포넌트 기반**: 재사용 가능한 React 컴포넌트 구조
- **실시간 업데이트**: 헤더 통계가 30초마다 자동 업데이트
- **부드러운 애니메이션**: 차트 로딩과 호버 효과에 자연스러운 애니메이션

## 🛠 기술 스택

- **React 18**: 최신 React 기능 활용
- **Chart.js 4**: 강력한 차트 라이브러리
- **react-chartjs-2**: Chart.js React 래퍼
- **CSS3**: 현대적인 스타일링 (CSS Variables, Flexbox, Grid)
- **Font Awesome**: 아이콘
- **Google Fonts (Inter)**: 웹폰트

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── charts/
│   │   ├── HourlyChart.js      # 시간대별 차트
│   │   ├── DailyChart.js       # 일자별 차트
│   │   ├── MonthlyChart.js     # 월별 차트
│   │   ├── GenderChart.js      # 성별 차트
│   │   ├── QuarterlyChart.js   # 분기별 차트
│   │   ├── StoreChart.js       # 매장별 차트
│   │   ├── SkinGroupChart.js   # 피부그룹별 차트
│   │   ├── AgeChart.js         # 연령대별 차트
│   │   └── AgeSkinChart.js     # 연령대별 피부타입 차트
│   ├── ChartContainer.js       # 재사용 가능한 차트 컨테이너
│   ├── Dashboard.js            # 메인 대시보드
│   ├── Header.js               # 헤더 컴포넌트
│   └── Footer.js               # 푸터 컴포넌트
├── utils/
│   └── chartConfig.js          # Chart.js 설정 및 데이터 생성
├── App.js                      # 메인 App 컴포넌트
├── index.js                    # React 진입점
└── index.css                   # 글로벌 스타일
```

## 🚀 사용 방법

### 개발 환경

```bash
# 프로젝트 클론
git clone [repository-url]
cd batch-dashboard-react

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드된 파일은 build/ 폴더에 생성됨
```

## 📱 반응형 지원

- **데스크톱** (1200px+): 3x3 그리드로 큰 차트 표시
- **태블릿** (768px~1199px): 3x3 그리드 유지, 차트 크기 조정
- **모바일** (768px 미만): 3x3 그리드 유지, 텍스트 크기 최적화

## 🎯 주요 React 특징

### 컴포넌트 기반 아키텍처
- 각 차트가 독립적인 컴포넌트
- 재사용 가능한 `ChartContainer` 컴포넌트
- Props를 통한 데이터 전달

### 실시간 데이터 업데이트
- `useState`와 `useEffect` 훅 사용
- 30초마다 헤더 통계 자동 갱신
- 컴포넌트 언마운트 시 cleanup

### 모듈화된 구조
- 차트 설정과 데이터 생성 로직 분리
- 유틸리티 함수로 코드 재사용성 증대

## 🔧 커스터마이징

### 차트 데이터 변경
`src/utils/chartConfig.js`에서 데이터 생성 함수 수정:

```javascript
export const generateHourlyData = () => {
  // API 호출로 실제 데이터 가져오기
  return fetch('/api/hourly-data')
    .then(response => response.json());
};
```

### 새로운 차트 추가
1. `src/components/charts/` 폴더에 새 차트 컴포넌트 생성
2. `Dashboard.js`에서 import 및 추가
3. CSS 그리드가 자동으로 조정됨

### 스타일 변경
`src/index.css`의 CSS 변수 수정:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... */
}
```

## 📊 차트 라이브러리

### Chart.js 설정
- 반응형 차트
- 커스텀 색상 팔레트
- 인터랙티브 툴팁
- 애니메이션 효과

### react-chartjs-2 사용
- React 컴포넌트로 Chart.js 사용
- Props를 통한 동적 데이터 전달
- React 라이프사이클과 통합

## 🎉 배포 옵션

### Vercel (추천)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# build 폴더를 Netlify에 드래그 앤 드롭
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# package.json에 homepage 추가
npm run build
npm run deploy
```

## 🚀 성능 최적화

- **코드 분할**: React.lazy()로 컴포넌트 지연 로딩 가능
- **메모이제이션**: React.memo()로 불필요한 리렌더링 방지
- **번들 최적화**: Create React App의 Webpack 설정 활용

## 📈 향후 개선 사항

- [ ] TypeScript 적용
- [ ] 테스트 코드 작성
- [ ] 실제 API 연동
- [ ] 다크 모드 지원
- [ ] 차트 내보내기 기능
- [ ] 데이터 필터링 기능

## 🎉 완료!

React 기반의 현대적이고 확장 가능한 대시보드가 완성되었습니다. 컴포넌트 기반 아키텍처로 유지보수가 쉽고, 새로운 기능 추가가 간편합니다!