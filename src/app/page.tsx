import CardFood from "@/components/cardfood";
export default function Home() {
  const dishes=[
    {dish:'Grilled Shrimp Quesadilla With Mexican Sausage',
    ingredients:' Stuff a tortilla with shrimp, sausage, pico de gallo and cheese. Served with rice and beans',
    price:' $13.25',
    src:''},
    {dish:'Mushroom Quesadilla',
    ingredients:'Stuff a tortilla with mushrooms, pico de gallo and cheese. Served with rice and beans',
    price:' $10.79',
    src:''},
    {dish:'Speedy Gonzales',
    ingredients:'One taco, one enchilada and your choice of rice or bean',
    price:' $9.25',
    src:''},
    {dish:'La Mexicana Burrito',
    ingredients:'A large flour tortilla filled with chicken or seasoned ground beef and topped withsour cream, lettuce and chees. Served with rice and beans.',
    price:'$10.99',
    src:''},
    {
      dish: "Quesadilla Mexicana",
      ingredients: "Flour tortilla filled with beef or chicken and beans served with rice, lettuce, sour cream, and guacamole",
      price: "$10.79",
      src: ""
    },
    {
      dish: "Tex-Mex Burrito",
      ingredients: "Burrito stuffed with eggs, ham and Mexican sausage covered with cheese dip. Served with rice and beans",
      price: "$11.25",
      src: ""
    },
    {
      dish: "California Burrito",
      ingredients: "A big flour tortilla filled with rice and chile colorado, then wrapped to make the delicious burrito. Served with rice and beans",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Grilled Shrimp Tacos",
      ingredients: "3 soft tacos with lettuce, shredded cheese. Served with french fries and rice and a special sauce on top",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Fish Fillet",
      ingredients: "Grilled tilapia served with rice, lettuce, tomatoes, pico de gallo and avocado tomatoes, pico de gallo and avocado",
      price: "$12.49",
      src: ""
    },
    {
      dish: "El Plato Felix",
      ingredients: "Grilled chicken or steak on a bed of rice, topped with cheese sauce",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Grande Burrito",
      ingredients: "One big burrito filled with pork tips (carnitas) topped with cheese sauce and pineapple, with lettuce, sour cream, guacamole and pico de gallo on the side",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Fiesta Burrito",
      ingredients: "A large flour tortilla filled with your choice of steak, chicken or marinated pork, chile colorado. Cooked with onions, tomatoes and bell peppers. Served with guacamole, sour cream, lettuce, and pico de gallo. And rice or beans de gallo. And rice or beans",
      price: "$13.7",
      src: ""
    },
    {
      dish: "Lunch Only Fajitas",
      ingredients: "A lunch size of sizzling steak or chicken fajitas cooked with bell peppers, onions and tomatoes. Served with rice, beans and a salad",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Fiesta Fajitas",
      ingredients: "Steak, chicken and shrimp. Served with rice and beans, lettuce sour cream, pico de gallo, guacamole and tortillas",
      price: "$14.99",
      src: ""
    },
    {
      dish: "Potato Fajita",
      ingredients: "Grilled chicken or steak with grilled onions, tomatoes and bell peppers on a baked potato. Topped with melted cheese. Served with lettuce, tomatoes, and sour cream on the side",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Nachos Fajita",
      ingredients: "Grilled chicken or steak with grilled onions, tomatoes and bell peppers over chips Topped with melted cheese.",
      price: "$13.49",
      src: ""
    },
    {
      dish: "Shrimp Fajitas",
      ingredients: "Sizzling shrimp cooked with bell peppers, onions and tomatoes Served with rice, beans, salad and tortillas and tortillas",
      price: "$16.49",
      src: ""
    },
    {
      dish: "Fajita Quesadilla",
      ingredients: "Steak or grilled chicken with grilled onions, tomatoes and bell peppers served with rice and beans",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Shrimp Quesadilla",
      ingredients: "Flour tortilla stuffed with shrimp. Served with rice, beans, lettuce, sour cream, pico de gallo and guacamole",
      price: "$13.49",
      src: ""
    },
    {
      dish: "Hawaiian Quesadilla",
      ingredients: "Filled with ham and pineapple. Served with lettuce, guacamole, sour cream and pico de gallo on the side",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Taco al Carbon",
      ingredients: "One flour tortilla stuffed with grilled steak or chicken, onions and nacho cheese. Served with rice and beans",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Enchiladas Verdes",
      ingredients: "Three beef, chicken or cheese enchiladas topped with green sauce, lettuce and sour cream",
      price: "$11.49",
      src: ""
    },
    {
      dish: "Burrito Supremo",
      ingredients: "A beef or chicken burrito topped with lettuce, tomato, sour cream and cheese",
      price: "$10.49",
      src: ""
    },
    {
      dish: "Casa Mexicana Cheesesteak",
      ingredients: "A soft flour tortilla filled with thin sliced steak, grilled onions, and nacho cheese. Served with lettuce, tomatoes and rice or beans or beans",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Taquitos Mexicanos",
      ingredients: "One chicken and one beef rolled corn tortillas deep fried golden brown. Served with lettuce, pico de gallo, guacamole, sour cream, rice and beans",
      price: "$11.49",
      src: ""
    },
    {
      dish: "Chimichanga",
      ingredients: "Stuffed flour tortilla with your choice of beef or spicy chicken, then deep-fried golden brown topped with cheese sauce. On the side rice, beans, lettuce, pico de gallo, sour cream and guacamole",
      price: "$11.49",
      src: ""
    },
    {
      dish: "Shrimp Chimichanga",
      ingredients: "Flour tortillas stuffed with shrimp deep-fried golden brown topped with cheese sauce. Served with rice, beans, lettuce, sour cream, pico de gallo and guacamole",
      price: "$13.49",
      src: ""
    }
  ]
  return (
    <>
    
    <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Favorites</p>
    {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
    </>
  )
}
