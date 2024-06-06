import React from 'react'
import Header from '@/app/componentes/header'
import Side from "../../componentes/side"
import Link from "next/link"

function Cadastro() {
  return (
    <div className=' w-screen h-screen'>
      <Header></Header>
      <div className='flex items-center justify-center'>
      <div className=" w-[40vw] rounded-2xl bg-beje2 mt-10 h-[75vh] flex-col items-center content-center text-center justify-center justify-items-center">
        <div className=" text-3xl">
          <h1>Cadastro</h1>
        </div>
        <div className=" w-[30vw] ml-[5vw] flex items-start">
          <label htmlFor="email">Email</label>
        </div>
        <div className=" mb-5">
          <input

          type="email"
          id="email"
          name="email"
          required
          placeholder="Digite seu Email"

          className=" pl-2 w-[30vw] h-[6vh] rounded-2xl"

          />
        </div>
        <div className=" w-[30vw] ml-[5vw] flex items-start">
          <label htmlFor="user">Usuário</label>
        </div>
        <div className=" mb-5">
          <input

          type="user"
          id="user"
          name="user"
          required
          placeholder="Digite seu nome de Usuário"

          className=" pl-2 w-[30vw] h-[6vh] rounded-2xl"

          />
        </div>

        <div className="w-[30vw] ml-[5vw] flex items-start ">
          <label htmlFor="senha">Senha</label>
        </div>
        <div>
          <input type="text" placeholder="Senha" className="mb-5 pl-2 w-[30vw] h-[6vh] rounded-2xl" />
        </div>
        <div className="w-[30vw] ml-[5vw] flex items-start ">
          <label htmlFor="senha2">Confirmar senha</label>
        </div>
        <div>
          <input type="text" placeholder="Senha" className="mb-5 pl-2 w-[30vw] h-[6vh] rounded-2xl" />
        </div>
        <div className="w-[30vw] ml-[5vw] flex justify-around mt-2">
          <Link href={"/"} >
            <button className="w-[13vw] h-[5vh] bg-ivory rounded-[20px]"> Cadastrar </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cadastro