// EWK2026 등록페이지 - Sixshop 주입용 번들
// 자동 생성됨 (변환 스크립트로 생성, 수동 수정 시 주의)

(function() {
  var CSS_URL = document.currentScript && document.currentScript.dataset.cssUrl;
  var HTML_URL = document.currentScript && document.currentScript.dataset.htmlUrl;
  var MOUNT_ID = (document.currentScript && document.currentScript.dataset.mountId) || "ewk2026-page-root";

  function injectCss(url) {
    return new Promise(function(resolve, reject) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  function injectHtml(url, mountId) {
    return fetch(url)
      .then(function(res) { return res.text(); })
      .then(function(html) {
        var mount = document.getElementById(mountId);
        if (!mount) {
          console.error("EWK2026: mount element #" + mountId + " not found");
          return;
        }
        mount.innerHTML = html;
      });
  }

  Promise.all([
    CSS_URL ? injectCss(CSS_URL) : Promise.resolve(),
    HTML_URL ? injectHtml(HTML_URL, MOUNT_ID) : Promise.resolve()
  ]).then(function() {
    runLogic();
  });

  function runLogic() {
window.EWK2026_CONFIG = {
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
(() => {
      const header = document.getElementById('ewk-header');
      const scrollBar = document.getElementById('ewk-scrollBar');
      const menuBtn = document.getElementById('ewk-menuBtn');
      const nav = document.getElementById('ewk-nav');
      const topButton = document.getElementById('ewk-topButton');
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

        const controls = document.createElement('div');
        controls.className = 'video-overlay-controls';
        controls.innerHTML = `
          <button type="button" class="video-play-button" aria-label="영상 재생">
            <span aria-hidden="true">▶</span>
            <span>영상 재생</span>
          </button>
          <a class="video-youtube-link" href="${watchUrl}" target="_blank" rel="noopener noreferrer">
            YouTube에서 보기
          </a>
        `;
        slot.appendChild(controls);

        const playVideo = () => {
          const isProductionHost =
            /(^|\.)encycadcam\.co\.kr$/i.test(window.location.hostname);

          // 다운로드 HTML, 샌드박스 미리보기, 로컬 파일 환경은
          // YouTube가 요구하는 정상적인 Referer를 제공하지 못할 수 있으므로
          // 오류 153을 피하기 위해 공식 YouTube 페이지로 이동합니다.
          if (!isProductionHost) {
            const notice = slot.querySelector('.video-preview-notice');
            if (notice) {
              notice.classList.add('show');
              window.setTimeout(() => notice.classList.remove('show'), 2600);
            }
            return;
          }

          if (slot.dataset.loaded === 'true') return;
          slot.dataset.loaded = 'true';

          const iframe = document.createElement('iframe');
          iframe.src = embedUrl;
          iframe.title = 'EWK 2026 video';
          iframe.loading = 'eager';
          iframe.referrerPolicy = 'strict-origin-when-cross-origin';
          iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          iframe.allowFullscreen = true;

          slot.innerHTML = '';
          slot.appendChild(iframe);
        };

        slot.querySelector('.video-play-button')?.addEventListener('click', event => {
          event.stopPropagation();
          playVideo();
        });

        slot.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            playVideo();
          }
        });
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

      let slideIndex = 0;
      const mediaTrack = document.getElementById('ewk-mediaTrack');
      const slides = [...document.querySelectorAll('.media-slide')];
      const updateSlider = () => {
        if (!mediaTrack || !slides.length) return;
        const gap = 18;
        const width = slides[0].getBoundingClientRect().width + gap;
        const maxIndex = Math.max(0, slides.length - (window.innerWidth < 760 ? 1 : 1.45));
        slideIndex = Math.max(0, Math.min(slideIndex, Math.ceil(maxIndex)));
        mediaTrack.style.transform = `translateX(${-slideIndex * width}px)`;
      };
      document.getElementById('ewk-nextSlide').addEventListener('click', () => { slideIndex += 1; updateSlider(); });
      document.getElementById('ewk-prevSlide').addEventListener('click', () => { slideIndex -= 1; updateSlider(); });
      window.addEventListener('resize', updateSlider);

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

      const phone = document.getElementById('ewk-phone');
      phone.addEventListener('input', () => {
        const digits = phone.value.replace(/\D/g, '').slice(0, 11);
        phone.value = digits.length < 4 ? digits : digits.length < 8 ? `${digits.slice(0,3)}-${digits.slice(3)}` : `${digits.slice(0,3)}-${digits.slice(3,7)}-${digits.slice(7)}`;
      });

      const form = document.getElementById('ewk-registrationForm');
      const modal = document.getElementById('ewk-successModal');
      const closeModal = document.getElementById('ewk-closeModal');
      const close = () => { modal.classList.remove('show'); document.getElementById('ewk2026-page-root').classList.remove('modal-open'); };
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
          document.getElementById('ewk2026-page-root').classList.add('modal-open');
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
  }
})();
