import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'CapApp',
  description: 'Capitalize your text in many different ways',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-arial-sans leading-[24px] text-[18px] bg-[#FFC914]">
        {children}
      </body>
    </html>
  )
}