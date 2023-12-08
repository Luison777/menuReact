"use client"
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter();
  return (
    <>
    <p className="text-white">esta es la pagina principal</p>
    <button className='bg-white' onClick={()=>{router.push('/menu/favorites')}}>Menu</button>
    </>
  )
}
