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

## 개인 프로젝트

### 서비스 중

- [K Stock](https://tndud2505-ops.github.io/Career_Profile/projects/k-stock.html) — **서비스 중 · 웹 서비스**. 국내 주식의 캔들·거래량·이동평균선과 비교 지표를 함께 보는 상세 차트 중심의 시장 탐색 서비스. [공개 링크 ↗](https://kstockclock.com/)
- [Train Gallery](https://tndud2505-ops.github.io/Career_Profile/projects/train-gallery.html) — **서비스 중 · Android · Google Play 출시**. 운동 영상을 날짜별 달력에 기록하고 태그·즐겨찾기로 모아, 구간·자막·스티커를 편집해 선택한 영상으로 브이로그를 만드는 모바일 앱. [공개 링크 ↗](https://play.google.com/store/apps/details?id=com.trainingapp.traingallery)
- [Jira Obsidian](https://tndud2505-ops.github.io/Career_Profile/projects/jira-mini.html) — **서비스 중 · Jira 앱**. Jira Cloud 이슈의 계층과 연결 관계를 시각화하고, 선행·연관·검증 관계를 직접 추가하는 앱. [Marketplace ↗](https://marketplace.atlassian.com/apps/1923219004) · [사용 안내 ↗](https://tndud2505-ops.github.io/jira-obsidian-support/docs.html)
- [USED PICK](https://tndud2505-ops.github.io/Career_Profile/projects/used-market-agent.html) — **서비스 중 · 웹 · Android 출시**. 여러 중고 플랫폼의 PC 부품 매물을 통합 검색하고 모델별 시세·가격 추이·부품 조합 비용을 비교하는 웹·Android 서비스. [공개 링크 ↗](https://www.used-pick.com/) · [Google Play ↗](https://play.google.com/store/apps/details?id=com.usedpick.app)
- [우리여정](https://tndud2505-ops.github.io/Career_Profile/projects/dulharu.html) — **서비스 중 · Android · Google Play 출시**. 가족과 사진·글·장소를 함께 기록하고 달력과 추억 지도에서 다시 찾아보는 Google Play 출시 Android 앱. [공개 링크 ↗](https://play.google.com/store/apps/details?id=app.dulharu.couple)

### 폐기

- [COTEEPET](https://tndud2505-ops.github.io/Career_Profile/projects/coteepet.html) — **폐기 · 웹 카탈로그**. Codex Pet 캐릭터를 검색하고 9가지 동작 미리보기·패키지 업로드·무료 다운로드를 제공하는 웹 카탈로그. [과거 사이트 ↗](https://coteepet.com/)
- [EMOTOWN](https://tndud2505-ops.github.io/Career_Profile/projects/emotown.html) — **폐기 · 웹 갤러리**. 디자인 작업용 이모티콘 세트를 검색·분류하고 무료 다운로드와 제작자 이미지·ZIP 업로드를 제공하는 웹 갤러리. [과거 사이트 ↗](https://emotown.com/)

### 검토 중

- [Virtual MCU Training Environment](https://tndud2505-ops.github.io/Career_Profile/projects/virtual-mcu.html) — **검토 중 · 웹 실습 도구**. C 펌웨어·DC 모터 회로·센서 입력을 연결하고, 레지스터와 학습 문서로 제어 흐름을 익히는 브라우저 실습 서비스. [검토용 화면 ↗](https://virtual-mcu-training-env.pages.dev/) · [검토용 사용 안내 ↗](https://virtual-mcu-training-env.pages.dev/docs/unified-dc-motor-trainer-guide.html)
- [대화 분석](https://tndud2505-ops.github.io/Career_Profile/projects/saigyeol-chat-analysis.html) — **검토 중 · 개발 중 · 앱**. 카카오톡 TXT에서 참여자별 통계·표현 신호·대화 연결과 원문 근거를 보여주는 개발 중인 앱.
- [MORI CAM](https://tndud2505-ops.github.io/Career_Profile/projects/mori-cam.html) — **검토 중 · Android · 테스트 APK · Play 심사 중**. 사진 촬영에 컬러·필름 효과를 적용하고 네컷 사진을 저장·공유하는 Android 카메라 앱. [테스트 APK 배포 기록 ↗](https://github.com/tndud2505-ops/MORI-CAM-Downloads/releases/tag/v2.1.1-camera-preview) · [검토용 테스트 APK ↗](https://github.com/tndud2505-ops/MORI-CAM-Downloads/releases/download/v2.1.1-camera-preview/MORI-CAM-2.1.1-release.apk) · [검토용 화면 ↗](https://mori-cam.tndud2503.chatgpt.site/)
- [Doll Toss](https://tndud2505-ops.github.io/Career_Profile/projects/doll-toss.html) — **검토 중 · 개발 중 · 3D 게임**. 3D 집게를 조작해 인형을 뽑고 스테이지와 인형 도감을 진행하는 개발 중인 인형뽑기 게임.

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
- projects/: K Stock, Train Gallery, Jira Obsidian, USED PICK, 우리여정, COTEEPET, EMOTOWN, Virtual MCU Training Environment, 대화 분석, MORI CAM, Doll Toss의 개인 프로젝트 11개 소개와 기존 회사 업무 상세 자료
- 개인 프로젝트 상세 페이지는 `서비스 소개` → `주요 기능` → `실제 화면` 순서로 구성하며, 개발·배포 단계를 구분합니다.
- assets/: 실제 프로젝트 화면 캡처
- 404.html: 잘못된 주소에서 소개·실무 경력·개인 프로젝트로 돌아가는 안내 페이지

## 콘텐츠 수정

`index.html`은 JavaScript 없이도 경력·프로젝트를 모두 보여줍니다.
`data/career-public.json`을 수정했다면 같은 항목의 HTML도 함께 갱신해야 합니다.
원래 커리어 관리 작업공간에서는 `career_system/scripts/sync_public_homepage.py`로
공개 데이터와 정적 HTML을 함께 생성하고 `--check`로 일치 여부를 확인합니다.
