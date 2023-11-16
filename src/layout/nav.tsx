'use client'
import '@/app/globals.css'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


        export default function Nav(){
        const pathname = usePathname();
        const router = useRouter()
        const style='text-center h-full flex items-center p-2 ';
        const active='shadow-inner shadow-white rounded';
    
        

    return(
        <>
       <nav className={`w-full h-16 rounded-t-lg fixed bottom-0 z-50 text-white  pt-[2px] overflow-hidden border-t-2`}>
       <Image src="/parednegra.webp" alt="pared" fill={true} objectFit="cover" />
            <ul className="flex items-center  h-[93%] overflow-x-auto p-1 Lobster relative z-50 rounded">
                
              
                <li className={`${style} ${pathname=='/'? active:''}`} onClick={()=>router.push('/')}>
                       <button className='neon'> Favorites</button>
                </li>
                <li className={`${style} ${pathname=='/apetizers'? active:''}`}  onClick={()=>router.push('/apetizers')}>
                        <button className='neon'> Appetizers</button>
                </li>
                <li className={`${style}   ${pathname=='/especialidades'? active:''}`}  onClick={()=>router.push('/especialidades')}>
                        <button className='neon'> Especialidades</button>
                </li>
                <li className={`${style} ${pathname=='/childs'? active:''}`}  onClick={()=>router.push('/childs')}>
                        <button className='neon'> Child&apos;s Menu</button>
                </li>
                <li className={`${style} ${pathname=='/best'? active:''}`}  onClick={()=>router.push('/best')}>
                <button className='neon'>Mexico&apos;s Best</button>
                </li>
                <li className={`${style}  ${pathname=='/chicken'? active:''}`}  onClick={()=>router.push('/chicken')}>
                <button className='neon'>Chicken Dishes</button>
                </li>
                <li className={`${style} whitespace-nowrap  ${pathname=='/grill'? active:''}`}  onClick={()=>router.push('/grill')}>
                <button className='neon'>From the <br /> Grill</button>
                </li>
                <li className={`${style} ${pathname=='/seafood'? active:''}`}  onClick={()=>router.push('/seafood')}>
                <button className='neon'>Seafood </button>
                </li>
                <li className={`${style} ${pathname=='/casasFavorites'? active:''}`}  onClick={()=>router.push('/casasFavorites')}>
                <button className='neon'>Casa&apos;s <br />Favorite </button>
                </li>
                <li className={`${style}  ${pathname=='/sideOrders'? active:''}`}  onClick={()=>router.push('/sideOrders')}>
                <button className='neon'>Side Orders</button>
                </li>
                <li className={`${style} ${pathname=='/vegetarian'? active:''}`}  onClick={()=>router.push('/vegetarian')}>
                <button className='neon'>Vegetarian Dishes</button>
                </li>
                <li className={`${style}  ${pathname=='/combos'? active:''}`}  onClick={()=>router.push('/combos')}>
                <button className='neon'>Combos</button>
                </li>
                <li className={`${style}  ${pathname=='/desserts'? active:''}`}  onClick={()=>router.push('/desserts')}>
                <button className='neon'>Desserts</button>
                </li>
                <li className={`${style}  ${pathname=='/mixedDrinks'? active:''}`}  onClick={()=>router.push('/mixedDrinks')}>
                <button className='neon'>Mixed Drinks</button>
                 </li>
            </ul>
        </nav>
 
        </>
    );
}