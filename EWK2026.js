/*
 * EWK 2026 landing page injector for Sixshop
 * Load with defer from the page-specific Design Editor <head>.
 */
(() => {
  'use strict';

  const BOOTSTRAP_KEY = '__EWK2026_LANDING_BOOTSTRAPPED__';
  const TARGET_SELECTORS = Object.freeze({
    wrapper: '#sectionWrapper17371105',
    section: '#section17371105',
    item: '#item50341976',
    mount: '#itemElement50341976'
  });

  const PAGE_HTML = `
<div aria-hidden="true" class="scroll-progress"><span id="scrollBar"></span></div>
<header class="site-header" id="header">
<div class="container header-inner">
<a aria-label="ENCY KOREA 홈" class="brand" href="#top">
<img alt="EWK 2026" class="brand-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" src="https://ik.imagekit.io/smartware/26conference/ewk2026-logo/ency-world-korea-white.png?v=20260810"/>
<span class="brand-fallback">ENCY KOREA</span>
</a>
<nav aria-label="주요 메뉴" class="header-nav" id="nav">
<a href="#top">행사 소개</a>
<a href="#experience">주요 내용</a>
<a href="#speakers">글로벌 연사</a>
<a href="#program">프로그램</a>
<a href="#venue">오시는 길</a>
<a class="mobile-home-link" href="https://www.encycadcam.co.kr/" rel="noopener" target="_blank">공식 홈페이지</a>
</nav>
<div class="header-actions">
<a class="btn btn-ghost btn-sm header-home-btn" href="https://www.encycadcam.co.kr/" rel="noopener" target="_blank">공식 홈페이지</a>
<a class="btn btn-primary btn-sm" href="#registration">참가 신청하기 </a>
</div>
<button aria-expanded="false" aria-label="메뉴 열기" class="menu-btn" id="menuBtn" type="button"><span></span></button>
</div>
</header>
<main id="top">
<section class="hero section-dark">
<div aria-hidden="true" class="hero-orbit"></div>
<div class="container hero-grid">
<div class="hero-content">
<h1 class="sr-only">ENCY World 2026: Korean Edition</h1>
<div class="event-title-logo" style="width:min(560px,72vw);min-height:auto;margin:0 auto 26px;">
<img alt="EWK 2026" src="https://ik.imagekit.io/smartware/26conference/ewk2026-logo/ewk2026-wide-white.png" style="width:100%;height:auto;object-fit:contain;"/>
</div>
<p class="hero-copy"><strong>글로벌 CAD/CAM의 다음 기준,</strong><br/>서울에서 공개됩니다</p>
<span class="micro-en">Discover the next standard in CAD/CAM, live in Seoul.</span>
<p class="hero-subcopy">CAD/CAM부터 AI, 턴밀·5축 가공, 제조 자동화까지.<br/>ENCY KOREA와 ENCY Software가 제조 프로그래밍의 다음 변화를 실제 데모와 인사이트로 보여드립니다.</p>
<div class="hero-actions">
<a class="btn btn-primary" href="#registration">참가 신청하기 </a>
<a class="btn btn-ghost" href="#program">프로그램 확인하기</a>
</div>
<p class="hero-note">참가비 무료 · 신청 접수 후 참석 확정 메일 및 확인 연락 예정</p>
</div>
</div>
</section>
<section class="section section-paper recap-single-row" id="recap">
<div class="container recap-layout">
<div class="recap-copy">
<h2 class="recap-title section-title small">키프로스에서 확인한 변화, 이제 서울에서 이어집니다</h2>
<span class="micro-en">The global ENCY community continues its conversation in Seoul.</span>
<p class="recap-intro recap-intro-one-line">ENCY Software 본사 행사에서 공유된 기술과 글로벌 제조 프로그래밍의 흐름을 EWK 2026에서 한국 제조업 관계자들과 함께 이어갑니다.</p>
<a class="btn btn-dark" href="https://www.encycadcam.co.kr/blog?blogFilter=131158" rel="noopener" target="_blank">현장 후기 모아보기 </a>
</div>
<div class="recap-cards">
<a class="recap-card" href="https://www.encycadcam.co.kr/blogPost/26conference_01" rel="noopener" target="_blank">
<div aria-label="ENCY World Conference Cyprus 현장 후기 이미지 1" class="recap-media" style="background-image:linear-gradient(to top, rgba(8,11,16,.96) 0%, rgba(8,11,16,.54) 38%, rgba(8,11,16,.06) 78%),url('https://ik.imagekit.io/smartware/26conference/ewk2026-landing/cyprus_recap_01.jpg');background-size:cover;background-position:center;"></div>
<div class="recap-body"><span class="recap-index">RECAP 01</span><h3>글로벌 ENCY 커뮤니티가 한자리에 모인 이유</h3><span class="text-link">현장 후기 보기</span></div>
</a>
<a class="recap-card" href="https://www.encycadcam.co.kr/blogPost/26conference_02" rel="noopener" target="_blank">
<div aria-label="ENCY World Conference Cyprus 현장 후기 이미지 2" class="recap-media" style="background-image:linear-gradient(to top, rgba(8,11,16,.96) 0%, rgba(8,11,16,.54) 38%, rgba(8,11,16,.06) 78%),url('https://ik.imagekit.io/smartware/26conference/ewk2026-landing/cyprus_recap_02.jpg');background-size:cover;background-position:center;"></div>
<div class="recap-body"><span class="recap-index">RECAP 02</span><h3>ENCY 3.0 공개와 글로벌 CAD/CAM 발표 현장</h3><span class="text-link">현장 후기 보기</span></div>
</a>
<a class="recap-card" href="https://www.encycadcam.co.kr/blogPost/26conference_03" rel="noopener" target="_blank">
<div aria-label="ENCY World Conference Cyprus 현장 후기 이미지 3" class="recap-media" style="background-image:linear-gradient(to top, rgba(8,11,16,.96) 0%, rgba(8,11,16,.54) 38%, rgba(8,11,16,.06) 78%),url('https://ik.imagekit.io/smartware/26conference/ewk2026-landing/cyprus_recap_03.jpg');background-size:cover;background-position:center;"></div>
<div class="recap-body"><span class="recap-index">RECAP 03</span><h3>실전 트레이닝과 글로벌 네트워킹의 기록</h3><span class="text-link">현장 후기 보기</span></div>
</a>
</div>
</div>
</section>
<section class="section section-soft" id="experience">
<div class="container">
<div class="experience-head">
<div><h2 class="section-title small">EWK 2026에서<br/>직접 확인할 수 있는 것</h2><span class="micro-en">Technology, demonstrations and ideas that move manufacturing forward.</span></div>
<a class="btn btn-primary" href="#registration">참가 신청하기 </a>
</div>
<div class="experience-grid">
<article class="experience-card"><span class="exp-no">01 · ENCY 3.0</span><h3>글로벌 ENCY Software가 제시하는 새로운 기술 방향</h3><p>ENCY 3.0의 주요 변화와 제조 프로그래밍이 향하는 다음 흐름을 글로벌 키노트를 통해 확인합니다.</p><div class="exp-graphic"></div></article>
<article class="experience-card"><span class="exp-no">02 · TURN-MILL &amp; 5-AXIS</span><h3>턴밀과 5축 가공 프로그래밍 데모</h3><p>복합가공과 5축 가공을 위한 ENCY CAM의 프로그래밍 흐름을 실제 화면으로 확인합니다.</p><div class="exp-graphic"></div></article>
<article class="experience-card"><span class="exp-no">03 · DESIGN TO CAM</span><h3>Autodesk Fusion 설계부터 ENCY CAM까지</h3><p>Autodesk Fusion 설계 데이터가 ENCY CAM 프로그래밍과 가공 준비로 연결되는 과정을 보여드립니다.</p><div class="exp-graphic"></div></article>
<article class="experience-card"><span class="exp-no">04 · AUTOMATION</span><h3>ENCY Hyper와 제조 자동화 기술</h3><p>로봇 자동화 시스템의 실제 구현을 위한 로봇 시뮬레이션 및 실시간 제어 소프트웨어를 소개합니다.</p><div class="exp-graphic"></div></article>
<article class="experience-card"><span class="exp-no">05 · YC SOLUTION SHOWCASE</span><h3 class="yc-solution-title">제조 현장을 확장하는 YC 솔루션 소개</h3><p>CAM 공정을 넘어 스마트팩토리 구축을 위한 에너지관리 솔루션(FEMS), 생산관리 솔루션(MES) 및 안전 관리 솔루션을 선보입니다.</p><div class="exp-graphic"></div></article>
</div>
</div>
</section>
<section class="section section-paper speakers-centered" id="speakers">
<div class="container">
<div class="speakers-head">
<div><h2 class="section-title small speaker-main-title">ENCY Software 리더십이<br/>서울에서 전하는 글로벌 인사이트</h2><span class="micro-en">Meet the leaders shaping the future of ENCY Software.</span></div>
<p class="speakers-note">ENCY Software CEO와 Channel Sales Director가 모두 현장에 참석합니다.</p>
</div>
<div class="speakers-grid"><article class="speaker-card primary-speaker"><span class="speaker-badge">FEATURED LEADER</span><div class="speaker-media" style="background-image:linear-gradient(to top, rgba(5,8,12,.68), rgba(5,8,12,.05) 58%),url('https://ik.imagekit.io/smartware/26conference/ewk2026-landing/speaker_andrei_kharatsidi.jpg');background-size:cover;background-position:center top;"></div><div class="speaker-info"><span class="speaker-role">CEO · ENCY SOFTWARE</span><h3 class="speaker-name">Andrei<br/>Kharatsidi</h3><p class="speaker-title">ENCY Software CEO</p></div></article><article class="speaker-card"><div class="speaker-media" style="background-image:linear-gradient(to top, rgba(5,8,12,.68), rgba(5,8,12,.05) 58%),url('https://ik.imagekit.io/smartware/26conference/ewk2026-landing/speaker_andrew_lovygin.jpg?v=20260805');background-size:cover;background-position:center top;"></div><div class="speaker-info"><span class="speaker-role">CHANNEL SALES DIRECTOR · ENCY SOFTWARE</span><h3 class="speaker-name">Andrew<br/>Lovygin</h3><p class="speaker-title">Channel Sales Director, ENCY Software</p></div></article><article class="speaker-card host-speaker"><span class="speaker-badge">HOST</span><div class="speaker-media" style="background-image:linear-gradient(to top, rgba(5,8,12,.68), rgba(5,8,12,.05) 58%),url('https://ik.imagekit.io/smartware/26conference/ewk2026-landing/speaker_kim_yoocheon%20(2).jpg?v=20260812');background-size:cover;background-position:center top;"></div><div class="speaker-info"><span class="speaker-role">HOST · YC CORPORATION</span><h3 class="speaker-name">Yoochun<br/>Kim</h3><p class="speaker-title">CEO, YC Corporation</p></div></article></div>
</div>
</section>
<section class="section section-dark program-centered" id="program">
<div class="container">
<div><h2 class="section-title small">EWK 2026 일정</h2></div>
<div class="agenda-columns"><div class="agenda-panel"><div class="agenda-panel-head">SESSION 01 · 12:30-15:10</div><div class="agenda-wrap"><div class="agenda-row"><time class="agenda-time">12:30-13:00</time><div class="agenda-title">참가자 등록<span class="agenda-en">Registration</span></div><span class="agenda-type">Welcome</span></div><div class="agenda-row"><time class="agenda-time">13:00-13:20</time><div class="agenda-title">환영사 및 YC 소개<span class="agenda-en">Welcome &amp; YC Introduction</span></div><span class="agenda-type">Opening</span></div><div class="agenda-row"><time class="agenda-time">13:20-13:40</time><div class="agenda-title">축하 행사<span class="agenda-en">Celebration Performance</span></div><span class="agenda-type">Special</span></div><div class="agenda-row"><time class="agenda-time">13:40-14:10</time><div class="agenda-title">ENCY CAM 프로그램 개요 및 적용 분야<span class="agenda-en">ENCY CAM Overview &amp; Applications</span></div><span class="agenda-type">Session</span></div><div class="agenda-row"><time class="agenda-time">14:10-14:40</time><div class="agenda-title">ENCY CAM 턴밀 및 5축 가공 데모<span class="agenda-en">Turn-Mill &amp; 5-Axis Demonstration</span></div><span class="agenda-type">Demo</span></div><div class="agenda-row"><time class="agenda-time">14:40-15:00</time><div class="agenda-title">Autodesk Fusion 설계 + ENCY CAM 데모<span class="agenda-en">Autodesk Fusion to ENCY CAM</span></div><span class="agenda-type">Demo</span></div><div class="agenda-row"><time class="agenda-time">15:00-15:10</time><div class="agenda-title">Coffee Break<span class="agenda-en">Refreshment Break</span></div><span class="agenda-type">Break</span></div></div></div><div class="agenda-panel"><div class="agenda-panel-head">SESSION 02 · 15:10-20:00</div><div class="agenda-wrap"><div class="agenda-row"><time class="agenda-time">15:10-15:30</time><div class="agenda-title">ENCY Hyper 데모<span class="agenda-en">ENCY Hyper Demonstration</span></div><span class="agenda-type">Demo</span></div><div class="agenda-row"><time class="agenda-time">15:30-16:15</time><div class="agenda-title">YC 솔루션 소개<span class="agenda-en">YC Solution Showcase</span></div><span class="agenda-type">Showcase</span></div><div class="agenda-row"><time class="agenda-time">16:15-16:35</time><div class="agenda-title">ENCY 도입 및 활용 사례<span class="agenda-en">ENCY Customer Use Cases</span></div><span class="agenda-type">Case Study</span></div><div class="agenda-row"><time class="agenda-time">16:35-16:50</time><div class="agenda-title">Coffee Break<span class="agenda-en">Refreshment Break</span></div><span class="agenda-type">Break</span></div><div class="agenda-row keynote"><time class="agenda-time">16:50-17:20</time><div class="agenda-title">ENCY 3.0 Global Launch Keynote<span class="agenda-en">ENCY Software Global Leadership</span></div><span class="agenda-type">Keynote</span></div><div class="agenda-row"><time class="agenda-time">17:20-17:30</time><div class="agenda-title">YC 파트너 정책 소개<span class="agenda-en">YC Partner Program</span></div><span class="agenda-type">Partner</span></div><div class="agenda-row"><time class="agenda-time">17:30-18:00</time><div class="agenda-title">파트너 세레머니, 우수 고객사 시상 및 럭키드로우<span class="agenda-en">Ceremony, Awards &amp; Lucky Draw</span></div><span class="agenda-type">Closing</span></div><div class="agenda-row"><time class="agenda-time">18:00-20:00</time><div class="agenda-title">네트워킹 리셉션 및 디너<span class="agenda-en">Networking Reception &amp; Dinner</span></div><span class="agenda-type">Networking</span></div></div></div></div>
<p class="hero-note">프로그램과 세부 운영 시간은 행사 준비 상황에 따라 일부 변경될 수 있습니다.</p>
</div>
</section>
<section class="section section-paper poster-section" id="poster">
<div class="container">
<div class="poster-head">
<div class="poster-head-copy"><h2 class="section-title small">EWK 2026 공식 포스터</h2><p class="poster-intro">행사 주요 정보와 전체 프로그램을 공식 포스터에서 확인하세요.</p></div>
</div>
<div aria-label="EWK 2026 공식 포스터" class="poster-gallery">
<figure class="poster-card"><img alt="EWK 2026 공식 포스터 메인 비주얼" loading="lazy" src="https://ik.imagekit.io/smartware/26conference/ewk2026-landing/ewk2026-poster-01.jpg"/></figure>
<figure class="poster-card"><img alt="EWK 2026 공식 포스터 행사 일정" loading="lazy" src="https://ik.imagekit.io/smartware/26conference/ewk2026-landing/ewk2026-poster-02.jpg"/></figure>
</div>
<p aria-hidden="true" class="poster-swipe-hint">옆으로 넘겨 확인하세요 <span>→</span></p>
<div class="poster-download-wrap"><a class="btn btn-dark poster-download" href="https://drive.google.com/file/d/1OXlbHOwe2LM6Z7J1F_E-fkbGS4HM8BzW/view?usp=sharing" rel="noopener noreferrer" target="_blank">공식 포스터 PDF 다운로드 <span class="arrow">↗</span></a></div>
</div>
</section>
<section class="section section-paper alt" id="media">
<div class="container">
<div class="media-head">
<div class="media-head-copy"><h2 class="section-title small media-title-one-line">화면 속 프로그래밍이 실제 제조로 이어지는 순간</h2><p class="media-intro">툴패스 생성부터 시뮬레이션, 실제 가공까지 이어지는 ENCY CAM의 워크플로우를 영상으로 확인하세요.</p></div>
<div class="slider-controls"><button aria-label="이전 슬라이드" class="slider-btn" id="prevSlide" type="button">←</button><button aria-label="다음 슬라이드" class="slider-btn" id="nextSlide" type="button">→</button></div>
</div>
<div class="media-slider">
<div class="media-track" id="mediaTrack"><article class="media-slide selected-video"><div aria-label="영상을 재생하거나 YouTube에서 보기" class="media-placeholder youtube-slot video-poster" data-youtube-key="ency30" data-youtube-url="https://youtu.be/AJGlyKU4W-0?si=avYqMFWFWF1zdOok" role="button" style="background-image:linear-gradient(to top, rgba(7,10,15,.68), rgba(7,10,15,.04) 58%),url('https://i.ytimg.com/vi/AJGlyKU4W-0/hqdefault.jpg');background-size:cover;background-position:center;" tabindex="0"><span class="media-video-tag">ENCY 3.0</span><div class="video-preview-notice">실제 Sixshop 페이지에서는 이 자리에서 영상이 재생됩니다.</div></div><div class="media-caption"><h3>ENCY 3.0 업데이트 미리보기</h3><p>완전히 새로워진 ENCY 3.0의 주요 변화와 CAM 프로그래밍 업데이트를 먼저 확인하세요.</p></div></article><article class="media-slide selected-video"><div aria-label="영상을 재생하거나 YouTube에서 보기" class="media-placeholder youtube-slot video-poster" data-youtube-key="realMachining" data-youtube-url="https://youtu.be/Xyb347q08H0" role="button" style="background-image:linear-gradient(to top, rgba(7,10,15,.68), rgba(7,10,15,.04) 58%),url('https://i.ytimg.com/vi/Xyb347q08H0/hqdefault.jpg');background-size:cover;background-position:center;" tabindex="0"><span class="media-video-tag">실가공 워크플로우</span><div class="video-preview-notice">실제 Sixshop 페이지에서는 이 자리에서 영상이 재생됩니다.</div></div><div class="media-caption"><h3>[ENCY 실가공] 툴패스 생성부터 시뮬레이션, 실가공까지!</h3><p>툴패스 생성과 공정 검증, 시뮬레이션을 거쳐 실제 가공으로 이어지는 전체 흐름을 확인합니다.</p></div></article><article class="media-slide selected-video"><div aria-label="영상을 재생하거나 YouTube에서 보기" class="media-placeholder youtube-slot video-poster" data-youtube-key="routerWorkflow" data-youtube-url="https://youtu.be/nJkxhyKJVCk" role="button" style="background-image:linear-gradient(to top, rgba(7,10,15,.68), rgba(7,10,15,.04) 58%),url('https://i.ytimg.com/vi/nJkxhyKJVCk/hqdefault.jpg');background-size:cover;background-position:center;" tabindex="0"><span class="media-video-tag">CAM - 시뮬레이션 - 실가공</span><div class="video-preview-notice">실제 Sixshop 페이지에서는 이 자리에서 영상이 재생됩니다.</div></div><div class="media-caption"><h3>ENCY x 조각기 CAM/시뮬레이션부터 실가공까지 한눈에!</h3><p>조각기 가공 사례를 통해 CAM 설정과 시뮬레이션이 실제 장비 구동으로 연결되는 과정을 보여드립니다.</p></div></article><article class="media-slide selected-video"><div aria-label="영상을 재생하거나 YouTube에서 보기" class="media-placeholder youtube-slot video-poster" data-youtube-key="drawingToMachining" data-youtube-url="https://youtu.be/Uozi8b0Lr90" role="button" style="background-image:linear-gradient(to top, rgba(7,10,15,.68), rgba(7,10,15,.04) 58%),url('https://i.ytimg.com/vi/Uozi8b0Lr90/hqdefault.jpg');background-size:cover;background-position:center;" tabindex="0"><span class="media-video-tag">2D 도면 - 가공 데이터</span><div class="video-preview-notice">실제 Sixshop 페이지에서는 이 자리에서 영상이 재생됩니다.</div></div><div class="media-caption"><h3>2D도면에서 가공까지, ENCY CAM 실무 워크플로우</h3><p>2D 도면을 불러와 가공 전략을 설정하고 실제 가공 데이터를 준비하는 실무 과정을 확인합니다.</p></div></article></div>
</div>
</div>
</section>
<section class="section section-soft" id="attend">
<div class="container attend-grid">
<div><h2 class="section-title small">이런 분들에게<br/>추천합니다</h2><span class="micro-en">For manufacturing professionals ready to explore what comes next.</span><p class="section-desc">단순한 정보 탐색을 넘어, 실제 제조 프로세스와 기술 도입 방향을 확인하고 싶은 실무자를 위한 행사입니다.</p><a class="btn btn-primary" href="#registration">참가 신청하기 </a></div>
<div class="attend-list">
<div class="attend-item"><b>01</b><p>CNC·MCT 가공과 CAM 프로그래밍을 담당하는 실무자</p></div>
<div class="attend-item"><b>02</b><p>턴밀·복합가공 또는 5축 가공 도입을 검토하는 기업</p></div>
<div class="attend-item"><b>03</b><p>CAD/CAM 업무 효율화와 제조 자동화를 고민하는 생산기술 담당자</p></div>
<div class="attend-item"><b>04</b><p>공작기계와 소프트웨어의 실제 연결 과정을 확인하고 싶은 엔지니어</p></div>
<div class="attend-item"><b>05</b><p>ENCY Software의 기술 및 국내 사업 방향에 관심 있는 고객과 파트너</p></div>
</div>
</div>
</section>
<section class="section section-paper venue-centered" id="venue">
<div class="container">
<div><h2 class="section-title small">서울, 제조 기술의 다음 변화가 시작되는 곳</h2><span class="micro-en">Meet us at YC College, just three minutes from Wangsimni Station.</span></div>
<div class="venue-grid">
<article class="venue-card info">
<div><h3 class="venue-name-stacked"><span>YC</span><span>College</span></h3></div>
<div class="venue-details"><span class="route-pill">왕십리역 도보 3분</span><p><strong>서울특별시 성동구 마조로3길 10</strong><br/>YC College</p><p><strong>2026년 10월 29일 목요일</strong><br/>참가자 등록 12:30 · 본 행사 13:00-20:00</p><a class="text-link" href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EB%A7%88%EC%A1%B0%EB%A1%9C3%EA%B8%B8%2010" rel="noopener" target="_blank">지도에서 위치 확인하기 </a></div>
</article>
<article class="venue-card map embedded-map-card"><iframe allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EB%A7%88%EC%A1%B0%EB%A1%9C3%EA%B8%B8%2010%2C%20YC%20College&amp;z=17&amp;output=embed" style="border:0;" title="YC College 위치 지도"></iframe><div class="map-actions"><a href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EB%A7%88%EC%A1%B0%EB%A1%9C3%EA%B8%B8%2010" rel="noopener" target="_blank">네이버 지도</a><a href="https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%84%B1%EB%8F%99%EA%B5%AC%20%EB%A7%88%EC%A1%B0%EB%A1%9C3%EA%B8%B8%2010%2C%20YC%20College" rel="noopener" target="_blank">카카오맵</a></div></article>
</div>
</div>
</section>
<section class="cta-band">
<div class="container cta-inner">
<div><h2>제조 프로그래밍의 다음 변화를<br/>직접 확인하세요</h2><p class="en">JOIN EWK 2026 IN SEOUL · OCTOBER 29</p></div>
<a class="btn" href="#registration">참가 신청하기 </a>
</div>
</section>
<section class="section section-paper alt form-section" id="registration">
<div class="container">
<div class="form-head">
<div><h2 class="section-title small">EWK 2026<br/>참가 신청</h2><span class="micro-en">Complete the form below to request attendance.</span></div>
</div>
<form class="reg-form" id="registrationForm" novalidate="">
<section class="form-card">
<div class="form-card-title"><span class="form-step">01</span><h3>기본 정보</h3></div>
<div class="field-grid">
<div class="field"><label for="name">이름 <span class="required">*</span></label><input autocomplete="name" id="name" name="name" placeholder="홍길동" required="" type="text"/></div>
<div class="field"><label for="company">회사명 <span class="required">*</span></label><input autocomplete="organization" id="company" name="company" placeholder="회사명을 입력해 주세요" required="" type="text"/></div>
<div class="field"><label for="email">이메일 <span class="required">*</span></label><input autocomplete="email" id="email" name="email" placeholder="name@company.com" required="" type="email"/></div>
<div class="field"><label for="phone">휴대전화 <span class="required">*</span></label><input autocomplete="tel" id="phone" name="phone" placeholder="010-0000-0000" required="" type="tel"/></div>
<div class="field full"><label for="job">직무·부서 <span class="required">*</span></label><input id="job" name="job" placeholder="예: 생산기술팀 과장" required="" type="text"/></div>
</div>
</section>
<section class="form-card">
<div class="form-card-title"><span class="form-step">02</span><h3>관심 분야와 참석 목적</h3></div>
<div class="field-grid">
<fieldset class="field full" data-required-group="interest"><legend>관심 분야 <span class="required">*</span></legend><div class="choice-grid">
<div class="choice"><input id="int1" name="interest" type="checkbox" value="CNC·MCT 가공"/><label for="int1">CNC·MCT 가공</label></div><div class="choice"><input id="int2" name="interest" type="checkbox" value="CAM 자동화·AI"/><label for="int2">CAM 자동화·AI</label></div><div class="choice"><input id="int3" name="interest" type="checkbox" value="5축 가공"/><label for="int3">5축 가공</label></div><div class="choice"><input id="int4" name="interest" type="checkbox" value="로봇 OLP"/><label for="int4">로봇 OLP</label></div><div class="choice"><input id="int5" name="interest" type="checkbox" value="턴밀·복합가공"/><label for="int5">턴밀·복합가공</label></div><div class="choice"><input id="int6" name="interest" type="checkbox" value="디지털 트윈·시뮬레이션"/><label for="int6">디지털 트윈·시뮬레이션</label></div><div class="choice"><input id="int7" name="interest" type="checkbox" value="ENCY 3.0"/><label for="int7">ENCY 3.0</label></div><div class="choice"><input id="int8" name="interest" type="checkbox" value="기타"/><label for="int8">기타</label></div>
</div></fieldset>
<fieldset class="field full" data-required-group="purpose"><legend>참석 목적 <span class="required">*</span></legend><div class="choice-grid">
<div class="choice"><input id="pur1" name="purpose" type="checkbox" value="공장자동화 도입·검토"/><label for="pur1">공장자동화 도입·검토</label></div><div class="choice"><input id="pur2" name="purpose" type="checkbox" value="로봇 자동화 도입·검토"/><label for="pur2">로봇 자동화 도입·검토</label></div><div class="choice"><input id="pur3" name="purpose" type="checkbox" value="에너지관리 솔루션 검토"/><label for="pur3">에너지관리 솔루션 검토</label></div><div class="choice"><input id="pur4" name="purpose" type="checkbox" value="CAD/CAM 소프트웨어 검토·교체"/><label for="pur4">CAD/CAM 소프트웨어 검토·교체</label></div><div class="choice"><input id="pur5" name="purpose" type="checkbox" value="최신 기술 동향 파악"/><label for="pur5">최신 기술 동향 파악</label></div><div class="choice"><input id="pur6" name="purpose" type="checkbox" value="신규 파트너·공급사 발굴"/><label for="pur6">신규 파트너·공급사 발굴</label></div><div class="choice"><input id="pur7" name="purpose" type="checkbox" value="네트워킹"/><label for="pur7">네트워킹</label></div><div class="choice"><input id="pur8" name="purpose" type="checkbox" value="기타"/><label for="pur8">기타</label></div>
</div></fieldset>
</div>
</section>
<section class="form-card">
<div class="form-card-title"><span class="form-step">03</span><h3>현재 보유 환경</h3></div>
<div class="field-grid">
<fieldset class="field full"><legend>현재 사용 중인 소프트웨어 <small>(선택)</small></legend><div class="choice-grid">
<div class="choice"><input id="soft1" name="software" type="checkbox" value="CAD/CAM"/><label for="soft1">CAD/CAM</label></div><div class="choice"><input id="soft2" name="software" type="checkbox" value="PLC·제어 소프트웨어"/><label for="soft2">PLC·제어 소프트웨어</label></div><div class="choice"><input id="soft3" name="software" type="checkbox" value="MES·ERP"/><label for="soft3">MES·ERP</label></div><div class="choice"><input id="soft4" name="software" type="checkbox" value="로봇 OLP"/><label for="soft4">로봇 OLP</label></div><div class="choice"><input id="soft5" name="software" type="checkbox" value="에너지관리시스템"/><label for="soft5">에너지관리시스템</label></div><div class="choice"><input id="soft6" name="software" type="checkbox" value="시뮬레이션·디지털 트윈"/><label for="soft6">시뮬레이션·디지털 트윈</label></div><div class="choice"><input id="soft7" name="software" type="checkbox" value="사용 중인 소프트웨어 없음"/><label for="soft7">사용 중인 소프트웨어 없음</label></div><div class="choice"><input id="soft8" name="software" type="checkbox" value="기타"/><label for="soft8">기타</label></div>
</div></fieldset>
<fieldset class="field full"><legend>현재 사용 중인 하드웨어 <small>(선택)</small></legend><div class="choice-grid">
<div class="choice"><input id="hard1" name="hardware" type="checkbox" value="CNC 공작기계"/><label for="hard1">CNC 공작기계</label></div><div class="choice"><input id="hard2" name="hardware" type="checkbox" value="산업용 로봇팔"/><label for="hard2">산업용 로봇팔</label></div><div class="choice"><input id="hard3" name="hardware" type="checkbox" value="레이저 가공기"/><label for="hard3">레이저 가공기</label></div><div class="choice"><input id="hard4" name="hardware" type="checkbox" value="3D 프린터"/><label for="hard4">3D 프린터</label></div><div class="choice"><input id="hard5" name="hardware" type="checkbox" value="협동로봇"/><label for="hard5">협동로봇</label></div><div class="choice"><input id="hard6" name="hardware" type="checkbox" value="센서·IoT"/><label for="hard6">센서·IoT 장비</label></div><div class="choice"><input id="hard7" name="hardware" type="checkbox" value="보유 장비 없음"/><label for="hard7">보유 장비 없음</label></div><div class="choice"><input id="hard8" name="hardware" type="checkbox" value="기타"/><label for="hard8">기타</label></div>
</div></fieldset>
<div class="field"><label for="consulting">기술 상담 희망 여부</label><select id="consulting" name="consulting"><option value="">선택해 주세요</option><option>예, 1:1 기술 상담을 희망합니다</option><option>아니요, 우선 정보만 받아보겠습니다</option></select></div>
<div class="field"><label for="source">유입 경로</label><select id="source" name="source"><option value="">선택해 주세요</option><option>광고(SNS·검색)</option><option>지인·동료 추천</option><option>YC코퍼레이션(ENCY KOREA) 직원 추천</option><option>파트너사·장비사 소개</option><option>전시회·행사 부스</option><option>ENCY 기존 고객</option><option>기타</option></select></div>
</div>
</section>
<section class="form-card">
<div class="form-card-title"><span class="form-step">04</span><h3>동의 및 안내</h3></div>
<div class="consent"><div class="consent-head"><input id="privacy" name="privacy" required="" type="checkbox"/><label for="privacy">[필수] 개인정보 수집 및 이용에 동의합니다.</label><button data-consent-toggle="" type="button">전문 보기</button></div><div class="consent-detail">수집·이용 주체: 주식회사 와이씨코퍼레이션
수집·이용 목적: EWK 2026 참가 신청 접수, 본인 확인, 참석 여부 확인, 행사 운영 및 안내, 참가 확정 메일·문자·전화 안내, 행사 관련 자료 발송
수집 항목: 이름, 회사명, 이메일, 휴대전화, 직무·부서, 관심 분야, 참석 목적, 사용 중인 소프트웨어 및 하드웨어, 기술 상담 희망 여부, 유입 경로
보유·이용 기간: 행사 종료 후 1년
동의 거부 권리 및 불이익: 동의를 거부할 수 있으나, 필수 정보 수집에 동의하지 않는 경우 참가 신청이 제한됩니다.</div></div>
<div class="consent"><div class="consent-head"><input id="marketing" name="marketing" type="checkbox"/><label for="marketing">[선택] ENCY KOREA의 제품·교육·행사·프로모션 및 관련 자료 수신에 동의합니다.</label><button data-consent-toggle="" type="button">전문 보기</button></div><div class="consent-detail">수집·이용 목적: ENCY KOREA 제품, 교육, 행사, 프로모션 및 후속 콘텐츠 안내
활용 항목: 이름, 회사명, 이메일, 휴대전화, 관심 분야
보유·이용 기간: 동의 철회 시 또는 수집일로부터 2년
선택 동의에 동의하지 않아도 EWK 2026 참가 신청은 가능합니다.</div></div>
<p class="form-info-note">※ 행사 현장에서는 기록 및 홍보를 위한 사진·영상 촬영이 진행됩니다. 동반 참석자를 포함한 모든 참석자는 1인 1건으로 개별 신청해 주세요.</p></section>
<div class="submit-row">
<p class="submit-note registration-note-one-line">참가 신청은 참석 확정을 의미하지 않습니다. <strong>운영팀 확인 후 참석 확정 안내를 받은 분에 한해 행사에 참가할 수 있습니다.</strong></p>
<button class="btn btn-primary" type="submit">참가 신청 완료하기 </button>
</div>
</form>
</div>
</section>
<section class="section section-paper" id="faq">
<div class="container faq-layout">
<div><h2 class="section-title small">자주 묻는 질문</h2><span class="micro-en">Frequently asked questions about EWK 2026.</span></div>
<div class="faq-list">
<div class="faq-item open"><button class="faq-question" type="button"><span>참가 신청만 하면 바로 참석할 수 있나요?</span><span class="faq-icon">+</span></button><div class="faq-answer"><p>아니요. 참가 신청 접수 후 운영팀에서 신청 내용을 확인하며, 참석 확정 안내를 받은 분에 한해 행사에 참가할 수 있습니다. 확정 안내는 입력하신 이메일로 발송되며, 필요한 경우 전화 또는 문자로 참석 여부를 확인합니다.</p></div></div>
<div class="faq-item"><button class="faq-question" type="button"><span>참가비가 있나요?</span><span class="faq-icon">+</span></button><div class="faq-answer"><p>EWK 2026은 무료로 진행됩니다. 사전 신청과 참석 확인이 필요하며, 행사 공간 운영 상황에 따라 신청이 사전에 마감될 수 있습니다.</p></div></div>
<div class="faq-item"><button class="faq-question" type="button"><span>동반 참석자는 함께 입장할 수 있나요?</span><span class="faq-icon">+</span></button><div class="faq-answer"><p>참석을 희망하는 모든 분은 개별 신청이 필요합니다. 동반 참석자를 포함하여 1인 1건으로 각각 신청해 주세요.</p></div></div>
<div class="faq-item"><button class="faq-question" type="button"><span>네트워킹 리셉션과 디너는 누구나 참여할 수 있나요?</span><span class="faq-icon">+</span></button><div class="faq-answer"><p>행사 참석자를 대상으로 진행되며, 운영 준비를 위해 참석 의사를 별도로 확인할 수 있습니다.</p></div></div>
<div class="faq-item"><button class="faq-question" type="button"><span>행사 장소는 어디인가요?</span><span class="faq-icon">+</span></button><div class="faq-answer"><p>서울특별시 성동구 마조로3길 10, YC College에서 진행됩니다. 왕십리역에서 도보 약 3분 거리입니다.</p></div></div>
</div>
</div>
</section>
</main>
<section aria-label="ENCY KOREA 공식 홈페이지" class="official-site-strip">
<div class="container official-site-strip-inner">
<div class="official-site-strip-copy"><strong>ENCY에 대해 더 자세히 알아보세요!</strong></div>
<a class="btn btn-ghost btn-sm" href="https://www.encycadcam.co.kr/" rel="noopener" target="_blank">ENCY KOREA 공식 홈페이지</a>
</div>
</section>
<footer class="site-footer">
<div class="container">
<div class="footer-top">
<div class="footer-brand">EWK 2026</div>
<div class="footer-info">
<div><strong>Event Contact</strong>ENCY KOREA 행사 운영팀<br/>연락처: 010-5750-0670<br/>이메일: ency_korea@naver.com</div>
<div><strong>Company</strong>주식회사 와이씨코퍼레이션<br/>Owner: 김유천<br/>Personal Info Manager: 김유천</div>
<div><strong>Address</strong>서울특별시 성동구 마조로3길 10<br/>YC College<br/>www.encycadcam.co.kr</div>
<div><strong>Business Information</strong>Business Registration Number: 397-87-02413<br/>Business License: 2022-서울성동-02108<br/>yc@ycgroup.co.kr</div>
</div>
</div>
<div class="footer-bottom"><div>© 2026 YC Corporation. All rights reserved.</div></div>
</div>
</footer>
<div class="mobile-cta"><span>2026.10.29 · YC COLLEGE</span><a class="btn btn-primary" href="#registration">참가 신청하기</a></div>
<button aria-label="페이지 상단으로 이동" class="top-button" id="topButton" type="button">TOP</button><div aria-labelledby="modalTitle" aria-modal="true" class="modal" id="successModal" role="dialog">
<div class="modal-card"><div class="modal-check">✓</div><h3 id="modalTitle">참가 신청이 접수되었습니다</h3><p>입력하신 이메일로 접수 완료 안내가 발송됩니다. 운영팀 확인 후 참석 확정 메일 또는 연락을 드릴 예정입니다.</p><div class="modal-actions"><button class="btn btn-primary" id="closeModal" type="button">확인</button><a class="btn btn-ghost" href="https://www.encycadcam.co.kr/blog?blogFilter=131158" rel="noopener" target="_blank">현장 후기 모아보기</a></div></div>
</div>
  `;

  const setMetaContent = (name, content) => {
    if (!content) return;
    let tag = document.head.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  const setPageMetadata = () => {
    document.documentElement.lang = 'ko';
    document.title = 'ENCY World 2026: Korean Edition | EWK 2026';
    setMetaContent('description', 'ENCY World 2026: Korean Edition - 글로벌 CAD/CAM의 다음 기준을 서울에서 확인하세요. 2026년 10월 29일, YC College.');
    setMetaContent('theme-color', '#080b10');
    setMetaContent('referrer', 'strict-origin-when-cross-origin');
  };

  const getTargetElements = () => {
    const wrapper = document.querySelector(TARGET_SELECTORS.wrapper);
    const section = document.querySelector(TARGET_SELECTORS.section);
    const item = document.querySelector(TARGET_SELECTORS.item);
    const mount = document.querySelector(TARGET_SELECTORS.mount);

    if (!wrapper || !section || !item || !mount) return null;
    return { wrapper, section, item, mount };
  };

  const prepareTargetSection = ({ wrapper, section, item, mount }) => {
    wrapper.classList.add('ewk2026-target-wrapper');
    section.classList.add('ewk2026-target-section');
    item.classList.add('ewk2026-target-item');
    mount.classList.add('ewk2026-target-mount');
  };

  const mountLandingPage = () => {
    if (!document.body || window[BOOTSTRAP_KEY]) return false;

    const targets = getTargetElements();
    if (!targets) return false;

    window[BOOTSTRAP_KEY] = true;
    setPageMetadata();
    prepareTargetSection(targets);

    // Sixshop가 블로그 본문 DOM을 다시 렌더링해도 랜딩페이지가 사라지지 않도록
    // 관리 대상인 itemElement 내부가 아니라 body의 직접 자식으로 삽입합니다.
    const app = document.createElement('div');
    app.id = 'ewk2026-app';
    app.setAttribute('data-ewk2026-version', '1.2.0');
    app.innerHTML = PAGE_HTML;
    document.body.appendChild(app);

    // app을 먼저 삽입한 뒤 활성 클래스를 붙여 기존 Sixshop 화면을 한 번에 숨깁니다.
    document.documentElement.classList.add('ewk2026-active');
    document.body.classList.add('ewk2026-active');

    const defaultConfig = {
          eventTitleLogoUrl: "",

          // Make.com Custom Webhook URL을 입력하세요.
          // Make.com에서 받은 Webhook이 monday.com 보드 생성 시나리오로 이어집니다.
          webhookUrl: "https://hook.us2.make.com/cwp59bysn77tg8p8tux3sw7nl2jacaoh",

          youtube: {
            ency30: "https://youtu.be/AJGlyKU4W-0?si=avYqMFWFWF1zdOok",
            realMachining: "https://youtu.be/Xyb347q08H0",
            routerWorkflow: "https://youtu.be/nJkxhyKJVCk",
            drawingToMachining: "https://youtu.be/Uozi8b0Lr90"
          },

          tracking: {
            dataLayerPageViewEvent: "ewk2026_page_view",
            dataLayerFormSubmitEvent: "ewk2026_form_submit",

            // GTM에서 Meta Pixel PageView가 이미 실행된다면 false 유지 권장
            fireDirectMetaPageView: false,

            // 폼 제출 성공 시 Meta Pixel 표준 Lead 이벤트
            fireDirectMetaLead: true
          }
        };

    window.EWK2026_CONFIG = {
      ...defaultConfig,
      ...(window.EWK2026_CONFIG || {}),
      youtube: {
        ...defaultConfig.youtube,
        ...((window.EWK2026_CONFIG || {}).youtube || {})
      },
      tracking: {
        ...defaultConfig.tracking,
        ...((window.EWK2026_CONFIG || {}).tracking || {})
      }
    };

    (() => {
          const header = document.getElementById('header');
          const scrollBar = document.getElementById('scrollBar');
          const menuBtn = document.getElementById('menuBtn');
          const nav = document.getElementById('nav');
          const topButton = document.getElementById('topButton');
          const pageConfig = window.EWK2026_CONFIG || {};

          const trackingConfig = pageConfig.tracking || {};

          const pushDataLayer = (eventName, payload = {}) => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: eventName,
              event_name: eventName,
              event_category: 'EWK 2026',
              ...payload
            });
          };

          const pageTrackingPayload = {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
            event_name_full: 'ENCY World 2026: Korean Edition'
          };

          pushDataLayer(
            trackingConfig.dataLayerPageViewEvent || 'ewk2026_page_view',
            pageTrackingPayload
          );

          if (
            trackingConfig.fireDirectMetaPageView &&
            typeof window.fbq === 'function'
          ) {
            window.fbq('trackCustom', 'EWK2026PageView', pageTrackingPayload);
          }

          const eventTitleLogo = document.getElementById('eventTitleLogo');
          const eventTitleLogoPlaceholder = document.getElementById('eventTitleLogoPlaceholder');
          if (eventTitleLogo && pageConfig.eventTitleLogoUrl) {
            eventTitleLogo.src = pageConfig.eventTitleLogoUrl;
            eventTitleLogo.hidden = false;
            if (eventTitleLogoPlaceholder) eventTitleLogoPlaceholder.hidden = true;
          }

          const getYouTubeId = (value) => {
            if (!value) return '';
            try {
              const url = new URL(value, window.location.href);
              let id = '';
              if (url.hostname.includes('youtu.be')) {
                id = url.pathname.split('/').filter(Boolean)[0] || '';
              }
              if (url.hostname.includes('youtube.com')) {
                id = url.searchParams.get('v') || '';
                if (!id && url.pathname.includes('/embed/')) {
                  id = url.pathname.split('/embed/')[1]?.split('/')[0] || '';
                }
                if (!id && url.pathname.includes('/shorts/')) {
                  id = url.pathname.split('/shorts/')[1]?.split('/')[0] || '';
                }
              }
              return id;
            } catch (_) {
              return '';
            }
          };

          const buildYouTubeEmbedUrl = (value) => {
            const id = getYouTubeId(value);
            if (!id) return '';

            const params = new URLSearchParams({
              rel: '0',
              modestbranding: '1',
              playsinline: '1',
              enablejsapi: '1'
            });

            const hasWebOrigin =
              /^https?:$/.test(window.location.protocol) &&
              window.location.origin &&
              window.location.origin !== 'null';

            if (hasWebOrigin) {
              params.set('origin', window.location.origin);
              params.set('widget_referrer', window.location.href);
            }

            return `https://www.youtube.com/embed/${id}?${params.toString()}`;
          };

          document.querySelectorAll('[data-youtube-key]').forEach(slot => {
            const key = slot.dataset.youtubeKey;
            const watchUrl = pageConfig.youtube?.[key] || slot.dataset.youtubeUrl || '';
            const embedUrl = buildYouTubeEmbedUrl(watchUrl);
            if (!watchUrl || !embedUrl) return;

            const iframe = document.createElement('iframe');
            iframe.src = embedUrl;
            iframe.title = slot.getAttribute('aria-label') || 'EWK 2026 video';
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;

            slot.innerHTML = '';
            slot.dataset.loaded = 'true';
            slot.appendChild(iframe);
          });

          const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 30);
            const max = document.documentElement.scrollHeight - window.innerHeight;
            scrollBar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
            topButton?.classList.toggle('show', window.scrollY > 520);
          };
          window.addEventListener('scroll', onScroll, { passive: true });
          onScroll();
          topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

          menuBtn.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(open));
          });
          nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            nav.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
          }));

          const mediaTrack = document.getElementById('mediaTrack');
          const nextSlideButton = document.getElementById('nextSlide');
          const prevSlideButton = document.getElementById('prevSlide');
          let isSliding = false;

          const getSlideStep = () => {
            const firstSlide = mediaTrack?.querySelector('.media-slide');
            if (!firstSlide) return 0;
            const styles = window.getComputedStyle(mediaTrack);
            const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
            return firstSlide.getBoundingClientRect().width + gap;
          };

          const finishTrackTransition = (callback) => {
            const onTransitionEnd = event => {
              if (event.target !== mediaTrack || event.propertyName !== 'transform') return;
              mediaTrack.removeEventListener('transitionend', onTransitionEnd);
              callback();
            };
            mediaTrack.addEventListener('transitionend', onTransitionEnd);
          };

          const moveToNextSlide = () => {
            if (!mediaTrack || isSliding || mediaTrack.children.length < 2) return;
            const step = getSlideStep();
            if (!step) return;

            isSliding = true;
            mediaTrack.style.transition = 'transform .55s cubic-bezier(.2,.7,.2,1)';
            mediaTrack.style.transform = `translateX(${-step}px)`;

            finishTrackTransition(() => {
              mediaTrack.style.transition = 'none';
              mediaTrack.appendChild(mediaTrack.firstElementChild);
              mediaTrack.style.transform = 'translateX(0)';
              mediaTrack.getBoundingClientRect();
              mediaTrack.style.transition = '';
              isSliding = false;
            });
          };

          const moveToPreviousSlide = () => {
            if (!mediaTrack || isSliding || mediaTrack.children.length < 2) return;
            const step = getSlideStep();
            if (!step) return;

            isSliding = true;
            mediaTrack.style.transition = 'none';
            mediaTrack.insertBefore(mediaTrack.lastElementChild, mediaTrack.firstElementChild);
            mediaTrack.style.transform = `translateX(${-step}px)`;
            mediaTrack.getBoundingClientRect();

            mediaTrack.style.transition = 'transform .55s cubic-bezier(.2,.7,.2,1)';
            requestAnimationFrame(() => {
              mediaTrack.style.transform = 'translateX(0)';
            });

            finishTrackTransition(() => {
              mediaTrack.style.transition = '';
              isSliding = false;
            });
          };

          nextSlideButton?.addEventListener('click', moveToNextSlide);
          prevSlideButton?.addEventListener('click', moveToPreviousSlide);
          window.addEventListener('resize', () => {
            if (!mediaTrack) return;
            mediaTrack.style.transition = 'none';
            mediaTrack.style.transform = 'translateX(0)';
            mediaTrack.getBoundingClientRect();
            mediaTrack.style.transition = '';
            isSliding = false;
          });

          document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
              const item = button.closest('.faq-item');
              item.classList.toggle('open');
            });
          });

          document.querySelectorAll('[data-consent-toggle]').forEach(button => {
            button.addEventListener('click', () => {
              const consent = button.closest('.consent');
              consent.classList.toggle('open');
              button.textContent = consent.classList.contains('open') ? '접기' : '전문 보기';
            });
          });

          const phone = document.getElementById('phone');
          phone.addEventListener('input', () => {
            const digits = phone.value.replace(/\D/g, '').slice(0, 11);
            phone.value = digits.length < 4 ? digits : digits.length < 8 ? `${digits.slice(0,3)}-${digits.slice(3)}` : `${digits.slice(0,3)}-${digits.slice(3,7)}-${digits.slice(7)}`;
          });

          const form = document.getElementById('registrationForm');
          const modal = document.getElementById('successModal');
          const closeModal = document.getElementById('closeModal');
          const close = () => { modal.classList.remove('show'); document.body.classList.remove('modal-open'); };
          closeModal.addEventListener('click', close);
          modal.addEventListener('click', e => { if (e.target === modal) close(); });
          document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

          const getSelectedValues = (name) =>
            [...form.querySelectorAll(`[name="${name}"]:checked`)].map(input => input.value);

          const getUtmData = () => {
            const params = new URLSearchParams(window.location.search);
            return {
              utm_source: params.get('utm_source') || '',
              utm_medium: params.get('utm_medium') || '',
              utm_campaign: params.get('utm_campaign') || '',
              utm_content: params.get('utm_content') || '',
              utm_term: params.get('utm_term') || ''
            };
          };

          const buildSubmissionPayload = () => ({
            event_name: 'ENCY World 2026: Korean Edition',
            event_short_name: 'EWK 2026',
            event_date: '2026-10-29',

            name: form.elements.name?.value.trim() || '',
            company: form.elements.company?.value.trim() || '',
            email: form.elements.email?.value.trim() || '',
            phone: form.elements.phone?.value.trim() || '',
            job: form.elements.job?.value.trim() || '',

            interest: getSelectedValues('interest'),
            purpose: getSelectedValues('purpose'),
            software: getSelectedValues('software'),
            hardware: getSelectedValues('hardware'),

            consulting: form.elements.consulting?.value || '',
            source: form.elements.source?.value || '',

            privacy_consent: Boolean(form.elements.privacy?.checked),
            marketing_consent: Boolean(form.elements.marketing?.checked),

            status: '신규 신청',
            submitted_at: new Date().toISOString(),
            page_url: window.location.href,
            referrer: document.referrer || '',
            user_agent: navigator.userAgent,
            ...getUtmData()
          });

          form.addEventListener('submit', async (e) => {
            e.preventDefault();

            let valid = form.checkValidity();

            form.querySelectorAll('[data-required-group]').forEach(group => {
              const checked = group.querySelector('input[type="checkbox"]:checked');
              group.style.outline = checked ? '' : '1px solid rgba(255,98,98,.8)';
              group.style.outlineOffset = checked ? '' : '10px';
              group.style.borderRadius = checked ? '' : '8px';
              if (!checked) valid = false;
            });

            if (!valid) {
              form.reportValidity();
              const firstInvalid =
                form.querySelector(':invalid') ||
                form.querySelector('[data-required-group][style*="outline"]');

              firstInvalid?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
              return;
            }

            const webhookUrl = pageConfig.webhookUrl?.trim();
            const submitButton = form.querySelector('[type="submit"]');
            const originalButtonText = submitButton?.textContent || '참가 신청 완료하기';

            if (!webhookUrl) {
              window.alert(
                'Webhook URL이 아직 설정되지 않았습니다. ' +
                'EWK2026_CONFIG.webhookUrl에 Make.com Webhook URL을 입력해 주세요.'
              );
              return;
            }

            const payload = buildSubmissionPayload();

            try {
              if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = '신청 정보를 전송하고 있습니다...';
              }

              const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
              });

              if (!response.ok) {
                throw new Error(`Webhook request failed: ${response.status}`);
              }

              const successTrackingPayload = {
                form_id: 'registrationForm',
                form_name: 'EWK 2026 참가 신청',
                event_name_full: 'ENCY World 2026: Korean Edition',
                lead_source: payload.source || '',
                marketing_consent: payload.marketing_consent
              };

              pushDataLayer(
                trackingConfig.dataLayerFormSubmitEvent || 'ewk2026_form_submit',
                successTrackingPayload
              );

              if (
                trackingConfig.fireDirectMetaLead &&
                typeof window.fbq === 'function'
              ) {
                window.fbq('track', 'Lead', {
                  content_name: 'EWK 2026 Registration',
                  content_category: 'Conference Registration',
                  event_date: '2026-10-29'
                });
              }

              modal.classList.add('show');
              document.body.classList.add('modal-open');
              form.reset();

            } catch (error) {
              console.error(error);
              window.alert(
                '신청 정보 전송 중 오류가 발생했습니다. ' +
                '잠시 후 다시 시도하거나 행사 운영팀으로 연락해 주세요.'
              );

            } finally {
              if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
              }
            }
          });
        })();
  };

  const startMounting = () => {
    if (mountLandingPage()) return;

    // Sixshop가 섹션 DOM을 늦게 그리는 경우를 대비합니다.
    const observer = new MutationObserver(() => {
      if (mountLandingPage()) observer.disconnect();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    window.setTimeout(() => observer.disconnect(), 15000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMounting, { once: true });
  } else {
    startMounting();
  }
})();
