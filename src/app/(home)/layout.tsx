import '@/app/globals.css'
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
        {children}
        
      </body>
    </html>
  )
}
