"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';
import CardFood from "@/components/cardfood";
import { createDish} from '@/services/request';
import { dishesRequest} from '@/services/request';

interface Section {
    id: number;
    name: string;
    subsections:string;
  }
  interface Sections {
    orden: number[];
    objetos: Record<string, Section>;
  }
  interface SectionChoosed{
    id:number;
    name:string;
  }
  interface SubsectionChoosed{
    name:string;
  }
export default function CreateDish(){
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:'',srcName:''
    });
    const [response, setResponse] = useState('');
    const [sectionsDB,setSectionsDB]=useState<Sections>({
        orden:[],
        objetos:{}
    });
    const[subsectionDB,setSubsectionDB]=useState<string[]>([]);
    const [sectionChoosed, setSectionChoosed] = useState<SectionChoosed>({id:NaN,name:''});
    const [subsectionChoosed, setSubsectionChoosed] = useState<SubsectionChoosed>({name:''});
  
    //este codigo obtiete los datos de secciones y subsecciones de la base de datos
    useEffect(() => {
        dishesRequest('/sections')
            .then((data:Section[]) => {
                let newSections={
                    orden: data.map((dish)=>dish.id),
                    objetos:data.reduce((objeto,section)=>({...objeto,[section.id]:section}),{})
                }
                setSectionsDB(newSections);

                setSectionChoosed((prev)=>(
                    {...prev,
                    id:data[0].id,
                    name:data[0].name.replace(/\s/g, '').toLowerCase()
                    }));
            })
                
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);
    //este codigo carga las subsecciones cuando se elige una seccion
    useEffect(() => {
        if(sectionsDB.objetos[sectionChoosed.id]){
        const subsectionsList=sectionsDB.objetos[sectionChoosed.id].subsections.split(',');
        setSubsectionDB(subsectionsList);
        }
    }, [sectionChoosed]);

    async function done(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const createResponse= await createDish('/'+subsectionChoosed.name, formData);
        setResponse(createResponse);
        setTimeout(()=>setResponse(''),2000);

    }
    function onPreview (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = event.target;
        setPreview({
            ...preview,
            [name]: value   
          });
       
    }
    function sectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const newSelectedSection:SectionChoosed={
            id:parseInt(event.target.value, 10),
            name:sectionsDB.objetos[event.target.value].name.replace(/[^a-zA-Z]/g, '').toLowerCase() 
        }
        setSectionChoosed(newSelectedSection);

    }
    function subsectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const newSelectedValue:SubsectionChoosed={
            ...subsectionChoosed,
            name:event.target.value
        }
        setSubsectionChoosed(newSelectedValue);

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
 
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mb-2 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full text-center my-2 text-cyan-600'>This section is only for creating new dishes in a specified area.</p>
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='mr-2 text-center' >Select some section:</p>
                <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={sectionFunc}>
                    {sectionsDB.orden.map(id=> 
                    <option key={id} value={id}>{sectionsDB.objetos[id]?.name}</option> 
                    )}
                </select>
                <p className='mr-2 text-center' >Select some subsection:</p>
                <select name="subsection" className=" rounded shadow shadow-black mb-2 w-full" onChange={subsectionFunc} >
                    {subsectionDB.map((sub,indx)=> 
                    <option key={indx} value={sub.replace(/\s/g, '').toLowerCase()}>{sub}</option> 
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