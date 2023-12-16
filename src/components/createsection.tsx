"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';

import { dishesRequest, post} from '@/services/request';

export default function CreateSection(){
    const [preview,setPreview]=useState({
        name:''
    });

    const [response, setResponse] = useState('');

    async function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const inputValue = formData.get('name') as string;
        const formJson = {
            name:inputValue,
            value:inputValue.replace(/[^a-zA-Z]/g, '').toLowerCase(),
            subsections:inputValue,
        }
  
        const response=await post('/sections/section',formJson)

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
 
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for creating new sections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">   
                <form className="w-full h-full mb-2 lg:mb-0" method='post' onSubmit={done} encType="multipart/form-data">
                    <div className="flex mb-2">
                        <p>Name of the new section: </p>
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