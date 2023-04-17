baca ini barang baru abis itu baca komen komen di kodingan

### urutan

urutan file untuk baca biar ada konteks, karena bt sn cmn jelaskan beberapa hal cmn 1x

1. src/utils/supabase.ts
2. src/pages/index.tsx
3. src/pages/\_app.tsx
4. src/contexts
5. src/pages/news/view.tsx
6. src/pages/news
7. src/components
   1. src/components/Navbar.tsx

... file yang lain

### penjelasan sedikit

## komponen
JSX (javascriptXML)
di komentar bt ada banyak pake kata 'komponen'.
komponen itu adalah fungsi javascript yang menghasilkan JSX.
JSX itu sebenarnya cmn HTML yang ada dicampur dengan javascript didalamnya.

## layer/ lapisan komponen

framework yg dipake punya hirarki yang terdiri dari kompoen-komponen.
hirarki paling tinggi itu akan mempengharui seluru komponen yang dibawahnya.
file /src/pages/\_app.tsx itu komponen hirarki paling tinggi.
dan dibahawa komponen ini itu halaman-halaman di ini aplikasi.
typescript, untuk support tipe datanya dan typesafety
ada beberapa code yang digunakan pada satu file tetapi di deklarasikan difile lain dan diimport difile yg ingin dipakai
