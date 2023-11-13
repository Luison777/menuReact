import CardFood from "@/components/cardfood";

export default function DrinksPage() {
  
  return (
      <>
        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Build Your Own Combo</p>
        <div className="w-full m-2 rounded relative shadow shadow-black text-black p-2">
           <p className="text-center">Two entrees and two Sides $11.49</p>
           <p className="text-center">Three entrees and two Sides $12.49</p>
           <p className="text-center mb-2">Four entrees and two Sides $13.49</p>
           <p className="text-center text-sm mb-2" >Side items: rice,beans, house potatoes with Mexican sausage</p>
           <p className="text-center Lobster">Entrees:</p>
           <div className="text-sm">
           <p className="mb-2">Enchilada <span>Beef, chicken, potato or cheese.</span> </p>
           <p className="mb-2">Taquito <span>Beef, chicken or potato.</span> </p>
           <p className="mb-2">Soft or hard taco <span>Beef or chicken.</span> </p>
           <p className="mb-2">{`Chile Relleno (Poblano Pepper).`} </p>
           <p className="mb-2">Tamale fried or regular. </p>
           <p className="mb-2">Chalupa. </p>
           <p className="mb-2">Tostada.</p>
           <p className="mb-2">Burrito <span> Beans, beef or chicken.</span> </p>
           <p className="mb-2">Flauta <span> Beef, chicken or potato.</span> </p>
           <p className="mb-2">Quesadilla <span>Cheese, chicken, beef, chorizo, mushroom, vegetables or potato.</span> </p>
           <p className="mb-2">With cheese dip on top, $1.25 extra per item.</p>
           </div>
        </div>
    
      </>
    )
}
