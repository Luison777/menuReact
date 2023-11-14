import CardFood from "@/components/cardfood";

export default function CasasFavoritesPage() {
  const dishes=[
    {
      dish: "Philly Cheese Steak",
      ingredients: "Steak with grilled onions served on a french baguette bread, with cheddar cheese white, melted cheese, served with french fries, pickles and mayonnaise on the side.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Cowboy Fajitas",
      ingredients: "Enjoy a delicious fajita with chicken, shrimp & smoked sausage all grilled to perfection with bell peppers, onions and tomatoes. Served with rice, beans, pico de gallo, guacamole, sour cream and tortillas on the side.",
      price: "Single $17.99 Double $28.99",
      src: ""
    },
    {
      dish: "Tacos Autenticos",
      ingredients: "Tacos in a corn tortilla with a meat of your choice: grilled chicken, steak, chorizo (Mexican sausage) or pork. Served with raw onions & cilantro, garnished with lime and tomatillo sauce, and whole beans on the side.",
      price: "$3.10 each",
      src: ""
    },
    {
      dish: "Chicken Cheese and Fries",
      ingredients: "Grilled chicken served on top of waffle fries, smothered with cheese sauce on top.",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Steak Burger",
      ingredients: "Sauteed mushrooms, grilled to perfection with gravy, tomato, and lettuce combined on top of our delicious grilled steak with grilled onions and cheddar together to create this classic American favorite. Served with a pickle and french fries on the side.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Cowboy Pasta",
      ingredients: "Our delicious penne pasta and fettuccine pasta with grilled chicken, shrimp & smoked sausage smothered with our classic white sauce.",
      price: "$16.99",
      src: ""
    },
    {
      dish: "Ground Beef Tortilla Soup",
      ingredients: "Get the fiesta started with this delicious soup, ground beef, black beans, tortilla chips, corn topped with avocado and cheese.",
      price: "$8.50",
      src: ""
    },
    {
      dish: "Ribeye Steak Tacos(3)",
      ingredients: "Juicy ribeye strips in a flour tortilla with grilled onions and garnished with raw onions and cilantro. Rice, beans, pico de gallo, and tomatillo sauce on the side.",
      price: "$14.99",
      src: ""
    },
    {
      dish: "Nachos Salad",
      ingredients: "Grilled Chicken or steak cooked with bell peppers, onions and tomatoes on top of tortilla chips with lettuce, tomato and sour cream on top.",
      price: "$13.99",
      src: ""
    }
  ]
  
  return (
      <>
        <p className="block w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Casa's Favorites</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        
      </>
    )
}
