"use client"
import Image from 'next/image'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { postLogin } from '@/services/request';
export default function AdminPage(){
    const [seePassword, setSeePassword]=useState(false);
    const [responseServer, setResponseServer]=useState('');
    const router=useRouter();
    async function  login(e: FormEvent<HTMLFormElement>){

        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const response=await postLogin('/auth/login',formJson)
        if(response){router.push('/admin/logged')}
        else{
            setResponseServer('Usuario o contraseña invalidos');
            setTimeout(()=>setResponseServer(''),3000)}
    
    }
   
    return(
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
            <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-1/3 rounded shadow-2xl shadow-cyan-500/50">
                <div className=" rounded flex justify-center items-center ">
                    <div className="w-full p-5">
                        <form method='post' onSubmit={login}>
                        <p className="text-center text-white">Login</p>
                        <p className="w-full text-white">User</p>
                        <div className='p-1 shadow shadow-black bg-white rounded  mb-5'>
                            <input  type="text" name='user' placeholder='User' required className="w-full outline-none rounded  border-0 text-black cursor-text" />
                        </div>
                        <p className="w-full text-white">Password</p>
                        <div className="flex w-full bg-white rounded shadow shadow-black px-2 py-1">
                            <input placeholder='Password' required  type={seePassword? 'text':'password'} name="password" className="rounded border-0 w-full  text-black outline-none cursor-text"/>
                            <button onClick={()=>setSeePassword(!seePassword)}>
                                <Image src={`/icons/${seePassword? 'eye.svg':'blind.svg'}`} alt='icon' width={20} height={10}></Image>
                            </button>
                        </div>
                        <div className="w-full flex justify-center pt-5">
                            <button className="w-1/2 rounded bg-black shadow-lg shadow-cyan-500/50 text-white py-1" type='submit'> 
                                Login 
                            </button>
                        </div>
                        </form>
                        <p className='mt-2 text-white'>{responseServer}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}