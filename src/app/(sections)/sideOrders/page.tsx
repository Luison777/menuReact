import CardFood from "@/components/cardfood";

export default function SideOrdersPage() {
  const side=[
    {
      dish: "Order of Cheese",
      ingredients: "",
      price: "$1.00",
      src: ""
    },
    {
      dish: "Pico de Gallo",
      ingredients: "",
      price: "$1.00",
      src: ""
    },
    {
      dish: "Jalapeños",
      ingredients: "",
      price: "$1.00",
      src: ""
    },
    {
      dish: "Sour Cream",
      ingredients: "",
      price: "$1.00",
      src: ""
    },
    {
      dish: "Chalupa",
      ingredients: "",
      price: "$4.99 (2) $7.49",
      src: ""
    },
    {
      dish: "Chile Poblano",
      ingredients: "",
      price: "$4.25 (2) $8.00",
      src: ""
    },
    {
      dish: "Beef or Chicken Flautas",
      ingredients: "",
      price: "$3.49 (2) $6.25",
      src: ""
    },
    {
      dish: "Tamales",
      ingredients: "",
      price: "$3.50 (2) $6.25",
      src: ""
    },
    {
      dish: "Fried Taquitos (Beef or Chicken)",
      ingredients: "",
      price: "$3.00 (2) $5.00",
      src: ""
    }
  ]
  const burritos=[
    {
      dish: "Bean Burrito",
      ingredients: "",
      price: "$4.25 (2)$.75",
      src: ""
    },
    {
      dish: "Chicken Burrito",
      ingredients: "",
      price: "$4.99 (2)$9.49",
      src: ""
    },
    {
      dish: "Beef Burrito",
      ingredients: "",
      price: "$4.99 (2)$9.49",
      src: ""
    },
    {
      dish: "Fried Chicken or Beef Burrito",
      ingredients: "",
      price: "$4.99 (2)$9.49",
      src: ""
    },
    {
      dish: "Steak or Grilled Chicken Burrito",
      ingredients: "",
      price: "$6.99 (2)$12.99",
      src: ""
    }
  ]
  const enchiladas=[
    {
      dish: "Chicken beef or cheese Enchilada",
      ingredients: "",
      price: "$3.25 (2)$5.99",
      src: ""
    },
  ]
  const quesadillas=[
    {
      dish: "Grilled Steak or Chicken Quesadilla",
      ingredients: "",
      price: "$6.99 (2)$12.99",
      src: ""
    },
    {
      dish: "Cheese Quesadilla",
      ingredients: "",
      price: "$3.49 (2)$6.00",
      src: ""
    },
    {
      dish: "Beef or Chicken Quesadilla",
      ingredients: "",
      price: "$5.25 (2)$9.99",
      src: ""
    },
    {
      dish: "Mushroom Quesadilla",
      ingredients: "",
      price: "$4.49 (2)$8.00",
      src: ""
    },
    {
      dish: "French Fries",
      ingredients: "",
      price: "$3.50",
      src: ""
    },
    {
      dish: "Rice",
      ingredients: "",
      price: "$3.00",
      src: ""
    },
    {
      dish: "Beans",
      ingredients: "",
      price: "$3.00",
      src: ""
    },
    {
      dish: "Corn Tortillas(3)",
      ingredients: "",
      price: "$1.00",
      src: ""
    },
    {
      dish: "Flour Tortillas(3)",
      ingredients: "",
      price: "$1.00",
      src: ""
    }
  ]
  const tacos=[
    {
      dish: "Beef taco ",
      ingredients: "",
      price: "$2.49 (2)$4.50 (3)$7.00",
      src: ""
    },
    {
      dish: "Chicken Taco",
      ingredients: "",
      price: "$2.49 (2)$4.50 (3)$7.00",
      src: ""
    },
    {
      dish: "Soft taco",
      ingredients: "",
      price: "$3.00 (2)$5.50 (3)$8.00",
      src: ""
    },
    
  ]
  const tostadas=[
    {
      dish: "Beef tostada ",
      ingredients: "Beef, lettuce, sour cream, tomatoes & shredded cheese",
      price: "(1)$4.50 (2)$8.00",
      src: ""
    },
    {
      dish: "Nacho tostada",
      ingredients: "Beef and cheese only",
      price: "(1)$4.50 (2)$8.00",
      src: ""
    },
   
  ]
  const tostaguacs=[
    {
      dish: "Special Tostaguac ",
      ingredients: "with chicken, beans, lettuce, sour cream, tomatoes & shredded cheese",
      price: "(1)$4.99 (2)$8.99",
      src: ""
    },
    {
      dish: "Mixed Tostaguac ",
      ingredients: "with beef, beans, lettuce, guacamole, tomatoes & shredded cheese",
      price: "(1)$4.99 (2)$8.99",
      src: ""
    },
  
    
  ]
  return (
      <>
        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Side Orders</p>
        <div className="w-full p-2 m-2 rounded shadow shadow-black text-black text-center text-xs">
          With nacho cheese, add $1.25 extra.  
        </div>
        {side.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Burritos</p>
        <div className="w-full p-2 m-2 rounded shadow shadow-black text-black text-center text-xs">
          Lettuce shredded cheese, add $0.99, with cheese dip add $1.25
        </div>
        {burritos.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Enchiladas</p>
        <div className="w-full p-2 m-2 rounded shadow shadow-black text-black text-center text-xs">
        With nacho cheese, add $1.25 extra.  
        </div>
        {enchiladas.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Quesadillas</p>
        {quesadillas.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Tacos</p>
        <div className="w-full p-2 m-2 rounded shadow shadow-black text-black text-center text-xs">
          Grilled steak or chicken add $1.00 per taco
        </div>
        {tacos.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Tostadas</p>
        {tostadas.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        <p className="block text-black w-full ml-2 text-2xl Mexicanero text-center text-orange-500">Tostaguacs</p>
        {tostaguacs.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        
      </>
    )
}
