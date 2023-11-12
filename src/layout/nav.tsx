'use client'
import '@/app/globals.css'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'



        export default function Nav(){
        const pathname = usePathname();
        const router = useRouter()
     

        

    return(
        <>
       <nav className={`w-full h-16 rounded-t-lg px-2 border-t-2 bg-white fixed bottom-0 z-50`}>
            <ul className="flex items-center h-[93%] overflow-x-auto text-black p-1">
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/'? 'shadow-inner shadow-black ':''}`} onClick={()=>router.push('/')}>
                        Favorites
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/apetizers'? 'shadow-inner shadow-black':''}`}  onClick={()=>router.push('/apetizers')}>
                        Appetizers
                </li>
                <li className={`text-center h-full flex items-center p-2   ${pathname=='/especialidades'? 'shadow-inner shadow-black  ':''}`}  onClick={()=>router.push('/especialidades')}>
                        Especialidades
                </li>
                <li className={`text-center h-full flex items-center p-2   ${pathname=='/childs'? 'shadow-inner shadow-black  ':''}`}  onClick={()=>router.push('/childs')}>
                       Child's Menu
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/best'? 'shadow-inner shadow-black  ':''}`}  onClick={()=>router.push('/best')}>
                        Mexico's Best
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/chicken'? 'shadow-inner shadow-black  ':''}`}  onClick={()=>router.push('/chicken')}>
                        Chicken Dishes
                </li>
                <li className={`text-center h-full whitespace-nowrap flex items-center p-2  ${pathname=='/grill'? 'shadow-inner shadow-black ':''}`}  onClick={()=>router.push('/grill')}>
                        From the <br /> Grill
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/seafood'? 'shadow-inner shadow-black ':''}`}  onClick={()=>router.push('/seafood')}>
                         Seafood 
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/casasFavorites'? 'shadow-inner shadow-black ':''}`}  onClick={()=>router.push('/casasFavorites')}>
                        Casa's <br />Favorite 
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/sideOrders'? 'shadow-inner shadow-black  ':''}`}  onClick={()=>router.push('/sideOrders')}>
                        Side Orders
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/desserts'? 'shadow-inner shadow-black  ':''}`}  onClick={()=>router.push('/desserts')}>
                        Desserts
                </li>
                <li className={`text-center h-full flex items-center p-2  ${pathname=='/mixedDrinks'? 'shadow-inner shadow-black':''}`}  onClick={()=>router.push('/mixedDrinks')}>
                        Mixed Drinks
                </li>
            </ul>
        </nav>
 
        </>
    );
}