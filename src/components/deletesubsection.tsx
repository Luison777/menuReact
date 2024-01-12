"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect, useContext } from 'react';

import {  deleteSubsection, readData, } from '@/services/request';
import { MemoryContext } from '@/services/memory';

interface Section {

    subsections:string;
  }

export default function DeleteSubsection(){
    const contexto = useContext(MemoryContext);
    const [preview,setPreview]=useState({
        name:''
    });
    const [sectionChoosed, setSectionChoosed] = useState('');
    const [response, setResponse] = useState('');
    const [subsectionChoosed, setSubsectionChoosed] = useState('');

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
    async function deleteDishButton(){
        
        const subsectionsList=contexto?.state.subsections[sectionChoosed] as string[];
        const copysubsectionsList=[...subsectionsList];
        const subsectionIndex=copysubsectionsList.indexOf(subsectionChoosed);
        copysubsectionsList.splice(subsectionIndex,1);
        const newData:Section={subsections:copysubsectionsList.join(',')};
        console.log(subsectionChoosed,sectionChoosed,newData);
        const response=await deleteSubsection(subsectionChoosed,sectionChoosed,newData);
        setResponse(response);
        setTimeout(()=>setResponse(''),2000);
    }
    function subsectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const value=event.target.value;
        setSubsectionChoosed(value);

    }

    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for delete subsections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">    
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some section for delete a subsection:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                        <option  value={''}>{'Selecciona una seccion'}</option> 
                        {contexto?.state.order.map((section,id)=> 
                        <option key={`section${id}`} value={section}>{contexto.state.subsections[section][0]}</option> 
                        )}
                    </select>
                </div>
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some subsection delete:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={subsectionFunc}>
                        <option  value={''}>{sectionChoosed!==''? 'Selecciona una subseccion':'Selecciona una seccion primero'}</option> 
                        {contexto?.state.subsections[sectionChoosed]?.map((sub,indx)=> 
                        <option key={indx} value={sub.replace(/[^a-zA-Z_]/g,'').toLowerCase()}>{sub}</option> 
                        )}
                    </select>
                </div>
                <div className='w-full text-center text-red-500  '>
                    <p className='h-14 ml-2 text-center text-red-500'>This action will delete the selected option.
                    Please ensure that you have selected the correct option.</p>           
                    <button onClick={deleteDishButton}  className='bg-white text-black border-8 border-red-500 w-full h-10 rounded shadow shadow-black text-lg  hover:bg-red-500 hover:text-white '>
                        DELETE</button>
                    <p className={`${response!==''? 'text-green/500':'' } mt-10`}>{response}</p>
                </div>           
            </div>
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 text-center bg-black ">
                <p className='w-full text-white'>Preview</p> 
                <div className='flex justify-center items-center h-full'>
                  <p  className="w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">{preview.name}</p>
                </div>
            </div>
            <p className='w-full text-center mt-2 text-green-500'>{response}</p>
        </div>
    )
}