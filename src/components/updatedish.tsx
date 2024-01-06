"use client"


import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';
import CardFood from "@/components/cardfood";
import {  imgRequest, readData, updateDish } from '@/services/request';
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
    subsections:string;
  }
  interface Sections {
    orden: number[];
    objetos: Record<string, Section>;
  }
  interface SubsectionChoosed{
    name:string;
  }
  interface SectionChoosed{
    id:number;
    name:string;
  }
export default function UpdateDish(){
    const [preview,setPreview]=useState({
        dish:'', ingredients:'', price:'', src:'', srcName:''
    });
    const [response, setResponse] = useState('');
    const [sectionsDB,setSectionsDB]=useState<Sections>({
        orden:[],
        objetos:{}
    });
    const[subsectionDB,setSubsectionDB]=useState<string[]>([]);
    const [sectionChoosed, setSectionChoosed] = useState<SectionChoosed>({id:NaN,name:''});
    const [subsectionChoosed, setSubsectionChoosed] = useState({name:''});
    
    const [dishes,setDishes]=useState<Dishes>({
        orden:[],
        objetos:{}
    });
   
  
    useEffect(() => {
        readData('/sections')
            .then((data:Section[]) => {
                let newSections={
                    orden: data.map((dish)=>dish.id),
                    objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
                }
                setSectionsDB(newSections);

                setSectionChoosed((prev)=>(
                    {...prev,
                    id:data[0].id,
                    name:data[0].name.replace(/\s/g, '').toLowerCase()
                    }));
            })
            
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);
    useEffect(() => {
        if(sectionsDB.objetos[sectionChoosed.id]){
        const subsectionsList=sectionsDB.objetos[sectionChoosed.id].subsections.split(',');
        setSubsectionDB(subsectionsList);
        setSubsectionChoosed({name:subsectionsList[0]});
        }
    }, [sectionChoosed]);
    useEffect(() => {
        if (subsectionChoosed.name !== '') {
        readData('/'+subsectionChoosed.name.replace(/[^a-zA-Z]/g, '').toLowerCase())
            .then((data:Dish[]) => {
                let newDishes={
                    orden: data.map((dish)=>dish.id),
                    objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
                }
                setDishes(newDishes);
                
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
    }, [subsectionChoosed]);


    async function done(e: FormEvent<HTMLFormElement>){
        if(subsectionChoosed.name!=='' && sectionChoosed.name!==''){
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const json=Object.fromEntries(formData.entries());
        const createResponse=await updateDish(`${sectionChoosed}/${subsectionChoosed}`, formData);
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
    function sectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const newSelectedSection:SectionChoosed={
            id:parseInt(event.target.value, 10),
            name:sectionsDB.objetos[event.target.value].name.replace(/[^a-zA-Z]/g, '').toLowerCase() 
        }
        setSectionChoosed(newSelectedSection);
        setSubsectionChoosed({name:subsectionDB[0].replace(/[^a-zA-Z]/g, '').toLowerCase()});
    }
    function subsectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const newSelectedValue:SubsectionChoosed={
            ...subsectionChoosed,
            name:event.target.value
        }
        setSubsectionChoosed(newSelectedValue);

    }
    async function dishFunc(event: ChangeEvent<HTMLSelectElement>) {
        const newSelectedValue:SubsectionChoosed={
            ...subsectionChoosed,
            name:event.target.value
        }
        setSubsectionChoosed(newSelectedValue);
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

  
    
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mb-2 bg-gradient-to-r from-white to-neutral-300">
            <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                <p className='mr-2 text-center' >Select some section:</p>
                <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={sectionFunc}>
                    
                    {sectionsDB.orden.map(id=> 
                    <option key={'section'+id} value={id}>{sectionsDB.objetos[id]?.name}</option> 
                    )}
               
                </select>
            </div>
            <div className='w-full rounded shadow shadow-black p-2 mb-6'>
                <p className='text-center'>Select some subsection:</p>
                <div>
                <select name="subsection" className=" rounded shadow shadow-black mb-2 w-full" onChange={subsectionFunc} >
                    {subsectionDB.map((sub,indx)=> 
                    <option key={indx} value={sub.replace(/\s/g, '').toLowerCase()}>{sub}</option> 
                    )}
                </select>
                </div>
            </div>
            <div className='w-full rounded shadow shadow-black p-2 mb-6'>
                <p className='text-center'>Select some dish:</p>
                <div>
                <select name="section"  className=" rounded shadow shadow-black mb-2 w-full" onChange={dishFunc}>
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