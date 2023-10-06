import type { Metadata } from 'next'

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
      <body>
        {children}
      </body>
    </html>
  )
}