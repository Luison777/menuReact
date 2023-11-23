import CardFood from "@/components/cardfood";

export default function DrinksPage() {
  
  return (
      <>
        <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Build Your Own Combo</p>
        <div className="w-full  rounded  text-white border-2 m-2 p-2">
           <p className="text-center text-orange-500">Two entrees and two Sides $11.49</p>
           <p className="text-center text-orange-500">Three entrees and two Sides $12.49</p>
           <p className="text-center mb-2 text-orange-500">Four entrees and two Sides $13.49</p>
           <p className="text-center text-sm mb-2 text-yellow-400" >Side items: rice,beans, house potatoes with Mexican sausage</p>
           <p className="text-center Lobster">Entrees:</p>
           <div className="text-sm">
           <p className="mb-2">Enchilada: <span className="text-sky-500">Beef, chicken, potato or cheese.</span> </p>
           <p className="mb-2">Taquito: <span className="text-sky-500">Beef, chicken or potato.</span> </p>
           <p className="mb-2">Soft or hard taco: <span className="text-sky-500">Beef or chicken.</span> </p>
           <p className="mb-2">{`Chile Relleno (Poblano Pepper).`} </p>
           <p className="mb-2">Tamal: <span className="text-sky-500"> fried or regular.</span> </p>
           <p className="mb-2">Chalupa. </p>
           <p className="mb-2">Tostada.</p>
           <p className="mb-2">Burrito: <span className="text-sky-500"> Beans, beef or chicken.</span> </p>
           <p className="mb-2">Flauta: <span className="text-sky-500"> Beef, chicken or potato.</span> </p>
           <p className="mb-2">Quesadilla: <span className="text-sky-500">Cheese, chicken, beef, chorizo, mushroom, vegetables or potato.</span> </p>
           <p className="mb-2 text-center text-red-600">With cheese dip on top, $1.25 extra per item.</p>
           </div>
        </div>
    
      </>
    )
}
