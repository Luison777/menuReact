"use client"


import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';
import CardFood from "@/components/cardfood";
import { dishesRequest, imgRequest, updateDish } from '@/services/request';
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
    orden: number[];
    objetos: Record<string, Section>;
  }
export default function UpdatePage(){
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:'', srcName:''
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


    async function done(e: FormEvent<HTMLFormElement>){
        if(selectedOption!=='' && selectedValue!==''){
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const json=Object.fromEntries(formData.entries());
        const createResponse=await updateDish(`${selectedValue}/${selectedOption}`, formData);
        setResponse(createResponse);
        setTimeout(()=>setResponse(''),2000);
    }else{setResponse('Please select some section and option first.');
        setTimeout(()=>setResponse(''),2000);}
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
    async function option(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value);
       if (dishes.objetos[event.target.value].src==''){
        setPreview({
            ...preview,
            dish:dishes.objetos[event.target.value].dish,
            price:dishes.objetos[event.target.value].price,
            ingredients:dishes.objetos[event.target.value].ingredients,
            src:''
       })}else{
        
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
        }}
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
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mb-2 bg-gradient-to-r from-white to-neutral-300">
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='mr-2 text-center' >Select some section:</p>
                <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                    
                    {sections.orden.map(id=> 
                    <option key={'section'+id} value={'/'+sections.objetos[id]?.value}>{sections.objetos[id]?.name}</option> 
                    )}
               
                </select>
            </div>
            <div className='w-full rounded shadow shadow-black p-2 mb-6'>
                <p className='text-center'>Select some Option</p>
                <div>
                <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={option}>
                    {dishes.orden.map(id=> 
                    <option key={'dish'+id} value={id}>{dishes.objetos[id]?.dish}</option> 
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
                    <CardFood src={preview.src} dish={preview.dish} ingredients={preview.ingredients} price={preview.price} ></CardFood>
                </div>
            </div>
            <p className='w-full text-center mt-2 text-green-500'>{response}</p>
        </div>
    )
}