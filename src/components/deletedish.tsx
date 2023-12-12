"use client"

import { useState,  ChangeEvent, useEffect } from 'react';
import CardFood from "@/components/cardfood";
import { deleteDish, dishesRequest, imgRequest } from '@/services/request';


interface Dish {
    id: number;
    dish: string;
    ingredients: string;
    price: string;
    src: string;
  }
  
  interface Dishes {
    orden: number[];
    objetos: Record<string, Dish>;
  }
  interface Section {
    id: number;
    name: string;
    value:string;
  }
  interface Sections {
    orden: number[];
    objetos: Record<string, Section>;
  }
export default function DeleteDish(){
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:''
    });
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [response, setResponse] = useState('');

      const [dishes,setDishes]=useState<Dishes>({
        orden:[],
        objetos:{}
    });
    const [sections,setSections]=useState<Sections>({
      orden:[],
      objetos:{}
  });


    async function deleteDishButton(){
        if (selectedValue!==''){
        const result = await deleteDish(`${selectedValue}/${selectedOption}/${dishes.objetos[selectedOption].src}`);

        setResponse(result);
        setTimeout(()=>setResponse(''),2000);
        dishesRequest(selectedValue)
          .then((data: Dish[]) => {
            let newDishes = {
              orden: data.map((dish) => dish.id),
              objetos: data.reduce((objeto, dish) => ({ ...objeto, [dish.id]: dish }), {})
            };
            setDishes(newDishes);
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }else{
        setResponse('Please select some section and option first.');
        setTimeout(()=>setResponse(''),2000);
    }
      }
  
    function section(event:ChangeEvent<HTMLSelectElement>){
        setSelectedValue(event.target.value);
  
    }
    async function option(event:ChangeEvent<HTMLSelectElement>){
        setSelectedOption(event.target.value);
        try {
            const imgBlob= await imgRequest(dishes.objetos[event.target.value].src); // Aquí obtienes el Blob de la función imgRequest
            
            const imgUrl = URL.createObjectURL(imgBlob); // Conviertes el Blob en una URL
      
            setPreview({
              ...preview,
              dish:dishes.objetos[event.target.value].dish,
              price:dishes.objetos[event.target.value].price,
              ingredients:dishes.objetos[event.target.value].ingredients,
              src:imgUrl as string
            }) // Estableces la URL de la imagen en el estado setImage
          } catch (error) {
            console.error('Error fetching the image:', error);
          }
    }
    useEffect(() => {
        if (selectedValue !== '') {
      dishesRequest(selectedValue)
          .then((data:Dish[]) => {
              let newDishes={
                  orden: data.map((dish)=>dish.id),
                  objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
              }
              setDishes(newDishes);
              setSelectedOption(data[0].dish);  
                setPreview({
                    ...preview,
                    dish: data[0].dish,
                    price:data[0].price,
                    ingredients:data[0].ingredients,
                    src:''
               });
          })
          .catch(error => {
              console.error('Error al obtener los datos:', error);
          });}
 }, [selectedValue]);
  useEffect(() => {
    dishesRequest('/sections')
        .then((data:Section[]) => {
            let newSections={
                orden: data.map((dish)=>dish.id),
                objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
            }
            setSections(newSections);
            setSelectedValue('/'+data[0].value);})
        
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
  }, []);
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2  bg-gradient-to-r from-white to-neutral-300">
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='mr-2 text-center' >Select some section:</p>
                <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                {sections.orden.map(id=> 
                        <option key={'section'+id} value={'/'+sections.objetos[id]?.value}>{sections.objetos[id]?.name}</option> 
                        )}
                </select>
            </div>
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='text-center'>Select some Option</p>
                <div>
                <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={option}>
                    {dishes.orden.map(id=> 
                    <option key={id} value={id}>{dishes.objetos[id].dish}</option> 
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