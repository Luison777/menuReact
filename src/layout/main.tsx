export default function Main({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <main className="w-full h-full flex flex-wrap justify-center rounded-t-lg ">
            {children}
        </main>
    );
}