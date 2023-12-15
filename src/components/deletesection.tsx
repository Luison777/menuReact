"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';
import { createDish} from '@/services/request';
import { dishesRequest} from '@/services/request';

interface Section {
    id: number;
    name: string;
    value:string;
  }
  interface Sections {
    orden: number[];
    objetos: Record<string, Section>;
  }
export default function DeleteSection(){
    const [preview,setPreview]=useState({
        name:''
    });
    const [selectedValue, setSelectedValue] = useState('');
    const [response, setResponse] = useState('');
    const [sections,setSections]=useState<Sections>({
        orden:[],
        objetos:{}
    });

    function deleteDishButton(){
        console.log(selectedValue,sections.objetos[selectedValue].name);
    }
 
 
    function section(event:ChangeEvent<HTMLSelectElement>){
        setSelectedValue(event.target.value);
  
    }
 
    useEffect(() => {
        dishesRequest('/sections')
            .then((data:Section[]) => {
                
                let newSections={
                    orden: data.map((dish)=>dish.id),
                    objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
                }

                setSections(newSections);
                setSelectedValue('/'+data[0].value);})
                
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for delete sections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">   
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some section for delete:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                        {sections.orden.map(id=> 
                        <option key={id} value={id}>{sections.objetos[id]?.name}</option> 
                        )}
                    </select>
                </div>
                <div className='w-full text-center text-red-500  '>
                    <p className='h-14 ml-2 text-center text-red-500'>This action will delete the selected option.
                    Please ensure that you have selected the correct option.</p>           
                    <button onClick={deleteDishButton} className='bg-white text-black border-8 border-red-500 w-full h-10 rounded shadow shadow-black text-lg  hover:bg-red-500 hover:text-white '>
                        DELETE</button>
                    <p className={`${response!==''? 'text-green/500':'' } mt-10`}>{response}</p>
                </div>       
            </div>
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 text-center  bg-black ">
                <p className='w-full text-white'>Preview</p> 
                <div className='flex justify-center items-center h-full'>
                    <p className='neon text-white Lobster text-2xl'>{preview.name}</p>
                </div>
            </div>
            <p className='w-full text-center mt-2 text-green-500'>{response}</p>
        </div>
    )
}