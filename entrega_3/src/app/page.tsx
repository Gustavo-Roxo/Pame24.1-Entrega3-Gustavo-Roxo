import Header from "@/app/componentes/header";
import Image from "next/image";
import Icon from "../../public/3021797.png"
import LinkButton from "@/app/componentes/button";

export default function Home() {
  return (
   <div className=" w-screen h-screen">
    <Header></Header>
    <div className=" w-screen h-[85vh] bg-ivory flex items-center">
      <div className=" ml-[10vw] h-[50vh] w-[30vw] mb-[15vh]">
        <Image src={Icon} alt=""></Image>
      </div>
      <div className="absolute w-[40vw] rounded-2xl bg-beje2 h-[60vh] flex-col right-10 items-center content-center text-center justify-center justify-items-center">
        <div className=" text-3xl pb-5">
          <h1>Faça o seu login</h1>
        </div>
        <div className=" w-[30vw] ml-[5vw] flex items-start">
          <label htmlFor="email">Email</label>
        </div>
        <div className=" mb-10">
          <input

          type="email"
          id="email"
          name="email"
          required
          placeholder="Digite seu Email"

          className=" pl-2 w-[30vw] h-[6vh] rounded-2xl"

          />
        </div>

        <div className="w-[30vw] ml-[5vw] flex items-start ">
          <label htmlFor="senha">Senha</label>
        </div>
        <div>
          <input type="text" placeholder="Senha" className=" pl-2 w-[30vw] h-[6vh] rounded-2xl" />
        </div>
        <div className="w-[30vw] ml-[5vw] flex justify-around mt-5">
          <button className="w-[13vw] h-[5vh] bg-ivory rounded-[20px]"> Entrar </button>
          <LinkButton name={"Cadastrar"} rota={"cadastro"}></LinkButton>
        </div>
      </div>
    </div>
   </div>
  );
}
