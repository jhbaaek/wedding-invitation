# Page Text And Font List

## Loaded Fonts

| Font token | Font family | Main use |
| --- | --- | --- |
| `--font-display` | `"Cormorant Garamond", Georgia, "Times New Roman", serif` | English display text, section labels, large titles |
| `--font-ko` | `"Gowun Batang", "Noto Serif KR", serif` | Korean body text and default page text |
| `--font-ui` | `"Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Buttons, dates, utility text, account/map controls |

## Visible Page Text

| Area | Text | Selector | Font |
| --- | --- | --- | --- |
| Music button | `♪` | `.music-icon` | Inherits button/default |
| Hero title | `JYONGHYEOK & HABEEN` | `h1` inside `.hero` | `--font-display`, weight `300` |
| Hero date | `OCTOBER`, `25`, `2026` | `.hero-date-block` | `--font-ui` |
| Hero venue | `GRACE PARTY`, `12:10 PM` | `.hero-venue` | `--font-ui` |
| Intro label | `Invitation` | `.section-kicker` | `--font-display` |
| Intro heading | `백종혁 그리고 김하빈` | `h2` | `--font-display` |
| Invitation message | `6년 동안 함께한 두 사람이 이제 부부가 되려 합니다. 저희의 소중한 날에 함께하시어 축하해 주시면 감사하겠습니다.` | `.invitation-copy` | `--font-ko` |
| Ceremony date | `2026년 10월 25일 일요일 오후 12시 10분` | `.ceremony-card p` | `--font-ui` |
| Ceremony venue | `그레이스파티` | `.ceremony-card strong` | `--font-ko` |
| Ceremony address | `서울시 관악구 남부순환로 1440 그레이스파티` | `.ceremony-card span` | `--font-ui` |
| Couple labels | `Groom`, `Bride` | `.name-grid span` | `--font-display` |
| Couple Korean names | `백종혁`, `김하빈` | `.name-grid strong` | `--font-ko` |
| Couple English names | `Jyong Hyeok Baek`, `Habeen Kim` | `.name-grid p` | `--font-ko` inherited |
| Parents line | `백승일 · 김효경의 아들 종혁`, `김성현 · 이길희의 딸 하빈` | `.parents-line` | `--font-ko` |
| Parents label | `With Our Families` | `.section-kicker` | `--font-display` |
| Parents heading | `부모님께 감사의 마음을 담아` | `h2` | `--font-display` |
| Parent labels | `Groom's Parents`, `Bride's Parents` | `.parent-card span` | `--font-display` |
| Parent names | `백승일 · 김효경`, `김성현 · 이길희` | `.parent-card strong` | `--font-ko` |
| Video label | `Wedding Film` | `.section-kicker` | `--font-display` |
| Video button | `▶` | `.play-button` | Inherits/default |
| Letter label | `Letter` | `.section-kicker` | `--font-display` |
| Letter heading | `함께 걸어온 시간` | `h2` | `--font-display` |
| Letter copy | `처음 만난 날의 설렘부터 오늘의 약속까지, 우리의 모든 순간이 이 하루로 이어졌습니다. 앞으로도 서로의 가장 다정한 편이 되어 함께 걷겠습니다.` | `.letter-section p` | `--font-ko` |
| Gallery label | `Gallery` | `.section-kicker` | `--font-display` |
| Gallery heading | `우리의 순간들` | `h2` | `--font-display` |
| Gallery button | `더보기` / `접기` | `.text-button` | `--font-ui`, weight `700` |
| Calendar label | `Calendar` | `.section-kicker` | `--font-display` |
| Calendar heading | `2026.10.25 SUN` | `h2` | `--font-display` |
| Calendar time | `오후 12시 10분` | `.time-text` | `--font-ko` inherited |
| Calendar weekdays | `SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT` | `.weekday` | `--font-ko` inherited |
| Calendar dates | `1` through `31` | `.calendar span`, `.calendar strong` | `--font-ko` inherited |
| Calendar button | `캘린더에 저장` | `.pill-button.light` | `--font-ui`, weight `700` |
| Location label | `Location` | `.section-kicker` | `--font-display` |
| Location heading | `오시는 길` | `h2` | `--font-display` |
| Venue name | `그레이스파티` | `.venue-box strong` | `--font-ko` |
| Venue address | `서울시 관악구 남부순환로 1440 그레이스파티` | `.venue-box p` | `--font-ko` |
| Venue English address | `1440, Nambusunhwan-ro, Gwanak-gu, Seoul` | `.en-address` | `--font-ko` inherited |
| Address copy button | `주소 복사` | `.copy-button` | `--font-ui`, weight `700` |
| Map links | `네이버지도`, `카카오맵`, `T맵` | `.map-links a` | `--font-ui`, weight `700` |
| Transport label/copy | `지하철`, `신림역 5번출구 셔틀 버스 5분 간격 운행` | `.info-list strong`, `.info-list p` | `--font-ko` |
| Parking label/copy | `주차`, `별도 주차권 없이 2시간 무료` | `.info-list strong`, `.info-list p` | `--font-ko` |
| Account label | `For Your Heart` | `.section-kicker` | `--font-display` |
| Account heading | `마음 전하실 곳` | `h2` | `--font-display` |
| Account summaries | `신랑 측 계좌번호`, `신부 측 계좌번호` | `summary` | `--font-ko` inherited |
| Account names | `신랑`, `신랑 부`, `신랑 모`, `신부`, `신부 부`, `신부 모` | `.account-row span` | `--font-display` |
| Account placeholders | `계좌번호 입력 예정` | `.account-row p` | `--font-ko` inherited |
| Account copy buttons | `복사` | `.copy-button` | `--font-ui`, weight `700` |
| Share buttons | `카카오톡 공유하기`, `청첩장 주소 복사하기` | `.share-button` | `--font-ui`, weight `700` |
| Footer copy | `소중한 걸음으로 함께해 주셔서 감사합니다.` | `.footer p` | `--font-ko` |
| Footer names | `백종혁 · 김하빈 드림` | `.footer strong` | `--font-ko` |
| Lightbox close | `×` | `.lightbox-close` | Inherits/default |
| Modal close | `×` | `.modal-close` | Inherits/default |
| Video modal title | `Wedding Film Placeholder` | `.fake-video span` | `--font-display` |
| Video modal copy | `실제 영상 링크가 준비되면 이 영역을 YouTube 영상으로 교체합니다.` | `.fake-video p` | `--font-ko` inherited |
| Toast messages | `복사되었습니다.`, `공유를 취소했습니다.`, etc. | `.toast` populated by `script.js` | `--font-ko` inherited |

## Metadata Text

| Area | Text |
| --- | --- |
| Page title | `백종혁 & 김하빈 모바일 청첩장` |
| Meta description | `2026년 10월 25일, 백종혁 김하빈의 결혼식에 초대합니다.` |
| Open Graph title | `백종혁 & 김하빈 결혼합니다` |
| Open Graph description | `2026년 10월 25일 일요일 오후 12시 10분, 그레이스파티` |
