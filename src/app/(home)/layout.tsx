import '@/app/globals.css'
import type { Metadata } from 'next'


import Nav from '@/layout/nav'
import Header from '@/layout/header'
import Main from '@/layout/main'
import Footer from '@/layout/footer'

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
        <Header></Header>
        <Nav></Nav>
        <Main>
          {children}
        </Main>
        <Footer></Footer>
      </body>
    </html>
  )
}
