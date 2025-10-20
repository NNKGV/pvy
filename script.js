const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('toggleMusicBtn');

music.volume = 0.5;

// Khi nhấn mở phong bì
envelope.addEventListener('click', () => {
  envelope.style.opacity = '0';
  setTimeout(() => envelope.remove(), 800); // Xóa phong bì
  letter.classList.remove('hidden');
  setTimeout(() => letter.classList.add('show'), 100);

  // Phát nhạc
  music.play().catch(() => {});
  startFlowers();
});

// Bật / tắt nhạc
toggleBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = '🔊 Tắt nhạc';
  } else {
    music.pause();
    toggleBtn.textContent = '🔈 Bật nhạc';
  }
});

// Tạo hoa rơi 🌸
function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = Math.random() * 3 + 3 + 's';
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 6000);
}

function startFlowers() {
  setInterval(createFlower, 300);
}
