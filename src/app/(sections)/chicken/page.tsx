import CardFood from "@/components/cardfood";

export default function ChickenDishesPage() {
  const dishes=[
    {
      dish: "Pollo a la Parrilla",
      ingredients: "Premium chicken delicately seasoned with fresh marinated sauce, chargrilled to perfection and grilled onions. Served with rice, guacamole salad and corn or flour tortillas.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Pollo Loco",
      ingredients: "Marinated, grilled chicken served with cream sauce, cheese and spinach. Served with rice, beans and tortillas.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Chipotle Pollo",
      ingredients: "Grilled Chicken breast, creamy chipotle sauce. Served with rice, beans and tortillas.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Pollo a la Mexicana",
      ingredients: "8oz grilled boneless chicken breast sauteed with onions, tomatoes and bell peppers. Served with rice, refried beans and flour tortillas. Garnished with lettuce, guacamole, sour cream and pico de gallo.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Chicken Pasta",
      ingredients: "Chicken california Style vegetables and fettuccine or bow-tie pasta in Alfredo sauce.",
      price: "$16.99",
      src: ""
    },
    {
      dish: "Pollo Colorado",
      ingredients: "Chicken with red chile sauce. Served with Mexican rice, refried beans and flour tortillas.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Chicken Sandwich",
      ingredients: "A grilled chicken burger with mayo, lettuce, tomato, onions and avocado. Served with fries.",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Chicken Cheese and rice",
      ingredients: "Grilled chicken over rice and our famous cheese sauce.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "N1. 1 Burrito, 1 Quesadilla, 1 Chile relleno",
      ingredients: "",
      price: "$12.49",
      src: ""
    },
    {
      dish: "N2. 2 flautas, rice and beans topped with lettuce, grated cheese, pico de gallo and sour cream.",
      ingredients: "",
      price: "$12.49",
      src: ""
    },
    {
      dish: "N3. 2 enchiladas, rice and beans topped with lettuce, tomato, sour cream and grated cheese",
      ingredients: "",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Pollo Fundido",
      ingredients: "8oz Grilled chicken breast topped with grilled onions, mushrooms and cheese. Served with rice and tossed salad.",
      price: "$16.49",
      src: ""
    },
    {
      dish: "Mix-mix",
      ingredients: "Grilled chicken breast, shrimp (or mixed). Served on a bed of rice, topped with sauteed bell peppers, onions, tomatoes and special cheese dip.",
      price: "$15.49",
      src: ""
    }
  ]
  
  return (
      <>
        <p className="block text-black w-full ml-2 text-2xl">Chicken Dishes</p>
      
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        
      </>
    )
}
