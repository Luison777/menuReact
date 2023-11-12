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
            <div className=" px-1 my-1">
                <img src="/pozole.jpg" alt="pozole" className="h-[75px] rounded float-left mr-1 mb-1"/>
                <p className=" text-xs">{props.ingredients}</p>
            </div>
            <div className="w-full h-8 rounded-b ">
                    <p className="ml-2">{props.price}</p>
            </div>
        </div>
    )
}