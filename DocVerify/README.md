# DocVerify: Aplikasi Autentikasi dan Legalisasi Dokumen Penting Menggunakan Blockchain

## Deskripsi Aplikasi
DocVerify adalah aplikasi berbasis blockchain yang dirancang untuk autentikasi dan legalisasi dokumen penting. Aplikasi ini memanfaatkan teknologi blockchain untuk memastikan transparansi, keamanan, dan integritas dokumen. Dengan DocVerify, pengguna dapat menyimpan, mengautentikasi, memperbarui, dan menghapus dokumen secara aman di dalam sistem.

## Fitur Utama
1. **Penyimpanan Dokumen Aman**
   - Dokumen disimpan dalam bentuk hash untuk memastikan keaslian dan keamanan data.
   - Setiap dokumen memiliki ID unik yang dihasilkan menggunakan UUID.

2. **Autentikasi Dokumen**
   - Memastikan keaslian dokumen melalui verifikasi hash yang disimpan di blockchain.
   - Dokumen dapat diberikan status seperti `authenticated` atau `legalized`.

3. **CRUD Operasi**
   - **Create**: Menambahkan dokumen baru dengan metadata seperti nama, hash, pemilik, dan status.
   - **Read**: Mengambil semua dokumen atau dokumen tertentu berdasarkan ID.
   - **Update**: Memperbarui status atau metadata dokumen yang ada.
   - **Delete**: Menghapus dokumen dari penyimpanan.

4. **Integritas Data**
   - Data dokumen disimpan dalam **StableBTreeMap**, yang memastikan data tetap ada meskipun canister diperbarui.

## Endpoint API
| Metode | Endpoint           | Deskripsi                              |
|--------|--------------------|---------------------------------------|
| POST   | `/documents`       | Menambahkan dokumen baru              |
| GET    | `/documents`       | Mengambil semua dokumen               |
| GET    | `/documents/:id`   | Mengambil dokumen berdasarkan ID      |
| PUT    | `/documents/:id`   | Memperbarui status atau metadata dokumen |
| DELETE | `/documents/:id`   | Menghapus dokumen berdasarkan ID      |

## Teknologi yang Digunakan
- **Node.js** dan **Express**: Backend untuk API server.
- **Azle**: Framework untuk mengembangkan canister di Internet Computer (IC).
- **UUID**: Untuk menghasilkan ID dokumen yang unik.
- **StableBTreeMap**: Struktur data untuk penyimpanan aman dan persisten.
- **Blockchain**: Teknologi inti untuk keamanan dan transparansi data.

## Cara Kerja Singkat
1. Pengguna mengunggah dokumen yang akan disimpan dan diverifikasi.
2. Aplikasi menghasilkan hash dari dokumen tersebut untuk menjaga integritas data.
3. Informasi dokumen (hash, nama, pemilik, status) disimpan di dalam blockchain.
4. Pengguna dapat memperbarui status dokumen (misalnya, dari "pending" ke "authenticated").
5. Dokumen dapat dihapus jika tidak lagi diperlukan.

## Manfaat Aplikasi
- **Keamanan**: Data disimpan dengan enkripsi dan transparansi blockchain.
- **Keaslian**: Dokumen dapat diverifikasi keabsahannya melalui hash unik.
- **Integritas**: Data tidak dapat diubah tanpa otorisasi yang valid.
- **Transparansi**: Semua perubahan pada dokumen terekam di blockchain.

## Penggunaan
Aplikasi ini cocok digunakan untuk:
- Legalisasi kontrak dan perjanjian penting.
- Autentikasi dokumen akademik seperti ijazah dan sertifikat.
- Verifikasi dokumen kepemilikan seperti surat tanah atau properti.

---
*DocVerify memastikan setiap dokumen penting Anda aman, asli, dan dapat dipercaya.*