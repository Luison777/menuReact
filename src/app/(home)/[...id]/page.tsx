"use client"
import CardFood from "@/components/cardfood";
import  { MemoryContext } from "@/services/memory";
import { readData } from "@/services/request";

import { useContext, useEffect, useState} from 'react';


  interface Dish {
    id: number;
    dish: string;
    ingredients: string;
    price: string;
    src: string;
  }

export default function MenuPageID({ params }: { params: { id: Array<string>} }) {
    const contexto = useContext(MemoryContext);
 

  useEffect(() => {
   if(!contexto?.state.dishes[params.id[0]]){
      try {
        params.id.map(section =>
          readData('/CRUD/' + section)
            .then((data: Dish[]) => {
              const newData={[section]:data}
              contexto?.callbackReducer({ type: 'readDishes', data2: newData });
              
            })
            .catch((error) => {
              console.error('Error al obtener los datos:', error);
            })
        );
      } catch (error) {
        console.error('Error al procesar las secciones:', error);
      }}
   
  }, [params.id,contexto]);
  

  return (
    <>
    {params.id.map((section,index) => (
      <div className="flex flex-wrap justify-center " key={index}>
        <p  className="w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">
          {contexto?.state.subsections[params.id[0]]?.[index].replace(/_/g, ' ')}
        </p>
        {contexto?.state.dishes[section]?.map((dish:Dish) => (
          <CardFood key={dish.id} dish={dish.dish} ingredients={dish.ingredients} price={dish.price} src={''}></CardFood>
        ))}
      </div>
    ))}
  </>
  
  )
}
