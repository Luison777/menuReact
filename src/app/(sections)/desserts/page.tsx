import CardFood from "@/components/cardfood";

export default function DessertsPage() {
  const dishes=[{
    dish: "Chocolate Lava Cake",
    ingredients: "Chocolate, butter, sugar, eggs, flour",
    price: "$8.99",
    src: "dessert1.jpg"
  },
  {
    dish: "Classic New York Cheesecake",
    ingredients: "Cream cheese, graham cracker crust, vanilla",
    price: "$9.49",
    src: "dessert2.jpg"
  },
  {
    dish: "Mixed Berry Parfait",
    ingredients: "Berries, yogurt, granola, honey",
    price: "$7.99",
    src: "dessert3.webp"
  }
   ]

  return (
      <>
        <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Desserts</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
        
      </>
    )
}