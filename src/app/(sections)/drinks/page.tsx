import CardFood from "@/components/cardfood";

export default function DrinksPage() {
  const dishes=[
    {
        dish: "Freshly Squeezed Orange Juice",
        ingredients: "Oranges",
        price: "$4.99",
        src: "drink1.jpg"
      },
      {
        dish: " ",
        ingredients: "Espresso, milk, caramel syrup, ice",
        price: "$5.49",
        src: "drink2.jpg"
      },
      {
        dish: "Mint Mojito",
        ingredients: "Mint leaves, lime, simple syrup, soda water",
        price: "$6.99",
        src: "drink3.jpg"
      }]

  return (
      <>
        <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Drinks</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
        
      </>
    )
}