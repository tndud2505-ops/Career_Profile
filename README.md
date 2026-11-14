# Portfolio site

김수영의 공개 포트폴리오 정적 웹사이트입니다. 별도 빌드 도구나 비밀 환경변수 없이 `index.html`, `styles.css`, `script.js`, `data/`, `assets/`, `experience/`, `projects/`만으로 동작합니다.

## 다른 PC에서 바로 시작하기

사전 조건은 Python 3.x 하나입니다. Node.js, npm, React 설치는 필요하지 않습니다.

```bash
git clone https://github.com/tndud2505-ops/Career_Profile.git
cd Career_Profile
python -m http.server 5180 --bind 127.0.0.1
```

브라우저에서 <http://127.0.0.1:5180>을 엽니다.

Windows에서는 `run_local_preview.bat`를 더블클릭해도 됩니다. macOS/Linux에서는 `./run_local_preview.sh`를 실행하세요.

새 PC용 파일 구조와 설정값은 [PROJECT_SETTINGS.md](PROJECT_SETTINGS.md)에 정리했습니다.

## GitHub Pages

`main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 정적 파일을 GitHub Pages로 배포합니다.

- 공개 사이트: <https://tndud2505-ops.github.io/Career_Profile/>
- 저장소: <https://github.com/tndud2505-ops/Career_Profile>
- Pages 설정: Repository Settings → Pages → Source를 `GitHub Actions`로 선택

## 출시한 Android 앱

- [USED PICK — 중고 PC 부품 시세](https://play.google.com/store/apps/details?id=com.usedpick.app): PC 부품 매물 검색과 모델별 시세 비교. [웹 서비스](https://www.used-pick.com/)도 운영합니다.
- [우리여정](https://play.google.com/store/apps/details?id=app.dulharu.couple): 가족과 사진·글·장소를 기록하고 달력과 추억 지도에서 돌아보는 앱입니다. 가족 기록은 초대받은 구성원과만 공유합니다.
- [Train Gallery: 운동 영상 기록](https://play.google.com/store/apps/details?id=com.trainingapp.traingallery): 운동 영상을 달력에 기록하고 브이로그로 편집하는 앱입니다.

## 개발·심사 중인 프로젝트

- [MORI CAM](https://tndud2505-ops.github.io/Career_Profile/projects/mori-cam.html) — **Android 테스트 APK 배포 · Google Play 심사 중**. 컬러·필름 효과와 네컷 사진 저장·공유를 제공하는 카메라 앱입니다. [테스트 APK 받기](https://github.com/tndud2505-ops/MORI-CAM-Downloads/releases/download/v2.1.1-camera-preview/MORI-CAM-2.1.1-release.apk) · [배포 기록](https://github.com/tndud2505-ops/MORI-CAM-Downloads/releases/tag/v2.1.1-camera-preview) · [앱 소개](https://mori-cam.tndud2503.chatgpt.site/). 앱 소스는 비공개입니다.
- [Doll Toss](https://tndud2505-ops.github.io/Career_Profile/projects/doll-toss.html) — **개발 중인 3D 인형뽑기 게임**. 집게 조작, 스테이지와 인형 도감을 개발하고 있습니다.
- [대화 분석](https://tndud2505-ops.github.io/Career_Profile/projects/saigyeol-chat-analysis.html) — **개발 중인 앱**. 카카오톡 TXT의 참여자별 통계·표현 신호·대화 연결과 원문 근거를 보여줍니다.

이 저장소에는 개인 비밀번호, API 키, 계좌 정보, `.env` 파일을 넣지 않습니다. 공개 데이터는 `data/career-public.json`에서 관리합니다.

## Local preview

```powershell
python -m http.server 5180 --bind 127.0.0.1
```

서버를 종료하려면 실행 중인 터미널에서 `Ctrl+C`를 누릅니다.

## Structure

- index.html: 소개, 실무 경력, 대외활동, 개인 프로젝트. 소개 안에 GitHub·이메일 연락처를 둡니다.
- styles.css: light editorial design tokens, responsive layout, accessibility states, divider-led record lists
- script.js: 모바일 메뉴, 현재 구역 표시, 키보드 프로젝트 분류, 화면 맞춤·원본 확대 보기
- data/career-public.json: 사이트에 노출하는 공개 프로필·경력·프로젝트 데이터
- experience/: 회사별 실무 경험 상세 페이지와 공개용 시스템 개념도
- projects/: K Stock, Train Gallery, Jira Obsidian, USED PICK, COTEEPET, EMOTOWN, Virtual MCU, 우리여정, 대화 분석, MORI CAM, Doll Toss의 개인 프로젝트 11개 소개와 기존 회사 업무 상세 자료
- 개인 프로젝트 상세 페이지는 `서비스 소개` → `주요 기능` → `실제 화면` 순서로 구성하며, 개발·배포 단계를 구분합니다.
- assets/: 실제 프로젝트 화면 캡처
- 404.html: 잘못된 주소에서 소개·실무 경력·개인 프로젝트로 돌아가는 안내 페이지

## 콘텐츠 수정

`index.html`은 JavaScript 없이도 경력·프로젝트를 모두 보여줍니다.
`data/career-public.json`을 수정했다면 같은 항목의 HTML도 함께 갱신해야 합니다.
원래 커리어 관리 작업공간에서는 `career_system/scripts/sync_public_homepage.py`로
공개 데이터와 정적 HTML을 함께 생성하고 `--check`로 일치 여부를 확인합니다.
