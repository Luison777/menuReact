"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect, useContext } from 'react';

import { createSubSection } from '@/services/request';
import { MemoryContext } from '@/services/memory';

interface Section {
    id: number;
    name: string;
    value:string;
    subsections:string;
  }
  interface Sections {
    orden: number[];
    objetos: Record<string, Section>;
  }

export default function CreatesubSection(){
    const contexto = useContext(MemoryContext);
    const [preview,setPreview]=useState({
        value:''
    });
    const [selectedValue, setSelectedValue] = useState('');
    const [response, setResponse] = useState('');
   

    async function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const inputValue = formData.get('value') as string;
        const formJson={
            subsections:contexto?.state.subsections[selectedValue].join(',')+','+inputValue
        }
        const result=await createSubSection(formJson,inputValue,selectedValue);
        console.log(result  );
        contexto?.callbackReducer({type:'createSubsection',dataSection:result});
        if(result.id){
            setResponse('create succesfully');
            setTimeout(()=>setResponse(''),2000);
        }else{setResponse('something wrog has ocurred');
            setTimeout(()=>setResponse(''),2000);}

    }
    function onPreview (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = event.target;
        setPreview({
            ...preview,
            [name]: value   
          });
       
    }
    function section(event:ChangeEvent<HTMLSelectElement>){
        setSelectedValue(event.target.value);
       
  
    }

    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for creating new subsections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">    
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some section for create a new subsection:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                        <option  value={''}>{'Selecciona una seccion'}</option>
                        {contexto?.state.order.map((section,id)=> 
                        <option key={id} value={section}>{contexto.state.subsections[section][0]}</option> 
                        )}
                    </select>
                </div>
                <form className="w-full h-full mb-2 lg:mb-0" method='post' onSubmit={done} encType="multipart/form-data">
                    <div className="flex mb-2">
                        <p>Name of the new subsection: </p>
                        <input className=" shadow shadow-black rounded ml-2 w-full" required name="value" type="text" onChange={onPreview}/>
                    </div>
                    <button  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded shadow shadow-black h-10 text-white" type="submit">Done</button>
                </form>
            </div>
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 text-center bg-black ">
                <p className='w-full text-white'>Preview</p> 
                <div className='flex justify-center items-center h-full'>
                  <p  className="w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">{preview.value}</p>
                </div>
            </div>
            <p className='w-full text-center mt-2 text-green-500'>{response}</p>
        </div>
    )
}