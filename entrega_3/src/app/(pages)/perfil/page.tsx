import React from 'react'
import Header from '@/app/componentes/header'
import Side from "../../componentes/side"
import Image from "next/image";
import Perfil_ from "../../../../public/person_24dp_FILL0_wght400_GRAD0_opsz24.png"

function Perfil() {
  return (
    <div className=' w-screen h-screen'>
      <Header></Header>
      <Side></Side>
      <div className=' absolute right-0 bottom-0 h-[85vh] w-[70vw] flex items-center justify-center'>
        <div className=' flex h-[75vh] w-[60vw] bg-beje2'>
            <div className=' w-[30vw] h-[75vh]'>
                <div className='mb-[10vh] ml-[10vw] h-[100px] text-center w-[100px] mt-10 border-slate-900 border-2 rounded-full'>
                    <Image className="" src={Perfil_} alt=''></Image>
                    <p className=''>Perfil</p>
                </div>

                <div className='ml-10'>
                    <p className='mb-5'>Email:</p>
                    <p className='mb-5'>Nome:</p>
                    <p>Bio:</p>
                </div>
            </div>
            <div className=' w-[30vw] h-[75vh] text-center'>
            <div className="mt-10 text-xl pb-5 text-slate-50">
                <h1>Altere os seus dados</h1>
            </div>
                <div className=" w-[20vw] ml-[5vw] flex items-start">
                    <label htmlFor="email">Email</label>
                </div>
                <div className=" mb-5">
                    <input

                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Digite seu Email"

                    className=" pl-2 w-[20vw] h-[6vh] rounded-2xl"

                    />
                </div>
                <div className=" w-[20vw] ml-[5vw] flex items-start">
                    <label htmlFor="user">Usuário</label>
                </div>
                <div className=" mb-5">
                    <input

                    type="user"
                    id="user"
                    name="user"
                    required
                    placeholder="Nome de Usuário"

                    className=" pl-2 w-[20vw] h-[6vh] rounded-2xl"

                    />
                </div>

                <div className="w-[20vw] ml-[5vw] flex items-start ">
                    <label htmlFor="senha">Senha</label>
                </div>
                <div>
                    <input type="text" placeholder="Senha" className="mb-5 pl-2 w-[20vw] h-[6vh] rounded-2xl" />
                </div>
                <div className="w-[20vw] ml-[5vw] flex items-start ">
                    <label htmlFor="senha2">Confirme sua senha</label>
                </div>
                <div>
                    <input type="text" placeholder="Senha" className="mb-5 pl-2 w-[20vw] h-[6vh] rounded-2xl" />
                </div>
                <div className="w-[20vw] ml-[5vw] flex justify-around mt-5">
                    <button className="w-[13vw] h-[5vh] bg-ivory rounded-[20px]"> Alterar </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil