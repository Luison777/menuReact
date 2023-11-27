"use client"
import '@/app/globals.css'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const router=useRouter();
  return (
          <main className="w-full h-full p-2 ">
            <div className="flex justify-between w-full mb-2 text-white text-lg">
              <button onClick={()=> router.push('/admin/logged/create')} className={`flex-1 h-10 rounded shadow shadow-black mr-2 bg-gradient-to-r from-lime-400 to-lime-500 ${pathname=='/admin/logged/create'? 'border-4 border-black':'' }`}>
                Create</button>
              <button onClick={()=> router.push('/admin/logged/update')} className={`flex-1 h-10 rounded shadow shadow-black mr-2 bg-gradient-to-r from-cyan-500 to-blue-500 ${pathname=='/admin/logged/update'? 'border-4 border-black':'' }`}>
                Update</button>
              <button onClick={()=> router.push('/admin/logged/delete')} className={`flex-1 h-10 rounded shadow shadow-black bg-gradient-to-r from-red-500 to-red-600 ${pathname=='/admin/logged/delete'? 'border-4 border-black':'' }`}>
                Delete</button>
            </div>
            {children}
          </main>
  )
}
