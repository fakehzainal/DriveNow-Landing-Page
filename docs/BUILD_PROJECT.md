# Dokumentasi Pembuatan Project

Dokumen ini menjelaskan langkah membuat project landing page persewaan mobil seperti repository ini.

## 1. Tujuan Project

Membuat landing page rental mobil dengan kebutuhan berikut:

- Next.js App Router + TypeScript
- Tailwind CSS
- Komponen gaya shadcn/ui
- Hero section, daftar armada, keunggulan, alur booking, testimoni, form kontak
- Responsive desktop dan mobile

## 2. Prasyarat

- Node.js 18.18+ atau 20+
- npm 9+

Cek versi:

```bash
node -v
npm -v
```

## 3. Inisialisasi Project

Buat project Next.js:

```bash
npx create-next-app@latest ai-landing-page-rent-car --typescript --eslint --tailwind --app --src-dir false --import-alias "@/*"
cd ai-landing-page-rent-car
```

## 4. Install Dependency Tambahan

Install util dan library yang dipakai komponen style shadcn:

```bash
npm install class-variance-authority clsx tailwind-merge lucide-react
```

## 5. Konfigurasi Utama

Pastikan file berikut ada:

- `tsconfig.json`
  - alias path `@/*`
- `tailwind.config.ts`
  - `content` menunjuk ke `app/**/*`, `components/**/*`, `lib/**/*`
  - menggunakan CSS variables untuk warna (`--primary`, `--background`, dll)
- `components.json`
  - referensi `app/globals.css`
  - alias `components` dan `utils`
- `next.config.mjs`
  - izinkan domain remote image:
    - `images.unsplash.com`
    - `upload.wikimedia.org`

Contoh `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" }
    ]
  }
};

export default nextConfig;
```

## 6. Setup Font Global

Di `app/layout.tsx`:

- Body font: `Inter`
- Heading font: `Poppins`

Contoh pola:

```tsx
import { Inter, Poppins } from "next/font/google";
```

Gunakan variable CSS font:

- `--font-body`
- `--font-heading`

## 7. Setup Styling Global

Di `app/globals.css`:

- Definisikan token warna pada `:root`
- Tambahkan utility class:
  - `.glass-panel`
  - `.fade-up`
  - `.hero-title`
  - `.section-title`
- Tambahkan fallback aksesibilitas:
  - `@media (prefers-reduced-motion: reduce)`

## 8. Membuat Komponen UI Gaya shadcn

Buat komponen reusable:

- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/badge.tsx`
- `components/ui/input.tsx`
- `components/ui/textarea.tsx`

Dan utility:

- `lib/utils.ts` untuk fungsi `cn()`

## 9. Membangun Landing Page

Semua section dikerjakan di `app/page.tsx`:

- Topbar / navbar
- Hero section
- Armada mobil (grid card + image)
- Keunggulan layanan
- Alur booking
- Promo
- Testimoni
- Kontak dan form reservasi
- Footer

Data konten disimpan sebagai array di file yang sama:

- `cars`
- `benefits`
- `steps`
- `testimonials`

## 10. Struktur Folder Akhir

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    badge.tsx
    button.tsx
    card.tsx
    input.tsx
    textarea.tsx
docs/
  BUILD_PROJECT.md
lib/
  utils.ts
components.json
next.config.mjs
package.json
tailwind.config.ts
tsconfig.json
```

## 11. Menjalankan Project

Development:

```bash
npm install
npm run dev
```

Lint:

```bash
npm run lint
```

Build production:

```bash
npm run build
npm run start
```

## 12. Kustomisasi Cepat

Ganti isi landing page:

- Edit data mobil di `app/page.tsx` pada konstanta `cars`
- Edit teks section di `app/page.tsx`

Ganti style:

- Warna: `app/globals.css` pada `:root`
- Ukuran dan jarak section: class Tailwind di `app/page.tsx`
- Font global: `app/layout.tsx`

Ganti gambar:

- Update URL di `app/page.tsx`
- Jika domain baru, tambahkan di `next.config.mjs`

## 13. Troubleshooting

Masalah: gambar tidak muncul.

- Cek domain gambar sudah diizinkan pada `next.config.mjs`
- Pastikan URL gambar valid
- Restart dev server setelah ubah `next.config.mjs`

Masalah: error saat build karena environment.

- Jalankan ulang build di shell yang punya izin proses child worker
- Coba hapus cache `.next` lalu build ulang

## 14. Rekomendasi Pengembangan Lanjutan

- Pindahkan data statis ke CMS atau file JSON
- Tambahkan validasi form + submit ke API/WhatsApp
- Tambahkan section FAQ dan pricing package
- Tambahkan test UI sederhana (Playwright/Cypress)
