# Portofolio — Hendrikus C. N. Olmedo

Website portofolio 3 halaman (Home, Projects, Contact) bergaya "technical
blueprint" — dibuat dengan HTML/CSS/JS murni, tanpa framework, jadi bisa
langsung dihosting di mana saja.

## Struktur file

```
index.html      -> Halaman Home
projects.html   -> Halaman Projects
contact.html    -> Halaman Contact
css/style.css   -> Semua styling
js/main.js      -> Nav mobile, animasi scroll, form contact -> mailto
assets/         -> Folder kosong, siap diisi foto/screenshot asli
```

## Cara buka di komputer sendiri

Cukup buka `index.html` langsung di browser (double click), atau jalankan
local server (disarankan agar font & path relatif lebih akurat):

```bash
cd nama-folder-ini
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Mengganti placeholder dengan foto/screenshot asli

Saat ini gambar hero dan kedua kartu proyek memakai sketsa SVG (garis
teknikal) sebagai pengganti screenshot. Untuk menggantinya nanti:

1. Taruh file gambar (mis. `screenshot-seniman.png`) ke folder `assets/`.
2. Di `index.html` / `projects.html`, cari blok `<svg ...>...</svg>` yang
   ingin diganti, lalu ganti dengan:
   ```html
   <img src="assets/screenshot-seniman.png" alt="Screenshot Seniman Barbershop" style="width:100%;border-radius:4px;">
   ```
3. Untuk foto profil, tambahkan `<img>` serupa di bagian `.hero-drawing`
   pada `index.html`.

## Deploy

Pilihan termudah untuk pemula (gratis):

- **GitHub Pages**: upload folder ini ke repo GitHub (mis. `edonurcahyo.github.io`
  atau repo biasa + aktifkan Pages di Settings > Pages), lalu situs otomatis
  online di `https://username.github.io/nama-repo/`.
- **Netlify / Vercel**: drag-and-drop folder ini ke dashboard Netlify (opsi
  "Deploy manually"), langsung dapat link live dalam hitungan detik.

## Kustomisasi cepat

- Warna & font: semua variabel ada di bagian `:root { ... }` paling atas
  `css/style.css`.
- Link GitHub proyek: saat ini mengarah ke profil `github.com/edonurcahyo`
  karena repo per-proyek belum disebutkan — ganti ke URL repo spesifik bila
  sudah tersedia (cari teks `github.com/edonurcahyo` di `index.html` dan
  `projects.html`).
