import CardFood from "@/components/cardfood";

export default function ChildsPage() {
    const dishes=[  {
        dish: "N1. Taco, rice & beans.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N2. Burrito, rice & beans.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N3. Enchilada, rice & beans.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N4. Cheese quesadilla, rice & beans.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N5. Cheeseburger & fries.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N6. Hotdog & fries.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N7. Chicken fingers & fries.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N8. Chimichanga, rice & beans.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
      {
        dish: "N9. Grilled chicken strips, rice or fries.",
        ingredients: "",
        price: "$6.99",
        src: ""
      },
    ]
  return (
      <>
        <p className="block w-full ml-2 text-2xl Mexicanero text-center text-white neonGreen">Child&apos;s Menu</p>
        <p className=" m-2 text-[12px] text-red-500 text-center w-full">This Menu applies to children under 10 years of age.Add $2.00 for adults. Soft Drinks included. No soft drinks on to-go orders. For cheese sauce on any item $1.15 extra</p>
        {dishes.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}
      </>
    )
}
