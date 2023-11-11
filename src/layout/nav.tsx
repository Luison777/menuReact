'use client'
import '@/app/globals.css'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'


export default function Nav(){
    const pathname = usePathname();
    const router = useRouter()

    return(
        <>
       <nav className="w-full h-28 rounded-t-lg px-2 border-t-2">
            <ul className="flex items-center h-full overflow-x-auto text-black py-2">
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/'? 'shadow-inner shadow-black shadow-md ':''}`} onClick={()=>router.push('/')}>
                        Favorites
                </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/apetizers'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/apetizers')}>
                        Apetizers
                </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/especialidades'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/especialidades')}>
                        Especialidades
                </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/best'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/best')}>
                        Mexico's Best
                </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/chicken'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/chicken')}>
                        Chicken Dishes
                </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/grill'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/grill')}>
                        From the Grill
                </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/seafood'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/seafood')}>
                    Mariscos/ <br />Seafood Plates </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/casasFavorites'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/casasFavorites')}>
                    Casa's <br />Favorite dishes </li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/sideOrders'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/sideOrders')}>
                    Side Orders</li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/desserts'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/desserts')}>
                    Desserts</li>
                <li className={`text-center h-full flex items-center p-2 ${pathname=='/mixedDrinks'? 'shadow-inner shadow-black shadow-md ':''}`}  onClick={()=>router.push('/mixedDrinks')}>
                    Mixed Drinks</li>
            </ul>
        </nav>
 
        </>
    );
}