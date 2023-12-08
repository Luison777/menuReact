"use client"
import CardFood from "@/components/cardfood";
import { dishesRequest } from "@/services/request";
import { useEffect, useState} from 'react';
interface Dish {
    id: number;
    dish: string;
    ingredients: string;
    price: string;
    src: string;
    srcName: string;
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
    orden:string[];
    objetos: Record<string, Section>;
  }
export default function MenuPageID({ params }: { params: { id: string } }) {
    const [dishes,setDishes]=useState<Dishes>({
        orden:[],
        objetos:{}
    });
    const [sections,setSections]=useState<Sections>({
        orden:[],
        objetos:{}
    });

    useEffect(() => {
        dishesRequest('/'+params.id)
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
    }, []);
    useEffect(() => {
        dishesRequest('/sections')
            .then((data:Section[]) => {
                let newSections={
                    orden: data.map((dish)=>dish.value),
                    objetos:data.reduce((objeto,section)=>({...objeto,[section.value]:section}),{})
                }
                setSections(newSections);
                console.log(newSections);
               })
            
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);

  return (
    <>
    <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">
        {sections.objetos[params.id] ? sections.objetos[params.id].name : ''}
    </p>
    {   dishes.orden.map((id)=> dishes.objetos[id] && <CardFood key={id} dish={dishes.objetos[id].dish} ingredients={dishes.objetos[id].ingredients} price={dishes.objetos[id].price} src={''}></CardFood>)}
    
    </>
  )
}
