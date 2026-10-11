// 1. Pastikan dua baris import ini ada di paling atas file!
import { Open_Sans } from 'next/font/google';
import './globals.css'; // Sesuaikan jika nama file CSS globalmu berbeda

// 2. Definisikan variabel openSans agar bisa dibaca oleh JavaScript
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// 3. Ini adalah komponen utama Layout kamu
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Sekarang variabel openSans di bawah ini tidak akan error lagi */}
      <body className={openSans.className}>
        
        {/* Background Gambar Utama */}
        <div className="bg-home bg-no-repeat bg-cover min-h-screen">
          
          {/* Overlay Warna Cokelat dari Langkah 6 */}
          <div className="bg-brown w-screen min-h-screen">
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}