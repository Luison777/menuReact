"use client"

import { useState,  ChangeEvent, useEffect, useContext } from 'react';
import CardFood from "@/components/cardfood";
import { deleteDish,  imgRequest, readData } from '@/services/request';
import { MemoryContext } from '@/services/memory';
  interface Section {
    id: number;
    name: string;
    value:string;
    subsections:string;
  }

  interface Dish {
    id: number;
    dish: string;
    ingredients: string;
    price: string;
    src: string;

  }
export default function DeleteDish(){
  const contexto = useContext(MemoryContext);
  const [preview,setPreview]=useState({
    dish:'', ingredients:'', price:'', src:''
  });
  const [response, setResponse] = useState('');
  
  const [sectionChoosed, setSectionChoosed] = useState('');
  const [subsectionChoosed, setSubsectionChoosed] = useState('');
  const [dishChoosed, setDishChoosed] = useState('');
 

    async function deleteDishButton(){
  
        await deleteDish(subsectionChoosed,dishChoosed);
    
          setResponse('deleted succesfully');
          setTimeout(()=>setResponse(''),2000);
     
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
      setDishChoosed(event.target.value);
      const dishSelected=contexto?.state.dishes[subsectionChoosed][value] as Dish
      setPreview({...dishSelected})
    
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
        <div className=" rounded shadow shadow-black flex flex-wrap p-2  bg-gradient-to-r from-white to-neutral-300">
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
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='text-center'>Select some dish</p>
                <div>
                <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={dishFunc}>
                  <option  value={''}>{subsectionChoosed!==''? 'Selecciona un platillo':'Selecciona una subseccion primero'}</option>
                  {contexto?.state.dishes[subsectionChoosed]?.map((obj,id)=> 
                  <option key={id} value={obj.id}>{obj.dish}</option> 
                  )}
               
                </select>
                </div>
            </div>
           
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 bg-black mb-2 ">
                <p className='w-full text-white  text-center'>Preview</p> 
                <div className='flex justify-center'>
                    <CardFood src={preview.src} dish={preview.dish} ingredients={preview.ingredients} price={preview.price} ></CardFood>
                </div>
            </div>
            <div className='w-full lg:w-[48%] ml-2 text-center text-red-500  '>
                <p className='h-14 ml-2 text-center text-red-500'>This action will delete the selected option.
                 Please ensure that you have selected the correct option.</p>           
                <button onClick={deleteDishButton} className='bg-white text-black border-8 border-red-500 w-full h-10 rounded shadow shadow-black text-lg  hover:bg-red-500 hover:text-white '>
                    DELETE</button>
                <p className={`${response!==''? 'text-green/500':'' } mt-10`}>{response}</p>
            </div>
        </div>
    )
}