export default function Header(){
    return(
        <header className="w-full h-40 overflow-hidden flex justify-center relative">
            <img src="./pared.jpg" alt="pared" className="absolute bg-cover h-full" />
           <div className="Title -rotate-6 text-center flex items-center text-3xl">
                <p className="neon">Casa <br /> <span>Mexicana</span> </p>
           </div>
           <div className="w-full h-3 bg-gradient-to-b from-transparent to-black absolute bottom-0"></div>
        </header>
    );
}