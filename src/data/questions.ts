import type { Question } from '../types';

export const questions: Question[] = [
    // 1-10: OBE, Eliminasi Gauss, Gauss-Jordan, Cramer
    {
        id: 1,
        text: "Manakah operasi berikut yang BUKAN termasuk Operasi Baris Elementer (OBE)?",
        type: 'multiple-choice',
        options: [
            "Menukarkan dua baris",
            "Mengalikan baris dengan konstanta tak nol",
            "Menambahkan kelipatan satu baris ke baris lain",
            "Menguadratkan semua elemen dalam satu baris"
        ],
        correctIndex: 3
    },
    {
        id: 2,
        text: "Dalam Eliminasi Gauss, tujuan utamanya adalah mengubah matriks menjadi bentuk...",
        type: 'multiple-choice',
        options: [
            "Matriks Identitas",
            "Matriks Segitiga Atas (Eselon Baris)",
            "Matriks Diagonal",
            "Matriks Nol"
        ],
        correctIndex: 1
    },
    {
        id: 3,
        text: "Apa perbedaan mendasar antara metode eliminasi Gauss dengan Gauss-Jordan?",
        type: 'multiple-choice',
        options: [
            "Gauss menghasilkan matriks eselon baris, Gauss-Jordan menghasilkan eselon baris tereduksi",
            "Gauss lebih lambat dari Gauss-Jordan",
            "Gauss hanya untuk matriks 2x2, Gauss-Jordan untuk 3x3 ke atas",
            "Tidak ada perbedaan signifikan"
        ],
        correctIndex: 0
    },
    {
        id: 4,
        text: "Syarat utama agar Aturan Cramer dapat digunakan untuk menyelesaikan SPL adalah...",
        type: 'multiple-choice',
        options: [
            "Matriks koefisien harus persegi dan determinannya tidak sama dengan nol",
            "Matriks harus berbentuk segitiga",
            "Jumlah variabel lebih banyak dari jumlah persamaan",
            "Elemen diagonal utama harus bernilai 1"
        ],
        correctIndex: 0
    },
    {
        id: 5,
        text: "Jika determinan matriks koefisien adalah 0, maka SPL tersebut...",
        type: 'multiple-choice',
        options: [
            "Memiliki solusi tunggal",
            "Tidak memiliki solusi tunggal (bisa tidak ada solusi atau banyak solusi)",
            "Pasti memiliki banyak solusi",
            "Dapat diselesaikan dengan Cramer"
        ],
        correctIndex: 1
    },
    {
        id: 6,
        text: "Diketahui SPL: 2x + y = 5, x - y = 1. Berapakah nilai determinan utama (D)?",
        type: 'multiple-choice',
        options: [
            "3",
            "-3",
            "1",
            "-1"
        ],
        correctIndex: 1 // |2 1; 1 -1| = -2 - 1 = -3
    },
    {
        id: 7,
        text: "Dalam bentuk Eselon Baris Tereduksi, elemen pertama tak nol pada setiap baris harus bernilai...",
        type: 'multiple-choice',
        options: [
            "0",
            "1 (Satu Utama)",
            "Sembarang bilangan bulat",
            "Bilangan negatif"
        ],
        correctIndex: 1
    },
    {
        id: 8,
        text: "Operasi R2 = R2 - 3R1 berarti...",
        type: 'multiple-choice',
        options: [
            "Baris 2 dikurangi 3 kali Baris 1",
            "Baris 1 dikurangi 3 kali Baris 2",
            "Baris 2 dikalikan -3",
            "Baris 2 diganti dengan Baris 1"
        ],
        correctIndex: 0
    },
    {
        id: 9,
        text: "Matriks yang memiliki invers adalah matriks yang...",
        type: 'multiple-choice',
        options: [
            "Singular (Determinan = 0)",
            "Non-Singular (Determinan ≠ 0)",
            "Matriks Nol",
            "Matriks Baris"
        ],
        correctIndex: 1
    },
    {
        id: 10,
        text: "Studi Kasus Cloud Computing: Klien A (2 CPU, 1 RAM, 1 Storage) bayar 110k. Klien B (1 CPU, 3 RAM, 2 Storage) bayar 140k. Klien C (3 CPU, 2 RAM, 1 Storage) bayar 160k. Tentukan biaya per unit (CPU, RAM, Storage).",
        type: 'multiple-choice',
        options: [
            "CPU=65k, RAM=17.5k, Storage=27.5k",
            "CPU=60k, RAM=20k, Storage=30k",
            "CPU=50k, RAM=30k, Storage=30k",
            "CPU=70k, RAM=15k, Storage=25k"
        ],
        correctIndex: 0 // Solved: x=65, y=17.5, z=27.5
    },
    // 11-20: Vektor & Euclidean
    {
        id: 11,
        text: "Panjang vektor v = (3, 4) dalam ruang Euclidean adalah...",
        type: 'multiple-choice',
        options: [
            "5",
            "7",
            "√25",
            "12"
        ],
        correctIndex: 0
    },
    {
        id: 12,
        text: "Jika u = (1, 2) dan v = (3, -1), maka u • v (dot product) adalah...",
        type: 'multiple-choice',
        options: [
            "1",
            "5",
            "0",
            "-1"
        ],
        correctIndex: 0 // 3 - 2 = 1
    },
    {
        id: 13,
        text: "Dua vektor dikatakan ortogonal (tegak lurus) jika hasil kali titiknya (dot product) adalah...",
        type: 'multiple-choice',
        options: [
            "0",
            "1",
            "-1",
            "∞"
        ],
        correctIndex: 0
    },
    {
        id: 14,
        text: "Jarak Euclidean antara titik A(1, 1) dan B(4, 5) adalah...",
        type: 'multiple-choice',
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correctIndex: 2 // sqrt(3^2 + 4^2) = 5
    },
    {
        id: 15,
        text: "Vektor satuan dari v = (3, 0) adalah...",
        type: 'multiple-choice',
        options: [
            "(1, 0)",
            "(0, 1)",
            "(3, 1)",
            "(1, 3)"
        ],
        correctIndex: 0
    },
    {
        id: 16,
        text: "Proyeksi ortogonal vektor u pada v dirumuskan sebagai...",
        type: 'multiple-choice',
        options: [
            "((u • v) / |v|²) v",
            "((u • v) / |u|²) u",
            "(u • v) v",
            "|u| |v| cos(θ)"
        ],
        correctIndex: 0
    },
    {
        id: 17,
        text: "Norm (panjang) dari vektor v = (-1, -1, -1) adalah...",
        type: 'multiple-choice',
        options: [
            "√3",
            "3",
            "1",
            "-√3"
        ],
        correctIndex: 0
    },
    {
        id: 18,
        text: "Ketaksamaan Cauchy-Schwarz menyatakan bahwa |u • v| selalu...",
        type: 'multiple-choice',
        options: [
            "≤ |u||v|",
            "> |u||v|",
            "= Matriks identitas",
            "= 0"
        ],
        correctIndex: 0
    },
    {
        id: 19,
        text: "Sudut antara dua vektor u dan v dapat dicari menggunakan rumus...",
        type: 'multiple-choice',
        options: [
            "cos(θ) = (u • v) / (|u||v|)",
            "sin(θ) = (u • v) / (|u||v|)",
            "tan(θ) = u / v",
            "cos(θ) = |u| + |v|"
        ],
        correctIndex: 0
    },
    {
        id: 20,
        text: "Jika vektor u = (k, 2) dan v = (2, -6) saling tegak lurus, maka nilai k adalah...",
        type: 'multiple-choice',
        options: [
            "6",
            "3",
            "-6",
            "0"
        ],
        correctIndex: 0 // 2k - 12 = 0 -> k=6
    },
    // 21-30: Markov Chain
    {
        id: 21,
        text: "Matriks transisi pada Rantai Markov haruslah merupakan...",
        type: 'multiple-choice',
        options: [
            "Matriks Stokastik",
            "Matriks Identitas",
            "Matriks Diagonal",
            "Matriks Simetris"
        ],
        correctIndex: 0
    },
    {
        id: 22,
        text: "Sifat utama matriks stokastik kolom adalah...",
        type: 'multiple-choice',
        options: [
            "Jumlah elemen dalam setiap kolom adalah 1",
            "Jumlah elemen dalam setiap baris adalah 1",
            "Determinannya selalu 1",
            "Semua elemennya bilangan bulat"
        ],
        correctIndex: 0
    },
    {
        id: 23,
        text: "Vektor keadaan (state vector) x(k) pada waktu k dalam Markov Chain dirumuskan sebagai... (P = Matriks Transisi)",
        type: 'multiple-choice',
        options: [
            "x(k) = P x(k-1)",
            "x(k) = x(k-1) P",
            "x(k) = Pᵏ x(0)",
            "A dan C benar"
        ],
        correctIndex: 3
    },
    {
        id: 24,
        text: "Jika state awal x(0) = [1, 0]ᵀ dan P = [[0.5, 0.5], [0.5, 0.5]], maka x(1) adalah...",
        type: 'multiple-choice',
        options: [
            "[0.5, 0.5]ᵀ",
            "[1, 0]ᵀ",
            "[0, 1]ᵀ",
            "[0.25, 0.75]ᵀ"
        ],
        correctIndex: 0
    },
    {
        id: 25,
        text: "Kondisi Steady State (Keseimbangan) tercapai jika vector x memenuhi...",
        type: 'multiple-choice',
        options: [
            "Px = x",
            "Px = 0",
            "Px = -x",
            "Px = 2x"
        ],
        correctIndex: 0
    },
    {
        id: 26,
        text: "Sebuah vektor x disebut sebagai vektor eigen dari matriks A jika memenuhi persamaan Ax = λx. Apa arti dari λ dalam persamaan tersebut?",
        type: 'multiple-choice',
        options: [
            "Nilai Eigen (Eigenvalue), konstanta skala vektor",
            "Vektor Eigen",
            "Matriks Identitas",
            "Determinan Matriks"
        ],
        correctIndex: 0
    },
    {
        id: 27,
        text: "Markov Chain disebut 'Regular' jika...",
        type: 'multiple-choice',
        options: [
            "Salah satu pangkat matriks transisinya memiliki semua entri positif",
            "Matriks transisinya memiliki entri nol",
            "Tidak memiliki steady state",
            "Hanya memiliki 1 state"
        ],
        correctIndex: 0
    },
    {
        id: 28,
        text: "Probabilitas transisi Pᵢⱼ merepresentasikan peluang berpindah dari...",
        type: 'multiple-choice',
        options: [
            "State j ke State i",
            "State i ke State j",
            "State i ke i",
            "Sembarang state"
        ],
        correctIndex: 0 // Convention Px where P_ij is j to i logic. Often depends on row vs col vector. Usually P_ij is j->i in col logic.
    },
    {
        id: 29,
        text: "Studi Kasus Bison Migrasi: Wilayah A (Tetap 60%, ke B 40%, ke C 30% -> Total 130%). Wilayah B (Total 80%). Wilayah C (Total 120%). Jika dilakukan normalisasi data terlebih dahulu, berapa peluang bison berada di Wilayah C setelah 4 bulan jika awalnya di Wilayah C?",
        type: 'multiple-choice',
        options: [
            "30.54%",
            "25.00%",
            "40.12%",
            "Data Tidak Valid"
        ],
        correctIndex: 0 // Calculated ~0.30538
    },
    {
        id: 30,
        text: "Studi Kasus Shift Karyawan: Shift Pagi (Total 120%), Shift Sore (Total 90%), Shift Malam (Total 120%). Setelah normalisasi, berapa peluang karyawan yang pada hari ke-0 berada di Shift Pagi berpindah ke Shift Sore dalam waktu 4 hari?",
        type: 'multiple-choice',
        options: [
            "34.56%",
            "50.00%",
            "28.14%",
            "Tidak bisa dihitung"
        ],
        correctIndex: 0 // Calculated ~0.34559
    }
];
