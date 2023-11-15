import CardFood from "@/components/cardfood";

export default function MainPage() {
  const dishes=[
        {
        dish: "Grilled Salmon with Lemon Butter Sauce",
        ingredients: "Salmon fillet, lemon, butter, garlic, herbs",
        price: "$15.99",
        src: "main1.jpg"
      },
      {
        dish: "Chicken Alfredo Pasta",
        ingredients: "Chicken breast, fettuccine pasta, Alfredo sauce",
        price: "$12.49",
        src: "main2.jpg"
      },
      {
        dish: "Vegetarian Stir-Fry with Tofu",
        ingredients: "Tofu, broccoli, bell peppers, soy sauce",
        price: "$11.99",
        src: "main3.jpg"
      }]

  return (
      <>
        <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Main Course</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
        
      </>
    )
}