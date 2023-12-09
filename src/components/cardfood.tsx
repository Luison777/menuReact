interface CardProps{
    dish?:string;
    ingredients?:string;
    price?:string;
    src:string;
}
import Image from 'next/image'
export default function CardFood(props:CardProps){

    return(
    
        <div className="w-full max-w-[360px] rounded relative m-2 relative border-2 shadow-md shadow-white overflow-hidden">
           <Image
                 src="/parednegra.webp"
                 alt="pared"
                 priority={true}
                fill={true} 
            />
           <p className="text-center text-lg w-full block relative top-0 p-1 Lobster text-white neon">{props.dish}</p>
            <div className=" px-2 my-1 w-[100%] min-h-[100px] relative z-40 ">
                <div className={`${props.ingredients ? 'float-left mr-2 mb-2 w-[150px]' : ''} relative rounded overflow-hidden `}>
                    <Image
                        src={props.src? props.src:'/pozole.webp'}
                        alt={props.src}
                        height={400}
                        width={400}
                        
                    />
                </div>
                <p className=" text-sm text-white">{props.ingredients}</p>
            </div>
            <div className="w-full h-6"></div>
            <div className=" w-full h-6 rounded-b  text-sm text-right pr-2 text-green-500 font-semibold absolute top-full -translate-y-full">
                {props.price}
            </div>
        </div>
       
    )
}