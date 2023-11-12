import CardFood from "@/components/cardfood";

export default function DessertsPage() {
  const desserts=[
    {dish:'Fried Icecream',
    ingredients:'',
    price:'$4.25',
    src:''},
    {dish:'Changolais',
    ingredients:'',
    price:'$4.25',
    src:''},
    {dish:'Mexican Flan',
    ingredients:'',
    price:'$4.25',
    src:''},
    {dish:'Cheescake',
    ingredients:'',
    price:'$4.25',
    src:''},
    {dish:'Sopapilla w/ iceCream',
    ingredients:'',
    price:'$4.25',
    src:''},
    {dish:'Apple Burrito',
    ingredients:'',
    price:'$4.25',
    src:''},
  ]
  return (
      <>
        <p className="block text-black w-full ml-2 text-2xl">Desserts</p>
        {desserts.map((obj,idx)=> <CardFood key={idx} dish={obj.dish} ingredients={obj.ingredients} price={obj.price} src={obj.src}></CardFood>)}

        
      </>
    )
}
