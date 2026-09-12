# Audit Modul 2 - Semantic HTML dan Formulir (Minggu ke-2)

## Temuan
Tidak ditemukan adanya error struktur, dokumen `index.html`, `peralatan.html`, dan `peminjaman.html` melewati pemeriksaan tanpa ada masalah.  
Pemeriksaan menggunakan Nu HTML Checker [Link](https://validator.w3.org/nu/#file)

## Verdict
### Navigasi
1. `Beranda` dari modul 1 tetap ada bersama dengan `Peralatan`.  
2. Navigasi bertambah menjadi tiga halaman dengan penambahan halaman `Peminjaman`.

### Perilaku
1. Halaman `Peralatan` berubah dari daftar sederhana menggunakan elemen `<ul>` menjadi katalog semantik menggunakan elemen `<article>`.  
2. Halaman `Peminjaman` baru tersedia. Berisi form yang lengkap, memiliki label, bernama, dan tervalidasi HTML.

### Project Structure
1. Tiga gambar peralatan tambahan tersimpan di `frontend/public/images` tanpa menghapus gambar dari modul 1.
2. Catatan audit Modul 2 tersedia di folder `/docs`.
3. Seluruh perubahan tersimpan di repository Git yang sama dengan modul 1.

### Penutup
Praktikum Modul 2 menerapkan konsep **"Semantic HTML"**, dimana setiap elemen struktural menyatakan perannya secara jelas.  
Menggunakan tag seperti `<header>`, `<article>`, dan `<form>` untuk menyatakan fungsinya masing-masing ketimbang menggunakan Non-semantic elements seperti `<div>` atau `<ul>` sebagai elemen struktural.