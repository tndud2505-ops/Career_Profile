# portfolio_site 안내

## 이 폴더의 역할

이 폴더는 김수영 포트폴리오의 실제 정적 웹사이트 소스입니다.

포함 파일:

- `index.html`
- `styles.css`
- `assets/`
- `.nojekyll`
- `run_local_preview.bat`

## 바로 확인하는 방법

### 방법 1. 실행 스크립트 사용

같은 폴더의 `run_local_preview.bat` 실행

### 방법 2. 직접 실행

PowerShell에서:

```powershell
cd C:\DeVelop\Career_Management\final_portfolio_package\portfolio_site
python -m http.server 4280
```

브라우저에서:

```text
http://127.0.0.1:4280
```

## 업로드 용도

이 사이트는 정적 파일 기반이라 아래 서비스에 바로 업로드할 수 있습니다.

- GitHub Pages
- Netlify
- Vercel 정적 배포
- Cloudflare Pages

## 현재 구성 의도

- 이 폴더에는 실제 서비스에 필요한 파일만 남깁니다.
- QA 캡처, 브라우저 프로필, 리뷰 스냅샷은 바깥 `../workspace_artifacts/portfolio_site/`로 분리했습니다.
- 추가 원고와 배포 문서는 바깥 `../docs/`와 `../deliverables/`를 기준으로 봅니다.

## 추후 확장 방향

- 프로젝트 상세 페이지 분리
- 영문 페이지 추가
- 블로그 글과 상호 링크
- 연락처/링크드인/깃허브 연결
