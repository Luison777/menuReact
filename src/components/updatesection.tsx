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
export default function UpdateSection(){
    const [preview,setPreview]=useState({
        name:''
    });
    const [selectedValue, setSelectedValue] = useState('');
    const [response, setResponse] = useState('');
    const [sections,setSections]=useState<Sections>({
        orden:[],
        objetos:{}
    });


    async function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
       // setResponse(createResponse);
       // setTimeout(()=>setResponse(''),2000);

    }
    function onPreview (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = event.target;
        console.log(name,value);
        setPreview({
            ...preview,
            [name]: value   
          });
       
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
                console.log(newSections);
                setSections(newSections);
                setSelectedValue('/'+data[0].value);})
                
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for update name sections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">   
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some section for update name:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                        {sections.orden.map(id=> 
                        <option key={id} value={'/'+sections.objetos[id]?.value}>{sections.objetos[id]?.name}</option> 
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