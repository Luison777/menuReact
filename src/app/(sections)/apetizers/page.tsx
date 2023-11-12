import CardFood from "@/components/cardfood";

export default function ApetizersPage() {
  const dishes=[
    {
      dish: "Nachos Casa Mexicana",
      ingredients: "Cheese nachos with beef, chopped chicken and refried beans, lettuce, tomato and sour cream.",
      price: "$12.25",
      src: ""
    },
    {
      dish: "Queso Fundido",
      ingredients: "Cheese melted & mixed with Mexican Sausage and grilled onions, tomatoes and bell peppers.",
      price: "$11.50",
      src: ""
    },
    {
      dish: "Choriqueso",
      ingredients: "(Served on a hot skilled) Cheese sauce mixed with sausage and fresh diced green peppers. Our homemade Mexican sausage is very clean, using all fresh ingredients.",
      price: "$9.99",
      src: ""
    },
    {
      dish: "Chipotle Nachos",
      ingredients: "Grilled Chicken (or mixed) cooked with bell peppers, onions and tomatoes and chipotle sauce.",
      price: "$13.50",
      src: ""
    },
    {
      dish: "Nachos Fajita",
      ingredients: "Steak, chicken (or mixed) cooked with bell peppers, onions and tomatoes.",
      price: "$13.50",
      src: ""
    },
    {
      dish: "Camarones Fundidos",
      ingredients: "Mixed Shrimp with vegetables and melted cheese and tortillas.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Mini Flautas",
      ingredients: "Six flour tortillas: 2 chicken, 2 beef and 2 potato or mixed your way. Served with lettuce, sour cream and guacamole.",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Mozzarella Sticks (8)",
      ingredients: "Fried battered mozzarella cheese with marinara sauce.",
      price: "$8.99",
      src: ""
    },
    {
      dish: "Casa Mexicana Dip",
      ingredients: "Ground Beef and pico de gallo",
      price: "$7.99(8oz)",
      src: ""
    },
    {
      dish: "Ranchero Dip",
      ingredients: "Beans, pico de gallo and cheese sauce",
      price: "$7.99",
      src: ""
    },
    {
      dish: "Hot Wings (10 pieces)",
      ingredients: "",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Spinach Dip",
      ingredients: "",
      price: "$7.99(8oz)",
      src: ""
    },
    {
      dish: "Shrimp Dip",
      ingredients: "",
      price: "$11.49",
      src: ""
    },
    {
      dish: "Cheese Dip",
      ingredients: "",
      price: "Large(8oz)$8.50 Small(4oz)$4.50",
      src: ""
    },
    {
      dish: "Bean Dip",
      ingredients: "",
      price: "$7.00",
      src: ""
    },
    {
      dish: "Guacamole Mexicano",
      ingredients: "",
      price: "Small $5.00 Large$8.99",
      src: ""
    },
    {
      dish: "Guacamole Dip",
      ingredients: "",
      price: "$3.99 Large$7.99",
      src: ""
    },
    {
      dish: "Nachos Cheese",
      ingredients: "",
      price: "$7.99",
      src: ""
    },
    {
      dish: "Nachos With Beans",
      ingredients: "",
      price: "Full order $8.79 Half Order $7.79",
      src: ""
    },
    {
      dish: "Nachos With Chicken or Beef",
      ingredients: "",
      price: "Full order $9.79 Half Order $8.49",
      src: ""
    },
    {
      dish: "Nachos With Beans & Beef",
      ingredients: "",
      price: "Full order $9.79 Half Order $8.49",
      src: ""
    },
    {
      dish: "Chips Dips and sauce TO-GO!",
      ingredients: "Salsas: (4oz $0.99, 8oz $1.75, 16oz $2.49) Cheese Dip:(4oz $3.99, 8oz $7.99  ) ",
      price: "Chips and Salsa included",
      src: ""
    }
  ]
  const Salads=[  {
    dish: "Tossed Salad",
    ingredients: "",
    price: "$6.49",
    src: ""
  },
  {
    dish: "Tossed Salad with Grilled Chicken",
    ingredients: "",
    price: "$9.49",
    src: ""
  },
  {
    dish: "Tossed Salad with Shrimp",
    ingredients: "",
    price: "$12.99",
    src: ""
  },
  {
    dish: "Guacamole Salad",
    ingredients: "",
    price: "$6.25",
    src: ""
  },
  {
    dish: "Taco Salad",
    ingredients: "(Beef or chicken)",
    price: "$9.49",
    src: ""
  },
  {
    dish: "Taco Salad",
    ingredients: "(Steak or grilled chicken)",
    price: "$11.99",
    src: ""
  },
  {
    dish: "Shrimp Taco Salad",
    ingredients: "",
    price: "$12.99",
    src: ""
  },
  {
    dish: "Caesar Salad",
    ingredients: "Romaine lettuce, tomato, onion, cucumber, croutons and choice of fried or grilled chicken",
    price: "$12.25",
    src: ""
  },
  {
    dish: "Bacon Salad",
    ingredients: "Romaine Lettuce, tomato, onion, bacon bits, ranch, parmesan cheese, crumbles and grilled chicken.",
    price: "$11.99",
    src: ""
  },
  {
    dish: "Tortilla Soup",
    ingredients: "A zesty chicken broth filled with shredded chicken and tortilla strips. Topped with grated cheese, avocado and a slice of lime on the side.",
    price: "$8.99",
    src: ""
  },
  {
    dish: "Chicken Soup",
    ingredients: "Fresh Veggies, rice and seasoned chicken served with pico de gallo, avocado and tortilla strips in a bowl.",
    price: "$8.99",
    src: ""
  }]
  return (
      <>
        
        
        <p className="block text-black w-full ml-2 text-2xl">Appetizers</p>
        
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
        <p className="block text-black w-full ml-2 text-2xl">Salads</p>
        {Salads.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
      </>
    )
}
