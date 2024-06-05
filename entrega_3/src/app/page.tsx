import Image from "next/image";

export default function Home() {
  return (
   <div className=" w-screen h-screen">
    <div className=" w-screen h-[15vh] bg-slate-700"></div>
    <div className=" w-screen h-[85vh] bg-orange-300 flex items-center">
      <div className="absolute w-[40vw] h-[60vh] border-4 border-amber-300 right-10 items-center content-center text-center">
        <div className=" w-[30vw] ">
          <label htmlFor="email">Email</label>
        </div>
        <div className=" mb-20">
          <input

          type="email"
          id="email"
          name="email"
          required
          placeholder="Digite seu Email"

          className=" w-[30vw]"

          />
        </div>

        <div className=" w-[30vw]">
          <label htmlFor="senha">Senha</label>
        </div>
        <div>
          <input type="text" placeholder="Senha" className=" w-[30vw]" />
        </div>
      </div>
    </div>
   </div>
  );
}
