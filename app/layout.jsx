import { Caveat } from "next/font/google";
import '@ant-design/v5-patch-for-react-19';
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata = {
  title: "RupaKoe | Cek Kulit Wajah Gratis Online",
  description: "Cek Kulit Wajah Gratis Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${caveat.variable}`}>{children}</body>
    </html>
  );
}
