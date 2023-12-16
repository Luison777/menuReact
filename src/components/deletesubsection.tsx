"use client"

import { FormEvent,  useState,  ChangeEvent, useEffect } from 'react';

import { deleteSection, deleteSubsection, dishesRequest} from '@/services/request';

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

export default function DeleteSubsection(){
    const [preview,setPreview]=useState({
        name:''
    });
    const [sectionChoosed, setSectionChoosed] = useState(NaN);
    const [response, setResponse] = useState('');
    const [sectionsDB,setSectionsDB]=useState<Sections>({
        orden:[],
        objetos:{}
    });
    const[subsectionDB,setSubsectionDB]=useState<string[]>([]);
    const [subsectionChoosed, setSubsectionChoosed] = useState(NaN);

   
    function onPreview (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const { name, value } = event.target;
        setPreview({
            ...preview,
            [name]: value   
          });
       
    }
    function section(event:ChangeEvent<HTMLSelectElement>){
        const number=parseInt(event.target.value);
        setSectionChoosed(number);
  
    }
    async function deleteDishButton(){
        const subsectionsList=[...subsectionDB];
        const name=subsectionsList[subsectionChoosed];
        subsectionsList.splice(subsectionChoosed,1);
        const value=subsectionsList.join('/');
        const subsections=subsectionsList.join(',');
        const formJson={
            value:value.replace(/[^a-zA-Z]/g, '').toLowerCase(),
            subsections:subsections,
            name:name.replace(/[^a-zA-Z]/g, '').toLowerCase()

        }
        const response=await deleteSubsection(`/sections/subsection/${sectionChoosed}`,formJson)
        setResponse(response);
        setTimeout(()=>setResponse(''),2000);
        console.log(sectionChoosed,formJson);
    }
    function subsectionFunc(event:ChangeEvent<HTMLSelectElement>){
        const number=parseInt(event.target.value);
        setSubsectionChoosed(number);

    }
    useEffect(() => {
        dishesRequest('/sections')
            .then((data:Section[]) => {
                
                let newSections={
                    orden: data.map((dish)=>dish.id),
                    objetos:data.reduce((objeto,dish)=>({...objeto,[dish.id]:dish}),{})
                }

                setSectionsDB(newSections);
                setSectionChoosed( data[0].id );
                
                })
                
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);
    useEffect(() => {
        if(sectionsDB.objetos[sectionChoosed]){
        const subsectionsList=sectionsDB.objetos[sectionChoosed].subsections.split(',');
        setSubsectionDB(subsectionsList);
        }
    }, [sectionChoosed]);
    return(
        <div className=" rounded shadow shadow-black flex flex-wrap p-2 mt-6 bg-gradient-to-r from-white to-neutral-300">
            <p className='w-full  text-center my-2 text-cyan-600'>This section is intended solely for delete subsections in the menu.</p>
            <div className=" w-full lg:w-1/2 p-2 ">    
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some section for delete a subsection:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={section}>
                        {sectionsDB.orden.map(id=> 
                        <option key={id} value={id}>{sectionsDB.objetos[id]?.name}</option> 
                        )}
                    </select>
                </div>
                <div className='w-full rounded shadow shadow-black p-2 mb-2'>
                    <p className='mr-2 text-center' >Select some subsection delete:</p>
                    <select name="section" id="section" className=" rounded shadow shadow-black mb-2 w-full" onChange={subsectionFunc}>
                        {subsectionDB.map((sub,indx)=> 
                        <option key={indx} value={indx}>{sub}</option> 
                        )}
                    </select>
                </div>
                <div className='w-full text-center text-red-500  '>
                    <p className='h-14 ml-2 text-center text-red-500'>This action will delete the selected option.
                    Please ensure that you have selected the correct option.</p>           
                    <button onClick={deleteDishButton}  className='bg-white text-black border-8 border-red-500 w-full h-10 rounded shadow shadow-black text-lg  hover:bg-red-500 hover:text-white '>
                        DELETE</button>
                    <p className={`${response!==''? 'text-green/500':'' } mt-10`}>{response}</p>
                </div>           
            </div>
            <div className="shadow shadow-black rounded w-full lg:w-1/2 p-2 text-center bg-black ">
                <p className='w-full text-white'>Preview</p> 
                <div className='flex justify-center items-center h-full'>
                  <p  className="w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">{preview.name}</p>
                </div>
            </div>
            <p className='w-full text-center mt-2 text-green-500'>{response}</p>
        </div>
    )
}