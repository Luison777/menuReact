import Image from 'next/image'
type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export default function Header(){
    const imageStyle = {
        objectFit: 'cover' as ObjectFit,
      }
    return(
        <header className="w-full h-40 overflow-hidden flex justify-center relative">
            <Image src="/paredbanner.png" alt="pared" fill={true} style={imageStyle} priority={true} />
           <div className="Title -rotate-6 text-center flex items-center text-3xl">
                <p className="neon">Casa <br /> <span>Mexicana</span> </p>
           </div>
           <div className="w-full h-3 bg-gradient-to-b from-transparent to-black absolute bottom-0"></div>
        </header>
    );
}