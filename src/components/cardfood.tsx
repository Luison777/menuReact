export default function CardFood(){
    return(
        <div className="w-[42%] min-[360px]:w-[44%] h-60  m-2 rounded relative shadow shadow-black text-black">
            <img src="/pozole.jpg" alt="pozole" className="mt-3"/>
            <p className="text-center">titulo</p>
            <p className="text-center">ingredientes</p>
            <div className="absolute bottom-0 w-full h-8 rounded-b border-t-2">
                <p className="ml-2">Price</p>
            </div>
        </div>
    )
}