import CardFood from "@/components/cardfood";

export default function SeaFoodPage() {
  const dishes=[
    {
      dish: "Fish Tacos(3)",
      ingredients: "Favorite in the Baja California region of Mexico. Premium tilapia on soft flour tortillas with lettuce, pico de gallo, sour cream and rice. Garnished with a lime.",
      price: "$14.99",
      src: ""
    },
    {
      dish: "Fish & Shrimp",
      ingredients: "Consisting of a tilapia fillet topped with butterfly shrimp and grilled onions and tomatoes in a garlic seasoning. Served with rice, lettuce, bell peppers and a slice of lime on the side.",
      price: "$17.99",
      src: ""
    },
    {
      dish: "Al Mojo de Ajo",
      ingredients: "Fish fillet or shrimp grilled to perfection, marinated in a garlic sauce and seasoned with fresh spices. Served with rice and a garden salad.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Devil's Shrimp",
      ingredients: "Shrimp cooked in a spicy hot diabla sauce. Served with rice, lettuce, tomatoes, a slice of lime and a corn or flour tortillas. This dish can be ordered mild at your request.",
      price: "$16.99",
      src: ""
    },
    {
      dish: "Shrimp Fettuccine Pasta",
      ingredients: "Grilled Shrimp, California style vegetables and fettuccine pasta, sautéed in creamy alfredo sauce.",
      price: "$16.99",
      src: ""
    },
    {
      dish: "Shrimp Fajitas",
      ingredients: "A sizzling platter of shrimp grilled with bell peppers, onions and tomatoes. Served with rice, beans, salad and corn or flour tortillas.",
      price: "Single $17.75 Double $28.99",
      src: ""
    },
    {
      dish: "Grilled Shrimp",
      ingredients: "Cooked with bell peppers, tomatoes, onions, lettuce and rice.",
      price: "$15.49",
      src: ""
    },
    {
      dish: "Chipotle Shrimp",
      ingredients: "Shrimp sautéed in a creamy chipotle sauce and served with rice, beans and tortillas.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Grilled Fish Fillet",
      ingredients: "Served with lettuce, tomato, pico de gallo, sour cream, rice, a wedge of lime and tortillas or saltine crackers. For spicy flavor, add Tapatio Picante Sauce.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Shrimp Quesadilla",
      ingredients: "A flour tortilla filled with grilled shrimp, onions, bell peppers, tomatoes and cheese. Topped with lettuce, sour cream, pico de gallo and rice.",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Shrimp Cocktail",
      ingredients: " A bowl of shrimp with chopped tomatoes, onions, cilantro, avocado and jalapeños mixed in our special sauce. Goes great with a squirt of lemon juice, Tapatio sauce and crackers.",
      price: "Small $12.99 Large $16.49 ",
      src: ""
    },
    {
      dish: "Shrimp Tacos",
      ingredients: "Order of 3 shrimp tacos with lettuce, shredded cheese. Served with french fries on the side.",
      price: "$14.99",
      src: ""
    },
    {
      dish: "Shrimp Burrito",
      ingredients: "A burrito filled with shrimp, bell peppers, onions and tomatoes. Served with rice and salad.",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Shrimp Burrito Loco",
      ingredients: "One big Burrito filled with grilled shrimp, onions, tomatoes, bell peppers, beans, and rice topped with cheese sauce and ranchero salsa.",
      price: "$14.99",
      src: ""
    },
    {
      dish: "Grilled Salmon & Shrimp",
      ingredients: "Grilled Salmon with shrimp. Served with a baked potato and steamed vegetables.",
      price: "$19.49",
      src: ""
    },
    {
      dish: "Grilled Salmon & Zucchini",
      ingredients: "Grilled Salmon with zucchini. Served with a baked potato and steamed vegetables.",
      price: "$19.49",
      src: ""
    },
    {
      dish: "Shrimp Nachos",
      ingredients: "Grilled with bell peppers, tomatoes and onions. Topped with cheese.",
      price: "$14.49",
      src: ""
    }
  ]
  
  return (
      <>
        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Sea Food / Mariscos</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        
      </>
    )
}
