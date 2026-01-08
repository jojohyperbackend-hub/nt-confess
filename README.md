# NT-Confess Web Application

## 📖 Overview
NT-Confess adalah aplikasi web untuk mengirim pesan confess secara imut dan interaktif, dengan flow step-by-step yang lucu dan mudah dibagikan. Semua orang bisa membuka link confess di **browser/device apa pun** dan melihat confess tanpa login. Aplikasi ini menggunakan **Next.js 16 App Router**, **Tailwind CSS**, dan **TypeScript**.

## 🎨 Color Palette
- Background utama: `bg-pink-light` (pink pastel lucu)
- Card: `bg-white rounded-xl shadow-lg`
- Button: `bg-pink hover:bg-pink-dark`
- Teks: `text-pink-dark` dan `text-pink-dark/80` untuk sub-teks

## ⚡ Features

1. **Create Confess**
   - Input nama, pesan, dan emoji/emotion
   - Generate **kode unik** (6 karakter) untuk setiap confess
   - Bisa dibagikan dengan link `/read/[code]`

2. **Step-by-Step Read Confess**
   - **Intro**: Pesan pembuka lucu
   - **Message**: Tampilkan pesan confess + emotion
   - **Reveal**: Tampilkan siapa yang mengirim
   - **Ending**: Ucapan terima kasih

3. **After Confess Mode**
   - Setelah step terakhir, muncul card summary
   - Menampilkan pesan, nama, timestamp
   - Tombol "Balas Confess 💌" untuk respon sederhana

4. **Share Link**
   - Setiap confess memiliki URL unik `/read/[code]`
   - Bisa dibuka di semua browser dan device
   - Input read-only untuk copy link

5. **Safe API**
   - Endpoint `/api/route` mendukung **POST** (buat confess) dan **GET** (ambil confess)
   - Response selalu JSON
   - Aman dari error `<DOCTYPE ...` karena HTML fallback ditangani

## 🗂️ Struktur Folder
```
nt-confess/
├─ app/
│  ├─ api/
│  │  └─ route/
│  │     └─ route.ts
│  ├─ create/
│  │  └─ page.tsx
│  ├─ read/
│  │  └─ [code]/
│  │     └─ page.tsx
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ Step.tsx
│  └─ AfterConfess.tsx
├─ styles/
│  └─ global.css
├─ .gitignore
├─ package.json
└─ tsconfig.json
```

## 🚀 Installation & Run

### 1. Clone Repository
```bash
git clone https://github.com/jojohyperbackend-hub/nt-confess.git
cd nt-confess
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Server akan berjalan di: `http://localhost:3000`

### 4. Build untuk Production
```bash
npm run build
npm start
```

## 🔗 Cara Menggunakan

### 1. Membuat Confess
- Buka `/create`
- Isi `Nama`, `Pesan`, `Emotion`
- Submit → dapatkan **kode unik / link**

### 2. Membaca Confess
- Buka link `/read/[code]`
- Ikuti step-by-step Intro → Message → Reveal → Ending
- Setelah selesai, muncul **After Confess Mode**

### 3. Share Link
- Copy input field share link di page read
- Bagikan ke teman / pacar / semua orang
- Bisa dibuka di browser/device lain tanpa login

## 🛠️ Tech Stack
- **Next.js 16 App Router** (React + SSR + Client Components)
- **TypeScript**
- **Tailwind CSS**
- **Memory storage sementara** untuk demo (bisa upgrade ke Supabase / DB)

## 📝 Notes
- Memory storage **tidak persistent**. Jika server restart, data akan hilang.
- Link confess bersifat publik selama code tidak diubah.
- UI menggunakan **pink pastel lucu** untuk tema confess.

## ✅ Summary
- Create → Share → Read → Step-by-Step → After Confess
- Safe API JSON response
- Share link bisa dibuka semua device
- Cute Tailwind UI & simple folder structure

## Note
nothing