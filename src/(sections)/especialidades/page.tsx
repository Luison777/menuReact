import CardFood from "@/components/cardfood";

export default function EspecialidadesPage() {
  const dishes=[
    {
      dish: "Super Burrito",
      ingredients: "An over-sized spice and herb four tortilla filled with rice, whole beans, chopped onions, cilantro and your choice of meat: chicken, marinated pork or chile colorado. Topped with a tomatillo sauce then wrapped to create the 'Super Burrito'. Served with lettuce, sour cream and shredded cheese on the side.",
      price: "$15.49",
      src: ""
    },
    {
      dish: "Super Fajita Quesadilla",
      ingredients: "Consisting of your choice of meat, sauteed chicken, sauteed beef, grilled chicken or grilled steak all cooked with tomato, onions, bell peppers and mushrooms on a special flour tortilla. Served with a side of lettuce, sour cream and tomato.",
      price: "$14.99 with Shrimp $15.99",
      src: ""
    },
    {
      dish: "California Burrito",
      ingredients: "A big flour tortilla filled with rice and Chile Colorado, then wrapped to make the delicious burrito. Served with beans.",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Casa Mexicana Burrito",
      ingredients: "A large flour tortilla filled with chicken or seasoned ground beef and topped with sour cream, lettuce and cheese. Served with rice and beans.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Supreme Burrito",
      ingredients: "One beef or chicken burrito topped with lettuce, tomatoes, sour cream, shredded cheese and red sauce.",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Tex-Mex Burrito",
      ingredients: "Burrito stuffed with eggs, ham and Mexican sausage covered with cheese dip, served with rice and beans.",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Burritos Mexicanos",
      ingredients: "Two burritos filled with pork tips and beans cooked with onions, bell peppers and tomatoes, topped with nacho cheese, lettuce, tomatoes, avocado and jalapeño slices.",
      price: "$13.99",
      src: ""
    },
    {
      dish: "Special Burritos",
      ingredients: "Two burritos filled with beef tips and beans and topped with cheese sauce, lettuce, sliced tomatoes and avocado.",
      price: "$13.49",
      src: ""
    },
    {
      dish: "Burritos Deluxe",
      ingredients: "Two burritos (one chicken and one beef) topped with lettuce, tomatoes, guacamole, and sour cream.",
      price: "$13.49",
      src: ""
    },
    {
      dish: "Grilled Chicken or Steak Burrito",
      ingredients: "Grilled steak or chicken burrito with cheese, served with rice or beans and guacamole salad.",
      price: "$13.49",
      src: ""
    },
    {
      dish: "Enchiladas Tapatias",
      ingredients: "Consisting of four cheese enchiladas topped with grilled chicken, nacho cheese sauce, lettuce, sour cream, tomatoes, avocado slices and special sauce.",
      price: "$14.99",
      src: ""
    },
    {
      dish: "Enchiladas Supremas",
      ingredients: "One cheese, one chicken, one beef and one spinach topped with enchilada sauce, cheese, lettuce, tomatoes and sour cream.",
      price: "$12.95",
      src: ""
    },
    {
      dish: "Enchiladas Super Casa Mexicana",
      ingredients: "Five different enchiladas - one beef, one chicken, one shredded beef, one spinach and one cheese. Topped with cheese, lettuce, tomatoes, sour cream and ranchero sauce.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Enchiladas Rancheras",
      ingredients: "Two cheese enchiladas topped with shredded beef or pork, enchilada sauce, lettuce, tomato and sour cream.",
      price: "$12.49",
      src: ""
    },
    {
      dish: "Enchiladas Mexicanisimas",
      ingredients: "One grilled chicken, one grilled steak, one cheese and one potato enchilada. Topped with potatoes, lettuce, tomatoes, sour cream and grated cheese. Served with rice.",
      price: "$15.49",
      src: ""
    },
    {
      dish: "Special La Casa Chimichanga",
      ingredients: "One chicken, one shredded beef and one shrimp chimichanga topped with lettuce, pico de gallo, sour cream and guacamole.",
      price: "$14.49",
      src: ""
    },
    {
      dish: "Chimichanga",
      ingredients: "A flour tortilla stuffed with your choice of shredded beef or spicy chicken, then deep-fried to a golden brown and topped with cheese sauce, sour cream, guacamole, lettuce, pico de gallo. Served with Mexican rice and beans.",
      price: "$12.75",
      src: ""
    },
    {
      dish: "Taquitos Mexicanos",
      ingredients: "Four rolled corn tortillas, two stuffed with beef and two with chicken. Served with guacamole, sour cream and special sauce with rice and beans.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Quesadilla Deluxe",
      ingredients: "Spicy chicken or shredded beef topped with lettuce, sour cream, tomatoes and guacamole.",
      price: "$11.99",
      src: ""
    },
    {
      dish: "Fajita Quesadila",
      ingredients: "Grilled chicken steak or both. Served with rice and beans.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Hawaiian Quesadilla",
      ingredients: "Filled with ham and pineapple, with lettuce, guacamole, sour cream and pico de gallo on the side.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Fried Tamales",
      ingredients: "Two fried homemade tamales topped with cheese sauce or spicy roasted tomatillo sauce. Served with sour cream, tomatoes and rice.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Casa Mexicana Combo",
      ingredients: "Chile relleno, taco, burrito, enchilada, rice and beans. Special dinner Chile relleno, enchilada, chalupa, tamale, taco, rice and beans.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Chile Verde",
      ingredients: "Pork tips, topped with green hot sauce, served with rice, beans and tortillas.",
      price: "$12.99",
      src: ""
    },
    {
      dish: "Tacos Autenticos",
      ingredients: "The Authentic Mexican taco soft corn tortilla with your choice of grilled steak, chorizo, carnitas or chicken with raw onions, cilantro and tomatillo sauce.",
      price: "$3.10",
      src: ""
    },
    {
      dish: "Cheese Burger",
      ingredients: "A delicious patty seasoned with our secret recipe of ground beef. Served with lettuce, tomato, onions, pickles, mayo. Served with fries.",
      price: "$11.99",
      src: ""
    },
    {
      dish: "Torta Mexican Sandwich",
      ingredients: "Grilled chicken, steak, caritas or chorizo served with mayo, lettuce, tomato, onions, avocado, cheese, jalapeños and served with fries.",
      price: "$13.49",
      src: ""
    }
  ]
  return (
      <>
        <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen relative">Especialidades</p>
        <div className="w-full h-10 rounded  text-white text-xs border-2 m-2 flex items-center justify-center">
          With cheese dip on top, add $1.25 extra.  
        </div>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
        
      </>
    )
}
