import "./globals.css";
import { Montserrat } from "next/font/google";
import { AOSInit } from './aos'

const montserrat = Montserrat({weight:['300','500','700'], subsets: ["latin"] });

export const metadata = {
  title: "Binary a Decimal",
  description: "Binary to Decimal and Decimal to Binary app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <AOSInit/>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
