"use client"
import '@/app/globals.css'
import { useRouter } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router=useRouter();
  return (
    <html lang="en" className="w-full h-full">
      <body className="w-full h-full">
          <main className="w-full h-full p-2">
            <div className="flex justify-between w-full mb-2">
              <button onClick={()=> router.push('/admin/logged/create')} className="flex-1 h-10 rounded shadow shadow-black mr-2">Create</button>
              <button onClick={()=> router.push('/admin/logged/update')} className="flex-1 h-10 rounded shadow shadow-black mr-2">Update</button>
              <button onClick={()=> router.push('/admin/logged/delete')} className="flex-1 h-10 rounded shadow shadow-black ">Delete</button>
            </div>
            {children}
          </main>
      </body>
    </html>
  )
}
