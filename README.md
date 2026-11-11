# ZEPTO di Railway
Ekstrak ZIP ke folder baru. Letakkan Dockerfile, railway.toml, server.cjs dan folder web/ pada tingkat yang sama. Tidak perlu memasang Node.js atau Docker di komputer untuk deploy lewat GitHub.

1. Buat repositori GitHub (boleh privat). Pilih Add file → Upload files. Unggah ISI folder ekstraksi beserta web/ dan commit. Jangan unggah ZIP sebagai satu file. Pastikan Dockerfile terlihat di halaman utama repositori.
2. Di Railway pilih New Project → Deploy from GitHub Repo, lalu pilih repositori tadi. Jika belum terlihat, beri Railway akses ke repositori tersebut.
3. Tunggu sampai deployment berstatus Active/Success. Konfigurasi sudah tersedia: server menggunakan 0.0.0.0 dan PORT dari Railway; tidak perlu mengisi Build Command, Start Command, atau membuat database.
4. Buka service ZEPTO → Settings → Networking / Public Networking → Generate Domain. Jika diminta target port, gunakan port yang tertera di log “ZEPTO: 0.0.0.0:…”.
5. Buka domain HTTPS yang diberikan. Coba menu Dosen Pembimbing, Kembali, lalu Evaluasi untuk melihat formulir kelas VI. Tambahkan /health pada domain untuk pemeriksaan server: responsnya ok.

Jika Dockerfile tidak terdeteksi: pastikan tidak ada folder pembungkus di repositori, atau atur Root Directory pada service ke folder tempat Dockerfile berada.
Jika domain menampilkan 502: samakan target port domain dengan log server dan pastikan deployment aktif.
Jika halaman hanya menampilkan layar awal: periksa bahwa folder web/assets/ ikut terunggah lengkap. Jangan membuka index.html melalui file:///.
Progres belajar disimpan di browser siswa. Gunakan alamat yang sama untuk melanjutkan. Progres APK tidak otomatis berpindah.

Uji lokal tanpa Railway (Python 3): buka terminal pada folder hasil ekstraksi, jalankan
  python -m http.server 8080 --bind 127.0.0.1 --directory web
Di macOS/Linux gunakan python3. Kunjungi http://127.0.0.1:8080/; tekan Ctrl+C untuk berhenti. /health hanya tersedia pada server Node.js/Railway.

Jika ingin mengisi daftar penguji untuk semua pengguna web, ubah web/penguji.json di repositori dan deploy ulang.
