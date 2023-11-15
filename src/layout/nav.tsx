'use client'
import '@/app/globals.css'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


        export default function Nav(){
        const pathname = usePathname();
        const router = useRouter()
        const style='text-center h-full flex items-center p-2 neon';
        const active='shadow-inner shadow-white rounded';
        const imgStyle={objectFit: 'cover'}
        

    return(
        <>
       <nav className={`w-full h-16 rounded-t-lg fixed bottom-0 z-50 text-white bg-white pt-[2px] `}>
       <Image src="/pared2.jpg" alt="pared" fill={true} style={imgStyle} />
            <ul className="flex items-center justify-center h-[93%] overflow-x-auto p-1 Lobster relative z-50 rounded">
                <li className={`${style} ${pathname=='/'? active:''}`} onClick={()=>router.push('/')}>
                        Breakfast
                </li>
                <li className={`${style} ${pathname=='/main'? active:''}`}  onClick={()=>router.push('/main')}>
                        Main course
                </li>
                <li className={`${style}   ${pathname=='/desserts'? active:''}`}  onClick={()=>router.push('/desserts')}>
                        Desserts
                </li>
                <li className={`${style} ${pathname=='/drinks'? active:''}`}  onClick={()=>router.push('/drinks')}>
                       Drinks
                </li>
              
               { /*<li className={`${style} ${pathname=='/'? active:''}`} onClick={()=>router.push('/')}>
                        Favorites
                </li>
                <li className={`${style} ${pathname=='/apetizers'? active:''}`}  onClick={()=>router.push('/apetizers')}>
                        Appetizers
                </li>
                <li className={`${style}   ${pathname=='/especialidades'? active:''}`}  onClick={()=>router.push('/especialidades')}>
                        Especialidades
                </li>
                <li className={`${style} ${pathname=='/childs'? active:''}`}  onClick={()=>router.push('/childs')}>
                       Child's Menu
                </li>
                <li className={`${style} ${pathname=='/best'? active:''}`}  onClick={()=>router.push('/best')}>
                        Mexico's Best
                </li>
                <li className={`${style}  ${pathname=='/chicken'? active:''}`}  onClick={()=>router.push('/chicken')}>
                        Chicken Dishes
                </li>
                <li className={`${style} whitespace-nowrap  ${pathname=='/grill'? active:''}`}  onClick={()=>router.push('/grill')}>
                        From the <br /> Grill
                </li>
                <li className={`${style} ${pathname=='/seafood'? active:''}`}  onClick={()=>router.push('/seafood')}>
                         Seafood 
                </li>
                <li className={`${style} ${pathname=='/casasFavorites'? active:''}`}  onClick={()=>router.push('/casasFavorites')}>
                        Casa's <br />Favorite 
                </li>
                <li className={`${style}  ${pathname=='/sideOrders'? active:''}`}  onClick={()=>router.push('/sideOrders')}>
                        Side Orders
                </li>
                <li className={`${style} ${pathname=='/vegetarian'? active:''}`}  onClick={()=>router.push('/vegetarian')}>
                        Vegetarian Dishes
                </li>
                <li className={`${style}  ${pathname=='/combos'? active:''}`}  onClick={()=>router.push('/combos')}>
                        Combos
                </li>
                <li className={`${style}  ${pathname=='/desserts'? active:''}`}  onClick={()=>router.push('/desserts')}>
                        Desserts
                </li>
                <li className={`${style}  ${pathname=='/mixedDrinks'? active:''}`}  onClick={()=>router.push('/mixedDrinks')}>
                        Mixed Drinks
                 </li>*/}
            </ul>
        </nav>
 
        </>
    );
}