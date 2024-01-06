"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect, useContext } from 'react';
import CardFood from "@/components/cardfood";
import { createDish} from '@/services/request';
import { readData} from '@/services/request';
import { MemoryContext } from '@/services/memory';

interface Section {
    id: number;
    name: string;
    subsections:string;
  }
  interface Sections {
    orden: number[];
    objetos: Record<string, Section>;
  }

export default function CreateDish(){
    const contexto = useContext(MemoryContext);
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:'',srcName:''
    });
    const [response, setResponse] = useState('');
    const [sectionChoosed, setSectionChoosed] = useState<string>('');
    const [subsectionChoosed, setSubsectionChoosed] = useState<string>('');
  
    //este codigo obtiete los datos de secciones y subsecciones de la base de datos y los carga en la memoria
    useEffect(() => {
        readData('/CRUD/sections')
            .then((data:Section[]) => {
                contexto?.callbackReducer({type:'readSections',data1:data})  
           })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, [contexto]);
    
    async function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const fileObject = formData.get('src')as File;
        const fileName = fileObject?.name;
        const json=Object.fromEntries(formData.entries());
        json.src=fileName;
        const response= await createDish(subsectionChoosed, json);
        setResponse(response);
        setTimeout(()=>setResponse(''),2000);

    }
    
    function sectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const value=event.target.value;
        setSectionChoosed(value);

    }
    async function subsectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const value=event.target.value;
        setSubsectionChoosed(value);

    }
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        const file = e.target.files && e.target.files[0];
       
        if (file) {
            const imageName = file.name;
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview({
                    ...preview,
                    src: reader.result as string, 
                    srcName: imageName
                });
               
            };
            reader.readAsDataURL(file);
        }
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
            <p className='w-full text-center my-2 text-cyan-600'>This section is only for creating new dishes in a specified area.</p>
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='mr-2 text-center' >Select some section:</p>
                <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={sectionFunc}>
                    <option  value={''}>{'Selecciona una seccion'}</option> 
                    {contexto?.state.sections.map(section=> 
                    <option key={section} value={section}>{section}</option> 
                    )}
                </select>
                <p className='mr-2 text-center' >Select some subsection:</p>
                <select name="subsection" className=" rounded shadow shadow-black mb-2 w-full" onChange={subsectionFunc} >
                    <option  value={''}>{sectionChoosed!==''? 'Selecciona una subseccion':'Selecciona una seccion primero'}</option> 
                    {contexto?.state.subsections[sectionChoosed]?.map((sub,indx)=> 
                    <option key={indx} value={sub.replace(/[^a-zA-Z_]/g,'').toLowerCase()}>{sub}</option> 
                    )}
                </select>
            </div>
            <form className="w-full lg:mr-2 lg:w-[49%] h-full mb-2 lg:mb-0" method='post' onSubmit={done} encType="multipart/form-data">
                
                <div className="flex mb-2">
                    <p>Name: </p>
                    <input className=" shadow shadow-black rounded ml-2 w-full" name="dish" type="text" onChange={onPreview}/>
                </div>
                <div className="mb-2">
                    <p>Description: </p>
                    <textarea name="ingredients" id="ingredients" cols={1} rows={1} className="shadow shadow-black rounded h-16 w-full" onChange={onPreview}>
                    </textarea>
                </div>
                <div className="flex mb-2">
                    <p>Price: </p>
                    <input className="shadow shadow-black rounded ml-2 w-full" type="text" name="price" onChange={onPreview} />
                </div>
                <div className="flex mb-2">
                    <p>Picture:</p>
                    <input required className="shadow shadow-black rounded ml-2 w-full p-2" type="file" accept="image/*" name="src" onChange={handleImageChange} />
                </div>
                <button  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded shadow shadow-black h-10 text-white" type="submit">Done</button>
            </form>
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 text-center min-h-[250px] bg-black ">
                <p className='w-full text-white'>Preview</p> 
                <div className='flex justify-center'>
                    <CardFood src={preview.src} dish={preview.dish} ingredients={preview.ingredients} price={preview.price} ></CardFood>
                </div>
            </div>
            <p className='w-full text-center mt-2 text-green-500'>{response}</p>
        </div>
    )
}