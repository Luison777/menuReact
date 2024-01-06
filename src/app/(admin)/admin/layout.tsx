import '@/app/globals.css'
import MemoryComponent from '@/services/memory'
export const metadata = {
  title: 'Admin Page',
  description: 'Only for Casa Mexicana Admins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-white to-neutral-300'>
        <MemoryComponent>
        {children}
        </MemoryComponent>
      </body>
    </html>
  )
}
