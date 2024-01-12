"use client"
import { FormEvent,  useState,  ChangeEvent, useEffect, useContext } from 'react';
import CardFood from "@/components/cardfood";
import {  readData, updateDish } from '@/services/request';
import { MemoryContext } from '@/services/memory';
interface Dish {
    id: number;
    dish: string;
    ingredients: string;
    price: string;
    src: string;

  }

  interface Section {
    id: number;
    name: string;
    value:string;
    subsections:string;
  }
 
export default function UpdateDish(){
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:'',id:NaN
    });
    const contexto = useContext(MemoryContext);
    const [response, setResponse] = useState('');
    
    const [sectionChoosed, setSectionChoosed] = useState<string>('');
    const [subsectionChoosed, setSubsectionChoosed] = useState<string>('');
    
    async function done(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const fileObject = formData.get('src')as File;
        const fileName = fileObject?.name;
        const json=Object.fromEntries(formData.entries());
        json.src=fileName;
        const result=await updateDish(subsectionChoosed,json,preview.id.toString());
        console.log(result)
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
    function sectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const value=event.target.value;
        setSectionChoosed(value);
    }
    async function subsectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const value=event.target.value;
        setSubsectionChoosed(value);
        readData('/CRUD/' + value)
            .then((data: Dish[]) => {
              const newData={[value]:data}
              contexto?.callbackReducer({ type: 'readDishes', data2: newData });
            })
            .catch((error) => {
              console.error('Error al obtener los datos:', error);
            })

    }
    async function dishFunc(event: ChangeEvent<HTMLSelectElement>) {
        const value=parseInt(event.target.value);
        const dishSelected=contexto?.state.dishes[subsectionChoosed][value] as Dish
        setPreview({...dishSelected})
      }
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){

        const file = e.target.files && e.target.files[0];
       
        if (file) {            
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview({
                    ...preview,
                    src: reader.result as string, // Asigna el resultado de la lectura como el src de la imagen

                });
               
            };
            reader.readAsDataURL(file); // Lee la imagen como un data URL
        }
    }

    useEffect(() => {
        const dataFetch=()=>{
        if(contexto?.state.order && contexto.state.order.length <= 0){
        readData('/CRUD/sections')
            .then((data:Section[]) => {
                contexto?.callbackReducer({type:'readSections',data1:data})  
           })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });}}
        dataFetch();
    }, [contexto]);
  

    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mb-2 bg-gradient-to-r from-white to-neutral-300">
        <div className='w-full rounded shadow shadow-black p-2 mb-2'>
            <p className='mr-2 text-center' >Select some section:</p>
            <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={sectionFunc}>
                <option  value={''}>{'Selecciona una seccion'}</option> 
                {contexto?.state.order.map((section,id)=> 
                <option key={`section${id}`} value={section}>{contexto.state.subsections[section][0]}</option> 
                )}
           
            </select>
        </div>
        <div className='w-full rounded shadow shadow-black p-2 mb-6'>
            <p className='text-center'>Select some subsection:</p>
            <div>
            <select name="subsection" className=" rounded shadow shadow-black mb-2 w-full" onChange={subsectionFunc} >
                <option  value={''}>{sectionChoosed!==''? 'Selecciona una subseccion':'Selecciona una seccion primero'}</option>
                {contexto?.state.subsections[sectionChoosed]?.map((sub,indx)=> 
                <option key={indx} value={sub.replace(/[^a-zA-Z_]/g,'').toLowerCase()}>{sub}</option> 
                )}
            </select>
            </div>
        </div>
        <div className='w-full rounded shadow shadow-black p-2 mb-6'>
            <p className='text-center'>Select some dish:</p>
            <div>
            <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={dishFunc}>
                <option  value={''}>{subsectionChoosed!==''? 'Selecciona un platillo':'Selecciona una subseccion primero'}</option>
                {contexto?.state.dishes[subsectionChoosed]?.map((obj,id)=> 
                <option key={id} value={id}>{obj.dish}</option> 
                )}
           
            </select>
            </div>
        </div>
        <form className="w-full lg:mr-2 lg:w-[49%] h-full mb-2 lg:mb-0" method='post' onSubmit={done}>
            <div className="flex mb-2">
                <p>Name: </p>
                <input className="shadow shadow-black rounded ml-2 w-full" value={preview.dish} name="dish" type="text" onChange={onPreview}/>
            </div>
            <div className="mb-2">
                <p>Description: </p>
                <textarea name="ingredients"  value={preview.ingredients} cols={1} rows={1} className="shadow shadow-black rounded h-16 w-full" onChange={onPreview}>
                </textarea>
            </div>
            <div className="flex mb-2">
                <p>Price: </p>
                <input className="shadow shadow-black rounded ml-2 w-full" value={preview.price} type="text" name="price" onChange={onPreview} />
            </div>
            <div className="flex mb-2">
                <p>Picture:</p>
                <input className="shadow shadow-black rounded ml-2 w-full p-2"  type="file" accept="image/*" name="src" onChange={handleImageChange} />
            </div>
            <button  className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full rounded shadow shadow-black h-10 text-white" type="submit">
                Done</button>
        </form>
        <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 min-h-[250px] bg-black ">
            <p className='w-full text-white  text-center'>Preview</p> 
            <div className='flex justify-center'>
                <CardFood src={''} dish={preview.dish} ingredients={preview.ingredients} price={preview.price} ></CardFood>
            </div>
        </div>
        <p className='w-full text-center mt-2 text-green-500'>{''}</p>
    </div>
    )}