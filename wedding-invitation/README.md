# 백종혁 & 김하빈 모바일 청첩장

GitHub Pages에 그대로 올릴 수 있는 정적 모바일 청첩장 샘플입니다.

## 파일 구성

```txt
index.html
style.css
script.js
images/
```

## 교체할 항목

- `images/cover.svg`: 메인 커버 사진으로 교체
- `images/gallery-*.svg`: 갤러리 사진으로 교체
- `images/video-thumb.svg`: 웨딩 영상 썸네일로 교체
- `images/share.svg`: 공유 썸네일로 교체
- `index.html`: 실제 계좌번호 입력
- `script.js`: 카카오 JavaScript 키 입력

사진은 WebP 또는 JPG를 추천합니다. 파일명을 그대로 쓰면 HTML 수정 없이 이미지만 교체할 수 있습니다.

## 카카오톡 공유 설정

`script.js`의 아래 값을 실제 Kakao Developers JavaScript 키로 바꾸세요.

```js
const KAKAO_APP_KEY = "YOUR_KAKAO_JAVASCRIPT_KEY";
```

카카오 공유 이미지는 실제 배포 시 SVG보다 JPG 또는 PNG를 권장합니다.

## GitHub Pages 배포

1. GitHub에서 새 repository를 만듭니다.
2. 이 폴더 안의 파일들을 repository 루트에 업로드합니다.
3. `Settings > Pages`로 이동합니다.
4. `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, folder는 `/root`로 선택합니다.
6. 몇 분 뒤 `https://github아이디.github.io/repository이름/` 주소로 접속합니다.

## 현재 포함된 기능

- 모바일 한 페이지 청첩장
- 배경음악 재생/정지
- 웨딩 영상 placeholder
- 갤러리 더보기 및 확대 보기
- 캘린더 저장 링크
- 지도 앱 링크
- 주소 복사
- 계좌번호 복사
- 카카오톡 공유 버튼 fallback
- 청첩장 주소 복사
