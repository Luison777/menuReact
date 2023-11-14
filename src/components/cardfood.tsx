interface CardProps{
    dish?:string;
    ingredients?:string;
    price?:string;
    src?:string;
}
export default function CardFood(props:CardProps){

    return(
    
        <div className="w-full max-w-[360px] rounded relative m-2 relative  ">
           <img src="./pared2.jpg" alt="pared" className="absolute bg-cover w-full h-full rounded" />
           <p className="text-center text-base w-full block relative top-0 p-1 Lobster text-white neon">{props.dish}</p>
            <div className=" px-1 my-1 w-[100%] min-h-[75px] relative z-40 ">
                <img src="/pozole.jpg" alt="pozole" className={`${props.ingredients? 'float-left mr-1 mb-1 h-[75px]':''}  rounded `}/>
                <p className=" text-xs text-white">{props.ingredients}</p>
            </div>
            <div className="w-full h-6"></div>
            <div className=" w-full h-6 rounded-b  text-xs text-right pr-2 text-green-500 font-semibold absolute top-full -translate-y-full">
                {props.price}
            </div>
        </div>
       
    )
}