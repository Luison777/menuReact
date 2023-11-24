"use client"

import { FormEvent,  useState,  ChangeEvent } from 'react';
import CardFood from "@/components/cardfood";
export default function CreatePage(){
    const [preview,setPreview]=useState({
        name:'', description:'', price:'', image:''
    });

    function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
    }
    function onPreview (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = event.target;
        setPreview({
            ...preview,
            [name]: value   
          });
       
    }
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mb-2 bg-gradient-to-r from-white to-neutral-300">
            <form className="w-full lg:mr-2 lg:w-[49%] h-full mb-2 lg:mb-0" method='post' onSubmit={done}>
                <div className="flex mb-2">
                    <p>Name: </p>
                    <input className=" shadow shadow-black rounded ml-2 w-full" name="name" type="text" onChange={onPreview}/>
                </div>
                <div className="mb-2">
                    <p>Description: </p>
                    <textarea name="description" id="ingredients" cols={1} rows={1} className="shadow shadow-black rounded h-16 w-full bg-white" onChange={onPreview}>
                    </textarea>
                </div>
                <div className="flex mb-2">
                    <p>Price: </p>
                    <input className="shadow shadow-black rounded ml-2 w-full" type="text" name="price" onChange={onPreview} />
                </div>
                <div className="flex mb-2">
                    <p>Picture:</p>
                    <input className="shadow shadow-black rounded ml-2 w-full p-2" type="file" accept="image/*" name="image" onChange={onPreview} />
                </div>
                <button  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded shadow shadow-black h-10 text-white" type="submit">Done</button>
            </form>
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 text-center min-h-[250px] bg-black ">
                <p className='w-full text-white'>Preview</p> 
                <div className='flex justify-center'>
                    <CardFood src={preview.image} dish={preview.name} ingredients={preview.description} price={preview.price} ></CardFood>
                </div>
            </div>
            
        </div>
    )
}