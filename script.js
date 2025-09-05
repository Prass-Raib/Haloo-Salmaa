const music = document.getElementById('background-music');
const musicBtn = document.getElementById('music-btn');

// Fungsi untuk Memainkan atau Memberhentikan Musik
function playMusic() {
  if (music.paused) {
    music.play()
      .then(() => {
        musicBtn.innerText = 'Matikan Musik 🔇';
      })
      .catch(error => {
        console.error('Gagal memutar musik:', error);
        alert('Browser memblokir pemutaran otomatis. Silakan klik tombol lagi.');
      });
  } else {
    music.pause();
    musicBtn.innerText = 'Putar Musik 🎵';
  }
}

// Hentikan Musik Saat Halaman Ditutup
window.addEventListener('beforeunload', () => {
  music.pause();
});
