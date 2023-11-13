import CardFood from "@/components/cardfood";

export default function GrillPage() {
  const dishes=[
    {
      dish: "Fajitas ",
      ingredients: "chicken, steak or mix",
      price: "Single $15.99 Double $25.99",
      src: ""
    },
    {
      dish: "Fiesta Fajitas",
      ingredients: "chicken, steak and shrimp",
      price: "Single $17.99 Double $28.99",
      src: ""
    },
    {
      dish: "Fajitas Mexicana",
      ingredients: "chicken, steak and chorizo (mexican sausage)",
      price: "Single $16.49 Double $26.49",
      src: ""
    },
    {
      dish: "Fajitas Casa Mexicana ",
      ingredients: "chicken, steak, shrimp and chorizo (mexican sausage)",
      price: "Single $18.49 Double $28.99",
      src: ""
    },
    {
      dish: "Hawaiian Fajita",
      ingredients: "chicken, steak, shrimp, ham and pineapple",
      price: "Single $17.99 Double $28.99",
      src: ""
    },
    {
      dish: "Parillada Mexicana",
      ingredients: "A sizzling platter of tender marinated strips of beef, shrimp, chicken, pork and chorizo, sauteed using our special recipe. Served with refried beans, rice, salad and a quesadilla with chorizo.",
      price: "Single $19.49 Double $30.99",
      src: ""
    },
    {
      dish: "Parillada Special",
      ingredients: "A sizzling platter of char-broiled, thinly-sliced chicken breast, shrimp, beef, pork ribs and chorizo using our special recipe. Served with refried beans, rice, salad and one quesadilla with cheese and chorizo.",
      price: "Single $20.49 Double $32.99",
      src: ""
    },
    {
      dish: "Potato Fajita",
      ingredients: "Consisting of grilled chicken, steak and Mexican sausage on a baked potato topped with melted cheese and your choice of rice and beans or a tossed salad",
      price: "Single $15.99 add shrimp(6)$2.79",
      src: ""
    },
    {
      dish: "Casa Mexicana Quesadilla",
      ingredients: "Filled with steak, chicken, shrimp. Served with rice, beans, lettuce, sour cream and pico de gallo on the side.",
      price: "$15.99",
      src: ""
    },
    {
      dish: "Molcajete (Mohl-kah-heh-teh)",
      ingredients: "Steak, chicken and shrimp grilled with red bell peppers, tomatoes and onions, special sauce and fresh cheese. Served with rice, beans, pico de gallo, sour cream, guacamole, lettuce and tortillas.",
      price: "$20.99",
      src: ""
    },
    {
      dish: "Ribeye Steak a la Tampiqueña",
      ingredients: "Ribeye steak or T-bone a la Tampiqueña 10-12oz served with salad, rice, beans and flour or corn tortillas.",
      price: "$20.49",
      src: ""
    },
    {
      dish: "Ribeye Steak or T-bone Ranchero",
      ingredients: "10-12oz. ribeye steak with hot sauce on top. Served with rice, beans, flour or corn tortillas.",
      price: "$20.49",
      src: ""
    },
    {
      dish: "Ribeye Steak or T-bone Mexicano",
      ingredients: "10-12oz. ribeye steak topped with cooked onions, tomatoes, bell peppers. Served with rice, beans, flour or corn tortillas.",
      price: "$20.49",
      src: ""
    },
    {
      dish: "Steak or Chicken Breast with Shrimp",
      ingredients: "Western dinner. Choice of ribeye steak or T-bone (10oz), or boneless chicken breast over sizzling vegetables plus 10 shrimps decorated with garden vegetables, tortillas and a baked potato with cheese for a healthy appetite.",
      price: "$19.49",
      src: ""
    },
    {
      dish: "Char-grilled Ribeye Steak",
      ingredients: "Served with a baked potato with butter, steamed vegetables and sour cream.",
      price: "$20.99",
      src: ""
    },
    {
      dish: "Cajun Pasta",
      ingredients: "Grilled shrimp or chicken with penne or bow-tie pasta sautéed in a creamy cajun sauce.",
      price: "$16.99",
      src: ""
    }
  ]
  
  return (
      <>
        <div className="w-full p-2 m-2 rounded shadow shadow-black text-black text-center text-xs">
          <p className="text-red-500">Fajitas are served on VERY HOT skillest</p>
          We use oor special recipe to cook tender strips of marinated chicken breast, steak or shripm. All fajitas are
          cooked with bell peppers, sauteed onions and tomatoes. Garnished on the side with lettuce, guacamole, sour cream,
          pico de gallo, rice and beans.
        </div>
        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">From the Grill</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        
        
      </>
    )
}
