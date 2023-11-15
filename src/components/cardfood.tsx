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
                 src="/pared2.jpg"
                 alt="pared"
           
                fill={true} 
            />
           <p className="text-center text-base w-full block relative top-0 p-1 Lobster text-white neon">{props.dish}</p>
            <div className=" px-2 my-1 w-[100%] min-h-[75px] relative z-40 ">
                <div className={`${props.ingredients ? 'float-left mr-2 mb-2' : ''} relative rounded overflow-hidden w-[150px]`}>
                    <Image
                        src={`/dishes/${props.src}`}
                        alt={props.src}
                        height={150}
                        width={150}
                        
                    />
                </div>
                <p className=" text-xs text-white">{props.ingredients}</p>
            </div>
            <div className="w-full h-6"></div>
            <div className=" w-full h-6 rounded-b  text-xs text-right pr-2 text-green-500 font-semibold absolute top-full -translate-y-full">
                {props.price}
            </div>
        </div>
       
    )
}