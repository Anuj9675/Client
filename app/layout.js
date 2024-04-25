import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MOONLIT",
  description: "Our organization hosts daily BGMI scrims, offering you unlimited fun. Register your team now to participate in the excitement and Secure your spot now. Elevate your gaming experience to the next level! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
