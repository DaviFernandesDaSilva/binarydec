import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Binary a Decimal',
  description: 'Binary to Decimal and Decimal to Binary app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
