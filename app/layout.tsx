import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'MEGOGO - Фільми, серіали, мультфільми онлайн',
  description: 'Дивіться фільми, серіали, мультфільми та ТВ онлайн в HD якості на MEGOGO. Великий вибір контенту українською мовою.',
  keywords: 'фільми онлайн, серіали, мультфільми, ТВ, MEGOGO, стрімінг',
  openGraph: {
    title: 'MEGOGO - Фільми, серіали, мультфільми онлайн',
    description: 'Дивіться фільми, серіали, мультфільми та ТВ онлайн в HD якості на MEGOGO',
    type: 'website',
    locale: 'uk_UA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}