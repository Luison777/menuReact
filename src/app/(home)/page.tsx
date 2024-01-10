"use client"
import CardFood from "@/components/cardfood";
import  { MemoryContext } from "@/services/memory";
import { readData } from "@/services/request";

import { useContext, useEffect} from 'react';


interface Dish {
  id: number;
  dish: string;
  ingredients: string;
  price: string;
  src: string;
}
export default function MenuPage() {
  const contexto = useContext(MemoryContext);
 

  useEffect(() => {
   if(!contexto?.state.dishes['bebidas']){
      try {

          readData('/CRUD/' + 'bebidas')
            .then((data: Dish[]) => {
              const newData={['bebidas']:data}
              contexto?.callbackReducer({ type: 'readDishes', data2: newData });
              
            })
            .catch((error) => {
              console.error('Error al obtener los datos:', error);
            })
      } catch (error) {
        console.error('Error al procesar las secciones:', error);
      }}
   
  }, [contexto]);
  return (
    <>
    {
      <div className="flex flex-wrap justify-center " >
        <p  className="w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">
          Bebidas
        </p>
        {contexto?.state.dishes['bebidas']?.map((dish:Dish) => (
          <CardFood key={dish.id} dish={dish.dish} ingredients={dish.ingredients} price={dish.price} src={`/images/${dish.src}`}></CardFood>
        ))}
      </div>
    }
    </>
  )
}
