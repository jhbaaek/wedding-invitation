const KAKAO_APP_KEY = "YOUR_KAKAO_JAVASCRIPT_KEY";

const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("복사되었습니다.");
  } catch {
    showToast("복사할 내용을 길게 눌러 선택해 주세요.");
  }
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", () => copyText(button.dataset.copy));
});

document.querySelector("[data-action='copy-url']").addEventListener("click", () => {
  copyText(window.location.href);
});

const gallerySection = document.querySelector(".gallery-section");
document.querySelector("[data-action='more-gallery']").addEventListener("click", (event) => {
  gallerySection.classList.toggle("is-expanded");
  event.currentTarget.textContent = gallerySection.classList.contains("is-expanded") ? "접기" : "더보기";
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
  });
});

document.querySelector(".lightbox-close").addEventListener("click", () => {
  lightbox.hidden = true;
  lightboxImage.src = "";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.hidden = true;
    lightboxImage.src = "";
  }
});

const videoModal = document.querySelector(".video-modal");
document.querySelector(".video-thumb").addEventListener("click", () => {
  videoModal.hidden = false;
});

document.querySelector(".modal-close").addEventListener("click", () => {
  videoModal.hidden = true;
});

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    videoModal.hidden = true;
  }
});

let audioContext;
let musicTimer;
let isPlaying = false;
const musicButton = document.querySelector(".music-toggle");

function playNote(context, frequency, startTime, duration) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.045, startTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.04);
}

function scheduleMusic() {
  if (!audioContext || !isPlaying) return;
  const now = audioContext.currentTime;
  const melody = [392, 440, 523.25, 493.88, 440, 392];
  melody.forEach((note, index) => playNote(audioContext, note, now + index * 0.55, 0.5));
  musicTimer = setTimeout(scheduleMusic, 3400);
}

musicButton.addEventListener("click", async () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  if (audioContext.state === "suspended") {
    await audioContext.resume();
  }

  isPlaying = !isPlaying;
  musicButton.classList.toggle("is-playing", isPlaying);
  musicButton.setAttribute("aria-pressed", String(isPlaying));
  musicButton.setAttribute("aria-label", isPlaying ? "배경음악 정지" : "배경음악 재생");

  if (isPlaying) {
    scheduleMusic();
    showToast("배경음악을 재생합니다.");
  } else {
    clearTimeout(musicTimer);
    showToast("배경음악을 정지했습니다.");
  }
});

document.querySelector(".kakao-share").addEventListener("click", async () => {
  const shareData = {
    title: "백종혁 & 김하빈 결혼합니다",
    text: "2026년 10월 25일 일요일 오후 12시 10분, 그레이스파티",
    url: window.location.href,
  };

  if (window.Kakao && KAKAO_APP_KEY !== "YOUR_KAKAO_JAVASCRIPT_KEY") {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_APP_KEY);
    }
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: shareData.title,
        description: shareData.text,
        imageUrl: new URL("./images/share.svg", window.location.href).href,
        link: {
          mobileWebUrl: shareData.url,
          webUrl: shareData.url,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: shareData.url,
            webUrl: shareData.url,
          },
        },
      ],
    });
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      showToast("공유를 취소했습니다.");
    }
    return;
  }

  copyText(window.location.href);
});
