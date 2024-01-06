"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';
import {  put, readData} from '@/services/request';


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
  interface SubsectionChoosed{
    name:string;
  }
export default function UpdateSubsection(){
    const [preview,setPreview]=useState({
        value:''
    });
    const [sectionChoosed, setSectionChoosed] = useState('');
    const [response, setResponse] = useState('');
    const [sectionsDB,setSectionsDB]=useState<Sections>({
        orden:[],
        objetos:{}
    });
    const[subsectionDB,setSubsectionDB]=useState<string[]>([]);
    const [subsectionChoosed, setSubsectionChoosed] = useState({name:''});

    async function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const inputValue = formData.get('value') as string;
        const subsectionsList=sectionsDB.objetos[sectionChoosed].subsections.split(',');
        const index=subsectionsList.indexOf(subsectionChoosed.name);
        subsectionsList[index]=inputValue;
        const value=subsectionsList.join('/');
        const subsections=subsectionsList.join(',');
        const formJson={
            value:value,
            subsections:subsections,
            name:subsectionChoosed.name.replace(/[^a-zA-Z]/g, '').toLowerCase(),
            newName:inputValue
        }
        const response=await put(`/sections/subsection/${sectionChoosed}`,formJson)
        setResponse(response);
        setTimeout(()=>setResponse(''),2000);

    }
    function onPreview (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = event.target;
        setPreview({
            ...preview,
            [name]: value   
          });
       
    }
    function section(event:ChangeEvent<HTMLSelectElement>){
        setSectionChoosed(event.target.value);
  
    }
    function subsectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const newSelectedValue:SubsectionChoosed={
            ...subsectionChoosed,
            name:event.target.value
        }
        setSubsectionChoosed(newSelectedValue);

    }
 
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for update name subsections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">    
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some section for update name of subsection:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                        {sectionsDB.orden.map(id=> 
                        <option key={id} value={id}>{sectionsDB.objetos[id].name}</option> 
                        )}
                    </select>
                </div>
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some subsection for update name:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={subsectionFunc}>
                        {subsectionDB.map((sub,indx)=> 
                        <option key={indx} value={sub}>{sub}</option> 
                        )}
                    </select>
                </div>
                <form className="w-full h-full mb-2 lg:mb-0" method='post' onSubmit={done} encType="multipart/form-data">
                    <div className="flex mb-2">
                        <p>New name of the subsection: </p>
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