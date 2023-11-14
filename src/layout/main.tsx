export default function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <main className="w-full h-full flex flex-wrap justify-center rounded-t-lg pt-5 ">
          {children}
          <p className="w-full  ml-2 text-[12px] text-red-500 text-center">Please read plate description carefully we do not take back plates once is cooked</p>
          <p className=" w-full ml-2 text-[12px] text-red-500 text-center">The first two baskets of chips and salsa are complimentary. The third refill would be charged at $0.99</p>
          <p className="w-full mx-2 text-[12px] text-red-500 text-center mb-10">
            Throughly cooking food of animal origin such as beef, fish, pork, poultry, eggs or shellfish reduces the risk of food borne illnesses. Individuals with certain health conditions may be at higher risk if these food are consumed raw or undercooked. Consult your physician or public health officials for further information.
          </p>

        </main>
    );
}