'use client'
import '@/app/globals.css'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useContext, useEffect} from 'react';
import Image from 'next/image'
import { readData } from '@/services/request';
import { MemoryContext } from '@/services/memory';


interface Section {
        id: number;
        name: string;
        subsections:string;
      }
type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

        export default function Nav(){
        const contexto = useContext(MemoryContext);
        const pathname = usePathname();
        const router = useRouter();
        const style='text-center h-full flex items-center p-2 ';
        const active='shadow-inner shadow-white rounded';
        const imageStyle = {
            objectFit: 'cover' as ObjectFit,
        }
            useEffect(() => {
                if(contexto?.state.sections.length==0){
                readData('/CRUD/sections')
                    .then((data:Section[]) => {
                        contexto?.callbackReducer({type:'readSections',data1:data})  
                   })
                    .catch(error => {
                        console.error('Error al obtener los datos:', error);
                    });}
                
            }, [contexto]);

        return(
        <>
       <nav className={`w-full h-16 rounded-t-lg fixed bottom-0 z-50 text-white  pt-[2px] overflow-hidden border-t-2`}>
       <Image src="/parednegra.webp" alt="pared" fill={true} style={imageStyle} priority={true}/>
            <ul className="flex justify-around	  h-[93%] overflow-x-auto p-1 Lobster relative z-50 rounded">
                {contexto?.state.sections.map((section)=>
                <li key={section} className={`${style} ${pathname==section? active:''}`} onClick={()=>router.push('/'+contexto.state.subsections[section].join('/').replace(/[^a-zA-Z_/]/g, '').toLowerCase())}>
                        <button className='neon whitespace-nowrap  lg:text-xl'>{contexto?.state.subsections[section]?.[0].replace(/_/g, ' ')}</button>
                </li>
                )}
              
            </ul>
        </nav>
 
        </>
    );
}