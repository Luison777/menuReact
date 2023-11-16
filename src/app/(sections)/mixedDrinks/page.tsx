import CardFood from "@/components/cardfood";

export default function DrinksPage() {
  const drinks=[
    {
      dish: "Frozen Daiquiris",
      ingredients: "Our Famous Daiquiris are available in: Strawberry Peach Piña Colada made with our secret homemade recipe!",
      price: "$11.75",
      src: ""
    },
    {
      dish: "Cocktails",
      ingredients: '"Fuzzy Navel", "Mai Thai", "Hawaiian Margarita", "Blue Hawaiian", "Screw Driver", "Long Island Ice Tea", "Martini", "Sex on the Beach", "Bahama Mama",  "Midori Sour"',
      price: "",
      src: ""
    },
    {
      dish: "Sangria",
      ingredients:  "Sangria $7.99, Sangria Pitcher $17.99, Wine Glass $7.79 options(Chablis, Burgundy, Rose, Zinfandel, Chardonnay, Merlot, Cabernet)",
      price: "",
      src: ""
    },
    {
      dish: "Beer",
      ingredients:  "Mexican Beer, Domestic Beer, Imported Beer",
      price: "$4.99",
      src: ""
    },
    {
      dish: "Draft Beer",
      ingredients: "10oz $4.25, 25oz $6.75, 32oz $7.75",
      price: "",
      src: ""
    },
    {
      dish: "Margaritas",
      ingredients: "Regular $7.75 add flavor: $0.89, Jumbo $11.25 add flavor: $1.49, Monster $15.99 add flavor: $1.99, Pitcher $20.99 add flavor: $2.49, Flavors(Banana, Strawberry, Peach, Tamarindo, Mango, Cantaloupe, Blue Curacao, Raspberry, Lime)",
      price: "",
      src: ""
    },
    {
      dish: "Premium Tequila",
      ingredients:' "Jose Cuervo","Patron", "Don Julio", "Cazadores", "Corazon", "Hornitos", "El Jimador", "Herradura"',
      price: "$8.99",
      src: ""
    },
    {
      dish: "Soft Drinks",
      ingredients: "Soft Drink $3.25, Mexican Sodas $2.50, Natural Flavor Water" ,
      price: "",
      src: ""
    }
  ]
  
  return (
      <>
        <p className="block  w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Mixed Drinks</p>
        {drinks.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

      </>
    )
}
