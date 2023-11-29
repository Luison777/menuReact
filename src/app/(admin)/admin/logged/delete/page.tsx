"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';
import CardFood from "@/components/cardfood";
import { deleteDish, dishesRequest } from '@/services/request';

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
  
export default function DeletePage(){
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:''
    });
    const [selectedValue, setSelectedValue] = useState('/appetizers');
    const [selectedOption, setSelectedOption] = useState('');
    const [response, setResponse] = useState('');

      const [dishes,setDishes]=useState<Dishes>({
        orden:[],
        objetos:{}
    })

    async function deleteDishButton(){
      const result= await deleteDish(`${selectedValue}/${selectedOption}`);
      setResponse(result);
    }
  
    function section(event:ChangeEvent<HTMLSelectElement>){
        setSelectedValue(event.target.value);
  
    }
    function option(event:ChangeEvent<HTMLSelectElement>){
        setSelectedOption(event.target.value);
        setPreview(dishes.objetos[event.target.value]);
    }
    useEffect(() => {
      dishesRequest(selectedValue)
          .then((data:Dish[]) => {
              let newDishes={
                  orden: data.map((dish)=>dish.id),
                  objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
              }
              setDishes(newDishes);
             
          })
          .catch(error => {
              console.error('Error al obtener los datos:', error);
          });
  }, [selectedValue]);
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2  bg-gradient-to-r from-white to-neutral-300">
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='mr-2 text-center' >Select some section:</p>
                <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                    <option value="/favorites">Favorites</option>
                    <option value="/appetizers">Appetizers</option>
                    <option value="/especialidades">Especialidades</option>
                    <option value="/childs">Child&apos;s Menu</option>
                    <option value="/mexico best">Mexico&apos;s Best</option>
                    <option value="/chicken">Chicken Dishes</option>
                    <option value="/grill">From the Grill</option>
                    <option value="/seafood">Seafood</option>
                    <option value="/favorites casa">Casa&apos;s Favorite</option>
                    <option value="/side orders">Side Orders</option>
                    <option value="/vegetarian">Vegetarian Dishes</option>
                    <option value="/combos">Combos</option>
                    <option value="/desserts">Desserts</option>
                    <option value="/mixed drinks">Mixed Drinks</option>
                </select>
            </div>
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='text-center'>Select some Option</p>
                <div>
                <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={option}>
                    {dishes.orden.map(id=> 
                    <option key={id} value={id}>{dishes.objetos[id].dish}</option> 
                    )}
               
                </select>
                </div>
            </div>
           
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 bg-black mb-2 ">
                <p className='w-full text-white  text-center'>Preview</p> 
                <div className='flex justify-center'>
                    <CardFood src={''} dish={preview.dish} ingredients={preview.ingredients} price={preview.price} ></CardFood>
                </div>
            </div>
            <div className='w-full lg:w-[48%] ml-2 text-center text-red-500  '>
                <p className='h-14 ml-2 text-center text-red-500'>This action will delete the selected option.
                 Please ensure that you have selected the correct option.</p>           
                <button onClick={deleteDishButton} className='bg-white text-black border-8 border-red-500 w-full h-10 rounded shadow shadow-black text-lg  hover:border-white hover:bg-red-500 hover:text-white '>
                    DELETE</button>
                <p className={`${response!==''? 'text-green/500':'' }`}>{response}</p>
            </div>
        </div>
    )
}