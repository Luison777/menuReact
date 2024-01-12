"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect, useContext } from 'react';
import {  updateSectionFunc} from '@/services/request';
import { MemoryContext } from '@/services/memory';

interface Section {
    name:string;
    subsections:string;
  }
 
 
export default function UpdateSection(){
    const contexto = useContext(MemoryContext);
    const [preview,setPreview]=useState({
        name:''
    });
    const [sectionChoosed, setSectionChoosed] = useState('');
    const [response, setResponse] = useState('');
  

    async function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const firstValue = formData.values().next().value;
        const oldName=contexto?.state.subsections[sectionChoosed][0] as string
        const subsectionsList=contexto?.state.subsections[sectionChoosed] as string[];
        const copysubsectionsList=[...subsectionsList];
        copysubsectionsList[0]=firstValue;
        const newData:Section={name:firstValue.replace(/\s/g, '_'),subsections:copysubsectionsList.join(',')};
        const result=await updateSectionFunc(oldName,newData.name,sectionChoosed,newData)
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
        const value=event.target.value;
        setSectionChoosed(value);
    }
 

    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for update name sections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">   
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some section for update name:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                        <option  value={''}>{'Selecciona una seccion'}</option> 
                        {contexto?.state.order.map((section,id)=> 
                        <option key={`section${id}`} value={section}>{contexto.state.subsections[section][0]}</option> 
                        )}
                    </select>
                </div>
                <form className="w-full h-full mb-2 lg:mb-0" method='post' onSubmit={done} encType="multipart/form-data">
                    <div className="flex mb-2">
                        <p>New name of the section: </p>
                        <input className=" shadow shadow-black rounded ml-2 w-full" required name="name" type="text" onChange={onPreview}/>
                    </div>
                    <button  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded shadow shadow-black h-10 text-white" type="submit">Done</button>
                </form>
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