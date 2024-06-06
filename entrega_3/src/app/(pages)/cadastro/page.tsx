import React from 'react'
import Header from '@/app/componentes/header'
import Logo from "../../../public/Design sem nome (1).png"
import Image from "next/image";

function Cadastro() {
  return (
    <div className=' w-screen h-screen'>
      <Header></Header>
      <div className=' h-[85vh] w-[30vw] bg-beje2'>
      <input

      type="email"
      id="email"
      name="email"
      required
      placeholder="Buscar"

      className=" mt-7 pl-2 w-[20vw] h-[6vh] rounded-2xl"

      />

      </div>
    </div>
  )
}

export default Cadastro