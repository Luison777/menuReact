"use client"
import CardFood from "@/components/cardfood";
import { dishesRequest } from "@/services/request";
import { useEffect, useState} from 'react';

  interface Section {
    id: number;
    name: string;
    value:string;
    subsections:string;
  }
  interface Sections {
    orden:string[];
    objetos: Record<string, Section>;
  }
  interface Prueba {
    id: number;
    dish: string;
    ingredients: string;
    price: string;
    src: string;
  }
  interface Pruebas {
    orden:string[];
    objetos: Record<string, Array<Prueba>>;
  }
export default function MenuPageID({ params }: { params: { id: Array<string>} }) {
 
    const [sections,setSections]=useState<Sections>({
        orden:[],
        objetos:{}
    });
    const [prueba,setPrueba]=useState<Pruebas>({
      orden:[],
      objetos:{}
  });
  useEffect(() => {
    // Usamos Promise.all para manejar múltiples solicitudes asincrónicas
    Promise.all(
      params.id.map((section) =>
        dishesRequest('/' + section)
          .then((data: Prueba[]) => {
            setPrueba((prevPrueba) => ({
              orden: params.id, // Agregamos el section al array orden
              objetos: {
                ...prevPrueba.objetos,
                [section]: data, // Usamos section como clave del objeto objetos
              },
            }));
          })
          .catch((error) => {
            console.error('Error al obtener los datos:', error);
          })
      )
    );
  }, [params.id]); // Dependencia añadida para que el efecto se ejecute cuando params.id cambie


    useEffect(() => {
        dishesRequest('/sections')
            .then((data:Section[]) => {
                let newSections={
                    orden: data.map((dish)=>dish.value),
                    objetos:data.reduce((objeto,section)=>({...objeto,[section.value]:section}),{})
                }
                setSections(newSections);})
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);
    const urlname=params.id.join('/');
    let names:string[];
    if(sections.objetos[urlname]){
    names=sections.objetos[urlname].subsections.split(',')}

  return (
    <>
    {prueba.orden.map((table,index) => (
      <div className="flex flex-wrap justify-center " key={table}>
        <p key={table} className="w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">
          {names && names[index]}
        </p>
        {prueba.objetos[table] && prueba.objetos[table].map((dish) => (
          <CardFood key={dish.id} dish={dish.dish} ingredients={dish.ingredients} price={dish.price} src={''}></CardFood>
        ))}
      </div>
    ))}
  </>
  
  )
}
