import Header from "../components/Header";

export default function NoPage() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col gap-y-4 w-full h-[600px] items-center justify-center ">
          <div className="text-9xl font-bold tracking-widest">404</div>
          <div className="text-5xl font-bold tracking-tight">
            Sitio no encontrado
          </div>
        </div>
      </div>
    </>
  );
}
