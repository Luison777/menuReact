import CardFood from "@/components/cardfood";

export default function BestPage() {
  const dishes=[
    {
      dish: "Tacos al Carbon",
      ingredients: "Three flour tortillas stuffed with slices of steak or chicken, grilled onions, nacho cheese, pico de gallo and tomato sauce.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Tacos Fajita",
      ingredients: "Three flour tortillas stuffed with slices of steak or chicken, grilled onions, nacho cheese, pico de gallo, totmato and bell peppers.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Tacos de Carne Asada",
      ingredients: "Three steak tacos on soft corn or flour tortillas with chopped onions and cilantro. Served with beans and tomatillo sauce on the side.",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Tacos Supreme",
      ingredients: "Two hard shell tacos stuffed with grilled steak or chicken, lettuce, sour cream and cheese. Served with rice and fries.",
      price: "$13.49",
      src: ""
    },
    {
      dish: "Carnitas",
      ingredients: "Pork tips served with lettuce, tomato, avocado, rice and beans with jalapeño slices.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Chile Colorado",
      ingredients: "Beef chunks with red chile sauce, rice, beans and flour or corn tortillas.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Enchiladas Verdes",
      ingredients: "One chicken, one cheese and one spinach enchilada, topped with lettuce, sour cream, green sauce, tomato and guacamole. Served with rice and beans.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Shrimp Enchilada",
      ingredients: "Two sautéed shrimp enchiladas topped with lettuce, tomato and white cream sauce. Served with rice and beans.",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Super Casa Mexicana Quesadilla",
      ingredients: "A flour tortilla stuffed with grilled shrimp and chorizo cooked with tomato, onions and bell peppers. Served with a side of lettuce, sour cream and tomato.",
      price: "$17.99",
      src: ""
    },
    {
      dish: "Carne Asada",
      ingredients: "A thin-cut rib eye steak or breaded chicken breast and fries. Served with rice, lettuce, guacamole and tortillas.",
      price: "$15.49",
      src: ""
    },
    {
      dish: "Milanesa",
      ingredients: "A thin-cut rib eye steak or breaded chicken breast and fries. Served with rice, lettuce, guacamole and tortillas.",
      price: "$15.49",
      src: ""
    },
    {
      dish: "Burrito Loco",
      ingredients: "One big burrito filled with grilled chicken, beef, bell peppers, onions, tomatoes, beans and rice topped with cheese sauce and ranchero sauce.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Grande Chimichanga",
      ingredients: "12\" flour tortilla stuffed with grilled chicken, steak and shrimp served with Mexican rice and beans.",
      price: "$14.49",
      src: ""
    }
  ]
  
  return (
      <>
        <p className="block text-black w-full ml-2 text-2xl">Mexico's Best</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
      </>
    )
}
