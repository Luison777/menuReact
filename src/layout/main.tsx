export default function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <main className="w-full h-full flex flex-wrap justify-center rounded-t-lg ">
          <p className=" ml-2 text-[12px] text-red-500 text-center">Please read plate description carefully we do not take back plates once is cooked</p>
          <p className=" ml-2 text-[12px] text-red-500 text-center">The first two baskets of chips and salsa are complimentary. The third refill would be charged at $0.99</p>
            {children}
        </main>
    );
}