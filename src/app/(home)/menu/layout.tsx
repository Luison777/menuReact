import '@/app/globals.css'
import Nav from '@/layout/nav'
import Header from '@/layout/header'
import Main from '@/layout/main'
import Footer from '@/layout/footer'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
        <Header></Header>
        <Nav></Nav>
        <Main>
          {children}
        </Main>
        <Footer></Footer>
        </>
  )
}
