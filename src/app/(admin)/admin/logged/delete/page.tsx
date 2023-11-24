"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';
import CardFood from "@/components/cardfood";
interface Dish {
    dish: string;
    ingredients: string;
    price: string;
    src: string;
  }
export default function DeletePage(){
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:''
    });
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const dishes={
        orden:[0,1,2,3,4,5],
        objetos:{
        0:{
          dish: "Nachos Casa Mexicana",
          ingredients: "Cheese nachos with beef, chopped chicken and refried beans, lettuce, tomato and sour cream.",
          price: "$12.25",
          src: ""
        },
        1:{
          dish: "Queso Fundido",
          ingredients: "Cheese melted & mixed with Mexican Sausage and grilled onions, tomatoes and bell peppers.",
          price: "$11.50",
          src: ""
        },
        2:{
          dish: "Choriqueso",
          ingredients: "(Served on a hot skilled) Cheese sauce mixed with sausage and fresh diced green peppers. Our homemade Mexican sausage is very clean, using all fresh ingredients.",
          price: "$9.99",
          src: ""
        },
        3:{
          dish: "Chipotle Nachos",
          ingredients: "Grilled Chicken (or mixed) cooked with bell peppers, onions and tomatoes and chipotle sauce.",
          price: "$13.50",
          src: ""
        },
        4:{
          dish: "Nachos Fajita",
          ingredients: "Steak, chicken (or mixed) cooked with bell peppers, onions and tomatoes.",
          price: "$13.50",
          src: ""
        },
        5:{
          dish: "Camarones Fundidos",
          ingredients: "Mixed Shrimp with vegetables and melted cheese and tortillas.",
          price: "$15.99",
          src: ""
        }}}
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
    function section(event:ChangeEvent<HTMLSelectElement>){
        setSelectedValue(event.target.value);
  
    }
    function option(event:ChangeEvent<HTMLSelectElement>){
        setSelectedOption(event.target.value);
        setPreview(dishes.objetos[event.target.value]);
    }

    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2  bg-gradient-to-r from-white to-neutral-300">
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='mr-2 text-center' >Select some section:</p>
                <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                    <option value="favorites">Favorites</option>
                    <option value="appetizers">Appetizers</option>
                    <option value="especialidades">Especialidades</option>
                    <option value="childs">Child&apos;s Menu</option>
                    <option value="mexico best">Mexico&apos;s Best</option>
                    <option value="chicken">Chicken Dishes</option>
                    <option value="grill">From the Grill</option>
                    <option value="seafood">Seafood</option>
                    <option value="favorites casa">Casa&apos;s Favorite</option>
                    <option value="side orders">Side Orders</option>
                    <option value="vegetarian">Vegetarian Dishes</option>
                    <option value="combos">Combos</option>
                    <option value="desserts">Desserts</option>
                    <option value="mixed drinks">Mixed Drinks</option>
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
                    <CardFood src={preview.src} dish={preview.dish} ingredients={preview.ingredients} price={preview.price} ></CardFood>
                </div>
            </div>
            <div className='w-full lg:w-[48%] ml-2 text-center text-red-500  '>
                <p className='h-14 ml-2 text-center text-red-500'>This action will delete the selected option. Please ensure that you have selected the correct option.</p>           
                <button className='bg-white text-black border-4 border-red-500 w-full h-10 rounded shadow shadow-black text-lg  hover:border-white hover:bg-red-500 hover:text-white '>
                    DELETE</button>
            </div>
        </div>
    )
}