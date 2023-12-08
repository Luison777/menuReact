'use client'
import '@/app/globals.css'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState} from 'react';
import Image from 'next/image'
import { dishesRequest } from '@/services/request';

interface Section {
        id: number;
        name: string;
        value:string;
      }
interface Sections {
        orden: number[];
        objetos: Record<string, Section>;
      }
        export default function Nav(){
        const pathname = usePathname();
        const router = useRouter();
        const style='text-center h-full flex items-center p-2 ';
        const active='shadow-inner shadow-white rounded';
        const [sections,setSections]=useState<Sections>({
                orden:[],
                objetos:{}
            });
            useEffect(() => {
                dishesRequest('/sections')
                    .then((data:Section[]) => {
                        let newSections={
                            orden: data.map((dish)=>dish.id),
                            objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
                        }
                        setSections(newSections);
                   })
                        
                    .catch(error => {
                        console.error('Error al obtener los datos:', error);
                    });
            }, []);

        return(
        <>
       <nav className={`w-full h-16 rounded-t-lg fixed bottom-0 z-50 text-white  pt-[2px] overflow-hidden border-t-2`}>
       <Image src="/parednegra.webp" alt="pared" fill={true} objectFit="cover" />
            <ul className="flex items-center  h-[93%] overflow-x-auto p-1 Lobster relative z-50 rounded">
                {sections.orden.map((id)=>
                <li key={id} className={`${style} ${pathname=='/'? active:''}`} onClick={()=>router.push('/menu/'+sections.objetos[id].value)}>
                        <button className='neon whitespace-nowrap'>{sections.objetos[id].name}</button>
                </li>
                )}
              
            </ul>
        </nav>
 
        </>
    );
}