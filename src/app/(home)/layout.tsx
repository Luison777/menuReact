import '@/app/globals.css'
import Nav from '@/layout/nav'
import Header from '@/layout/header'
import Main from '@/layout/main'
import Footer from '@/layout/footer'
import MemoryComponent from '@/services/memory'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <MemoryComponent>
          <Header></Header>
          <Nav></Nav>
          <Main>
            {children}
          </Main>
          <Footer></Footer>
        </MemoryComponent>
      </body>
    </html>
  )
}
