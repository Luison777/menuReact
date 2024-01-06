import '@/app/globals.css'
import MemoryComponent from '@/services/memory'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casa Mexicana Menu',
  description: 'Mexican food Restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <MemoryComponent>
        {children}
        </MemoryComponent>
      </body>
    </html>
  )
}
