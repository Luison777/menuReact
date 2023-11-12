import CardFood from "@/components/cardfood";

export default function VegetarianPage() {
  const dishes=[
    {
      "dish": "Mushroom Quesadilla",
      "ingredients": "Filled with mushrooms, pico de gallo and cheese. Served with rice and beans.",
      "price": "$11.99",
      "src": ""
    },
    {
      "dish": "Vegetarian Fajitas",
      "ingredients": "Grilled onions, tomatoes, bell peppers, mushrooms, zucchini and squash. Served with rice, beans, salad and flour or corn tortillas.",
      "price": "$13.99",
      "src": ""
    },
    {
      "dish": "Quesadilla Vegetariana",
      "ingredients": "Filled with cheese, grilled onions, tomatoes, bell peppers, mushrooms, zucchini and squash. Served with rice and beans.",
      "price": "$12.99",
      "src": ""
    },
    {
      "dish": "Chimichanga Vegetariana",
      "ingredients": "A flour tortilla stuffed with cheese and vegetables then deep-fried to a golden brown and topped with cheese sauce. Served with lettuce, sour cream, guacamole, pico de gallo, rice and beans.",
      "price": "$12.99",
      "src": ""
    },
    {
      "dish": "Enchilada Vegetariana",
      "ingredients": "Two enchiladas filled with grilled onions, tomatoes, bell peppers, mushrooms, zucchini and squash. Topped with melted cheese and served with rice and beans.",
      "price": "$13.99",
      "src": ""
    }
  ]
  const combos=[
    {
      dish: "Combo A",
      ingredients: " Cheese enchilada, chalupa and cheese chile relleno.",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Combo B",
      ingredients: " Cheese enchilada, chalupa and cheese   chile relleno.",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Combo C",
      ingredients: " Two spinach enchiladas topped with melted cheese, rice and beans.",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Combo D",
      ingredients: " Bean tostada, cheese enchilada and chile relleno.",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Combo E",
      ingredients: " Bean burrito with nacho cheese, cheese enchilada and cheese quesadilla.",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Combo F",
      ingredients: "Chile relleno, quesadilla and spinach enchilada.",
      price: "$11.75",
      src: ""
    }
  ]
  
  
  return (
      <>
        <p className="block text-black w-full ml-2 text-2xl">Vegetarian Dishes</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
        <p className="block text-black w-full ml-2 text-2xl">Combos</p>
        {combos.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
      </>
    )
}
