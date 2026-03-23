# My Site

순수 HTML · CSS · JavaScript로 제작한 반응형 웹사이트입니다.
별도의 프레임워크나 라이브러리 없이 웹의 기본 3대 기술만으로 완성했습니다.

---

## 미리보기

| 섹션 | 설명 |
|------|------|
| **홈** | 히어로 섹션, 인사하기 버튼 |
| **소개** | HTML / CSS / JS 기술 카드 |
| **연락처** | 유효성 검사가 포함된 문의 폼 |

---

## 주요 기능

- **반응형 레이아웃** — 모바일(햄버거 메뉴) / 태블릿 / 데스크탑 대응
- **스크롤 애니메이션** — Intersection Observer 기반 페이드인 효과
- **활성 네비게이션** — 스크롤 위치에 따라 현재 섹션 자동 하이라이트
- **토스트 알림** — `alert()` 없이 커스텀 토스트 메시지로 피드백 제공
- **폼 유효성 검사** — 실시간 오류 표시 및 이메일 정규식 검증
- **로딩 스피너** — 폼 제출 시 버튼 스피너 애니메이션
- **맨 위로 버튼** — 400px 이상 스크롤 시 자동 표시
- **접근성(a11y)** — `aria-label`, `aria-expanded`, `role="alert"` 적용
- **SEO 최적화** — `<meta description>`, `<meta keywords>`, Open Graph 태그 포함

---

## 기술 스택

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

| 기술 | 역할 |
|------|------|
| HTML5 | 시맨틱 마크업, 접근성 구조 |
| CSS3 | CSS 변수, Grid/Flexbox, 애니메이션, 미디어쿼리 |
| Vanilla JS | DOM 조작, Intersection Observer, 이벤트 처리 |

---

## 파일 구조

```
VibeCoding3/
├── index.html    # 메인 HTML (시맨틱 구조, 접근성 속성 포함)
├── style.css     # CSS 변수 기반 스타일, 애니메이션, 반응형
└── script.js     # 토스트, 햄버거 메뉴, 폼 검증, 스크롤 기능
```

---

## 로컬 실행 방법

별도 설치가 필요 없습니다. `index.html` 파일을 브라우저에서 바로 열면 됩니다.

```bash
# VS Code 사용 시
# Live Server 확장으로 바로 실행 가능
```

또는 `index.html` 파일을 더블클릭해 브라우저에서 직접 열어도 됩니다.

---

## CSS 설계 원칙

CSS 변수(`--primary`, `--shadow-md` 등)를 `:root`에 정의해 색상과 스타일을 한 곳에서 관리합니다.

```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
}
```

---

## 브라우저 지원

| 브라우저 | 지원 여부 |
|---------|---------|
| Chrome 80+ | ✅ |
| Firefox 75+ | ✅ |
| Safari 13+ | ✅ |
| Edge 80+ | ✅ |

---

## 라이선스

© 2026 My Site. All rights reserved.
