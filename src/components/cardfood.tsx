interface CardProps{
    dish?:string;
    ingredients?:string;
    price?:string;
    src?:string;
}
export default function CardFood(props:CardProps){

    return(
        <div className="w-full m-2 rounded relative shadow shadow-black text-black ">
            <p className="text-center text-sm w-full block border-b-2 relative top-0 p-1">{props.dish}</p>
            <div className=" px-1 my-1 w-[100%] min-h-[75px]">
                <img src="/pozole.jpg" alt="pozole" className={`${props.ingredients? 'float-left mr-1 mb-1 h-[75px]':''}  rounded `}/>
                <p className=" text-xs">{props.ingredients}</p>
            </div>
            <div className="w-full h-6 rounded-b  text-xs text-right pr-2">
                {props.price}
            </div>
        </div>
    )
}