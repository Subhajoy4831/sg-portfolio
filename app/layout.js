import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Subhajoy Ghosh',
  description: 'A showcase of my work and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#020C1B] text-white`}>{children}</body>
    </html>
  )
}

