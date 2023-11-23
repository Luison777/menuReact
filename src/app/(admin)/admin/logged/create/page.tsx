export default function CreatePage(){
    return(
        <div className=" h-full  rounded shadow shadow-black">
            <form className="w-full h-full p-2" action="">
                <div className="flex mb-2">
                    <p>Name: </p>
                    <input className="shadow shadow-black rounded ml-2 w-full" type="text" />
                </div>
                <div className="mb-2">
                    <p>Description: </p>
                    <input className="shadow shadow-black rounded w-full" type="text" />
                </div>
                <div className="flex mb-2">
                    <p>Price: </p>
                    <input className="shadow shadow-black rounded ml-2 w-full" type="text" />
                </div>
                <div className="flex mb-2">
                    <p>Picture</p>
                    <input className="shadow shadow-black rounded ml-2 w-full" type="text" />
                </div>
            </form>
        </div>
    )
}